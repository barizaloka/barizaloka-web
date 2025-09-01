pipeline {
    agent any

    stages {
        stage('Setup & Dependencies') {
            steps {
                echo 'Verifying environment...'
                sh 'php --version'
                sh 'node --version'

                echo 'Installing Composer dependencies...'
                sh 'composer install'

                echo 'Installing npm dependencies...'
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                echo 'Running the build script...'
                sh 'npm run build'
            }
        }

        stage('Package') {
            steps {
                echo 'Cleaning up and creating the zip file...'
                // Remove the node_modules and vendor directories to reduce the zip file size
                sh 'rm -rf node_modules'
                sh 'rm -rf vendor'

                // Create the zip archive, excluding the .git folder
                sh 'zip -r laravel.zip . -x ".git/*"'
            }
        }
    }
}
