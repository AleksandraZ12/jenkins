
pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
                echo 'Hello World'
            }
        }
        stage('Run app') {
            steps {
                echo 'start server.js'
            }
        }
	stage('Docker') {
            steps {
                sh 'docker build -t "myapp" .' 
            }
        }
	stage('testapp') {
            steps {
                sh 'npm test'
            }
        }
    }
}
