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
                echo 'Building Docker image...'
                script {
                    def envVars = readJSON text: credentials('frontend-env')
                    envVars.each { key, value ->
                        echo "Environment Variable: ${key} = ${value}"
                    }

                    sh '''
                    docker build -t ${IMAGE_NAME}:${IMAGE_TAG} .
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
