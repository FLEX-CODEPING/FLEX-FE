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
    }

    stages {
        stage('Checkout') {
            steps {
                script {
                    checkout scm
                }
            }
        }

        stage('Set Up Docker Buildx') {
            steps {
                echo 'Setting up Docker Buildx...'
                script {
                    sh '''
                    docker buildx create --use
                    '''
                }
            }
        }

        stage('Cache Docker Layers') {
            steps {
                echo 'Caching Docker layers...'
                script {
                    sh '''
                    docker buildx build --cache-from type=local,src=/tmp/.buildx-cache \
                    --cache-to type=local,dest=/tmp/.buildx-cache-new,mode=max .
                    '''
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                script {
                    sh '''
                    docker buildx build \
                        --build-arg NEXT_PUBLIC_KAKAO_API_KEY=${NEXT_PUBLIC_KAKAO_API_KEY} \
                        --build-arg NEXT_PUBLIC_KAKAO_SECRET=${NEXT_PUBLIC_KAKAO_SECRET} \
                        --build-arg NEXT_PUBLIC_KAKAO_REDIRECT_URI=${NEXT_PUBLIC_KAKAO_REDIRECT_URI} \
                        --build-arg NEXT_PUBLIC_SERVER=${NEXT_PUBLIC_SERVER} \
                        --build-arg NEXT_PUBLIC_LOCAL_SERVER=${NEXT_PUBLIC_LOCAL_SERVER} \
                        -t ${IMAGE_NAME}:${IMAGE_TAG} .
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

                                # .env 파일을 사용하여 환경 변수 설정
                                export $(cat /path/to/.env | xargs)

                                docker compose down --remove-orphans

                                # Docker Compose 파일에 IMAGE_TAG 적용
                                sed -i "s|image: ${IMAGE_NAME}:.*|image: ${IMAGE_NAME}:${IMAGE_TAG}|" docker-compose.yml

                                docker compose pull
                                docker compose up -d

                                docker image prune -f

                                docker compose ps
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