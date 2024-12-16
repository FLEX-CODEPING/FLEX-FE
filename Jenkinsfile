pipeline {
    agent any

    environment {
        DOCKER_CREDENTIALS = credentials('docker-repo-credential')
        DOCKER_USERNAME = "${DOCKER_CREDENTIALS_USR}"
        GITHUB_TOKEN = credentials('github-access-token')
        SSH_CREDENTIALS = credentials('flex-server-pem')
        REMOTE_USER = credentials('remote-user')
        BASTION_HOST = credentials('bastion-host')
        REMOTE_HOST = credentials('dev-web-host')
        SLACK_CHANNEL = '#frontend-jenkins'
        IMAGE_NAME = "${DOCKER_USERNAME}/flex-frontend"
        IMAGE_TAG = "${BUILD_NUMBER}"
        envFile = credentials('frontend-env')
    }

    stages {
        stage('Checkout') {
            steps {
                script {
                    checkout scm
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    def envVars = readJSON file: '/var/lib/jenkins/jobs/dev-web/env.json'

                    envVars.each { key, value ->
                        echo "Environment Variable: ${key} = ${value}"
                    }

                    // Bash 스크립트 실행
                    sh '''
                    #!/bin/bash

                    # 환경 변수 설정
                    NEXT_PUBLIC_KAKAO_API_KEY="${envVars.NEXT_PUBLIC_KAKAO_API_KEY}"
                    NEXT_PUBLIC_KAKAO_SECRET="${envVars.NEXT_PUBLIC_KAKAO_SECRET}"
                    NEXT_PUBLIC_KAKAO_REDIRECT_URI="${envVars.NEXT_PUBLIC_KAKAO_REDIRECT_URI}"
                    NEXT_PUBLIC_SERVER="${envVars.NEXT_PUBLIC_SERVER}"
                    NEXT_PUBLIC_LOCAL_SERVER="${envVars.NEXT_PUBLIC_LOCAL_SERVER}"
                    NEXT_RUNTIME="${envVars.NEXT_RUNTIME}"
                    DATADOG_ENV="${envVars.DATADOG_ENV}"
                    NEXT_PUBLIC_APPLICATION_ID="${envVars.NEXT_PUBLIC_APPLICATION_ID}"
                    NEXT_PUBLIC_CLIENT_TOKEN="${envVars.NEXT_PUBLIC_CLIENT_TOKEN}"

                    # Docker 빌드 명령어 실행
                    docker buildx build \
                        --build-arg NEXT_PUBLIC_KAKAO_API_KEY="$NEXT_PUBLIC_KAKAO_API_KEY" \
                        --build-arg NEXT_PUBLIC_KAKAO_SECRET="$NEXT_PUBLIC_KAKAO_SECRET" \
                        --build-arg NEXT_PUBLIC_KAKAO_REDIRECT_URI="$NEXT_PUBLIC_KAKAO_REDIRECT_URI" \
                        --build-arg NEXT_PUBLIC_SERVER="$NEXT_PUBLIC_SERVER" \
                        --build-arg NEXT_PUBLIC_LOCAL_SERVER="$NEXT_PUBLIC_LOCAL_SERVER" \
                        --build-arg NEXT_RUNTIME="$NEXT_RUNTIME" \
                        --build-arg DATADOG_ENV="$DATADOG_ENV" \
                        --build-arg NEXT_PUBLIC_APPLICATION_ID="$NEXT_PUBLIC_APPLICATION_ID" \
                        --build-arg NEXT_PUBLIC_CLIENT_TOKEN="$NEXT_PUBLIC_CLIENT_TOKEN" \
                        -t "${IMAGE_NAME}:${IMAGE_TAG}" .
                    '''
                }
            }
        }




        stage('Docker Build & Push') {
            steps {
                script {
                    def dockerImage = docker.build("${IMAGE_NAME}:${IMAGE_TAG}")
                    docker.withRegistry('https://registry.hub.docker.com', 'docker-repo-credential') {
                        dockerImage.push()
                        dockerImage.push('latest')
                    }
                    slackSend(channel: SLACK_CHANNEL, message: "🐳 Docker image ${IMAGE_NAME}:${IMAGE_TAG} built and pushed for Build #${env.BUILD_NUMBER}.")
                }
            }
        }

        stage('Deploy to Remote Server') {
            steps {
                sshagent(credentials: ['flex-server-pem']) {
                    script {
                        sh """
                            ssh -J ${REMOTE_USER}@${BASTION_HOST} ${REMOTE_USER}@${REMOTE_HOST} '
                                set -e

                                docker stop frontend
                                docker rm frontend
                                docker run -d \
                                    --name frontend \
                                    -p 3000:3000 \
                                    ${IMAGE_NAME}:${IMAGE_TAG}
                            '
                        """
                        slackSend(channel: SLACK_CHANNEL, message: "🚀 NEXT.JS Deployment SUCCEEDED for Build #${env.BUILD_NUMBER}.")
                    }
                }
            }
            post {
                success {
                    echo "Deployment completed successfully."
                }
                failure {
                    slackSend(channel: SLACK_CHANNEL, message: "⛔️ NEXT.JS Deployment FAILED for Build #${env.BUILD_NUMBER}.")
                }
            }
        }
    }
}
