# 1단계: 의존성 설치
FROM node:18-alpine AS deps
WORKDIR /app

# package-lock.json 파일을 사용하므로 yarn 대신 npm을 사용합니다
COPY package.json package-lock.json ./

# 의존성 설치
RUN npm ci

# 2단계: 빌더
FROM node:18-alpine AS builder
WORKDIR /app

# 의존성 복사
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# 빌드 인자 정의
ARG NEXT_PUBLIC_KAKAO_API_KEY
ARG NEXT_PUBLIC_KAKAO_SECRET
ARG NEXT_PUBLIC_KAKAO_REDIRECT_URI
ARG NEXT_PUBLIC_SERVER
ARG NEXT_PUBLIC_LOCAL_SERVER

# Next.js 애플리케이션 빌드
RUN npm run build

# 3단계: 실행 환경
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

# 시스템 의존성 설치 (필요한 경우)
RUN apk add --no-cache libc6-compat

# 애플리케이션 사용자 생성
RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 nextjs

COPY --from=builder /app /app

# 사용자 변경
USER nextjs

# 포트 설정
EXPOSE 3000

CMD ["node", "server.js"]