
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
                sh 'node server.js'
            }
        }
	stage('Docker') {
            steps {
                sh 'docker build . -t "myapp" .' 
            }
        }
    }
}
