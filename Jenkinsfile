pipeline{
    agent {label 'linux'}
    stages{
        stage('Build'){
            steps{
                sh './gradlew clean check --no-daemon'
            }
        }
    }
    post{
        always{
            junit(
                allowEmptyResults:true,
                testResults: '**/build/test-results/test/*.xml'
            )
            recordIssues(
                enabledForFailures: true, aggregatingResults: true,
                tools: [java(), checkstyle(pattern: '**/build/**/eslint.xml/', reportEncoding: 'UTF-8')]
            )
        }
    }

}