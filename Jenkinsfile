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
        NEXT_PUBLIC_KAKAO_API_KEY = credentials('next-public-kakao-api-key')
        NEXT_PUBLIC_KAKAO_SECRET = credentials('next-public-kakao-secret')
        NEXT_PUBLIC_KAKAO_REDIRECT_URI = credentials('next-public-kakao-redirect-uri')
        NEXT_PUBLIC_SERVER = credentials('next-public-server')
        NEXT_PUBLIC_LOCAL_SERVER = credentials('next-public-local-server')
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
                    sh """
                    docker build --build-arg NEXT_PUBLIC_KAKAO_API_KEY=${NEXT_PUBLIC_KAKAO_API_KEY} \
                                 --build-arg NEXT_PUBLIC_KAKAO_SECRET=${NEXT_PUBLIC_KAKAO_SECRET} \
                                 --build-arg NEXT_PUBLIC_KAKAO_REDIRECT_URI=${NEXT_PUBLIC_KAKAO_REDIRECT_URI} \
                                 --build-arg NEXT_PUBLIC_SERVER=${NEXT_PUBLIC_SERVER} \
                                 --build-arg NEXT_PUBLIC_LOCAL_SERVER=${NEXT_PUBLIC_LOCAL_SERVER} \
                                 --build-arg NEXT_RUNTIME="nodejs" \
                                 --build-arg DATADOG_ENV="dev" \
                                 --build-arg NEXT_PUBLIC_APPLICATION_ID=${NEXT_PUBLIC_APPLICATION_ID} \
                                 --build-arg NEXT_PUBLIC_CLIENT_TOKEN=${NEXT_PUBLIC_CLIENT_TOKEN} \
                                 -t ${IMAGE_NAME}:${IMAGE_TAG} .
                    """
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
