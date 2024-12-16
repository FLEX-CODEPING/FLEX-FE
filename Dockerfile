# 1단계: 의존성 설치
FROM node:18-alpine AS deps
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# 2단계: 빌더
FROM node:18-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# 빌드 인자 정의
ARG NEXT_PUBLIC_KAKAO_API_KEY
ARG NEXT_PUBLIC_KAKAO_SECRET
ARG NEXT_PUBLIC_KAKAO_REDIRECT_URI
ARG NEXT_PUBLIC_SERVER
ARG NEXT_PUBLIC_LOCAL_SERVER
ARG NEXT_RUNTIME
ARG DATADOG_ENV
ARG NEXT_PUBLIC_APPLICATION_ID
ARG NEXT_PUBLIC_CLIENT_TOKEN

# .env 파일 생성
RUN echo "NEXT_PUBLIC_KAKAO_API_KEY=$NEXT_PUBLIC_KAKAO_API_KEY" > .env && \
    echo "NEXT_PUBLIC_KAKAO_SECRET=$NEXT_PUBLIC_KAKAO_SECRET" >> .env && \
    echo "NEXT_PUBLIC_KAKAO_REDIRECT_URI=$NEXT_PUBLIC_KAKAO_REDIRECT_URI" >> .env && \
    echo "NEXT_PUBLIC_SERVER=$NEXT_PUBLIC_SERVER" >> .env && \
    echo "NEXT_PUBLIC_LOCAL_SERVER=$NEXT_PUBLIC_LOCAL_SERVER" >> .env && \
    echo "NEXT_RUNTIME=$NEXT_RUNTIME" >> .env && \
    echo "DATADOG_ENV=$DATADOG_ENV" >> .env && \
    echo "NEXT_PUBLIC_APPLICATION_ID=$NEXT_PUBLIC_APPLICATION_ID" >> .env && \
    echo "NEXT_PUBLIC_CLIENT_TOKEN=$NEXT_PUBLIC_CLIENT_TOKEN" >> .env && \
    chmod 644 .env

# Next.js 애플리케이션 빌드
RUN npm run build

# 3단계: 실행 환경
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

RUN apk add --no-cache libc6-compat
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/.env ./.env

USER nextjs

EXPOSE 3000
CMD ["node", "server.js"]