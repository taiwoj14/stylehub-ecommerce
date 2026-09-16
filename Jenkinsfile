pipeline {
    agent any

    environment {
        IMAGE_NAME = "stylehub"
        CONTAINER_NAME = "stylehub-web"
        TEST_PORT = "8091"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t ${IMAGE_NAME}:latest .'
            }
        }

        stage('Run Test Container') {
            steps {
                sh '''
                    docker rm -f ${CONTAINER_NAME} || true
                    docker run -d \
                        --name ${CONTAINER_NAME} \
                        -p ${TEST_PORT}:80 \
                        ${IMAGE_NAME}:latest
                '''
            }
        }

        stage('Test Website') {
            steps {
                sh '''
                    sleep 5
                    curl -f http://localhost:${TEST_PORT}
                '''
            }
        }

        stage('Cleanup Test Container') {
            steps {
                sh '''
                    docker rm -f ${CONTAINER_NAME} || true
                '''
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    docker rm -f ${CONTAINER_NAME} || true
                    docker run -d \
                        --name ${CONTAINER_NAME} \
                        -p ${TEST_PORT}:80 \
                        ${IMAGE_NAME}:latest
                '''
            }
        }
    }

    post {
        success {
            echo 'StyleHub deployment successful!'
        }

        failure {
            echo 'StyleHub deployment failed.'
        }
    }
}