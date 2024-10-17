pipeline{

    agent any
    stages{

            stage("Create Docker Build"){
              steps{
                sh "sudo -su"
                sh 'docker compose build'
              }
            }
            stage("Run Docker Build"){
              steps{
                sh 'docker compose up'
              }
            }
    }
}