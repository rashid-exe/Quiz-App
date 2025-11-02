pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Cloning the repository...'
                checkout scm
            }
        }

        stage('Validate Files') {
            steps {
                echo 'Checking for basic file structure...'
                sh '''
                if [ ! -f index.html ]; then
                  echo "❌ index.html not found!"
                  exit 1
                fi
                if [ ! -d css ] && [ ! -d styles ]; then
                  echo "⚠️ No CSS folder found (css/ or styles/)"
                fi
                if [ ! -d js ] && [ ! -d scripts ]; then
                  echo "⚠️ No JS folder found (js/ or scripts/)"
                fi
                echo "✅ Structure looks fine."
                '''
            }
        }

        stage('Lint HTML & JS') {
            steps {
                echo 'Running HTML and JS lint check (basic)...'
                sh '''
                echo "Checking HTML files..."
                grep -i "<html" index.html && echo "✅ HTML syntax looks good." || echo "⚠️ Check HTML content."
                
                echo "Checking JS files..."
                find . -name "*.js" -exec echo "Found JS file: {}" \\;
                '''
            }
        }

        stage('Deploy (Demo)') {
            steps {
                echo 'Simulating deployment...'
                sh '''
                mkdir -p /tmp/quiz-app-deploy
                cp -r * /tmp/quiz-app-deploy/
                echo "✅ Files copied to /tmp/quiz-app-deploy (demo deploy)."
                '''
            }
        }
    }

    post {
        success {
            echo '🎉 Pipeline finished successfully!'
        }
        failure {
            echo '❌ Pipeline failed. Check console output.'
        }
    }
}
