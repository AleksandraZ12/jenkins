
pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
                echo 'Hello World'
            }
        }
    }
}

stages {
        stage('Run app') {
            steps {
                sh 'node server.js'
            }
        }
    }
}
