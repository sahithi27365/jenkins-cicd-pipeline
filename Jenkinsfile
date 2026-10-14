
pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building the sample application...'
                sh 'test -f app.js'
                sh 'test -f Dockerfile'
            }
        }

        stage('Test') {
            steps {
                echo 'Testing the application...'
                sh 'node --check app.js'
            }
        }

        stage('Docker Build') {
            steps {
                echo 'Building Docker image...'
                sh 'docker build -t jenkins-cicd-app:latest .'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application container...'
                sh 'docker rm -f jenkins-cicd-app || true'
                sh 'docker run -d --name jenkins-cicd-app -p 3000:3000 --restart unless-stopped jenkins-cicd-app:latest'
            }
        }
    }

    post {
        success {
            echo 'CI/CD pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed. Check the console output.'
        }
    }
}
