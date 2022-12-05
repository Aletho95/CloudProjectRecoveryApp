const constansts = {
    serverBaseURL: (process.env.NODE_ENV === 'production') ? 'https://iob.news:3000' : 'https://cloud-project-recovery-app-backend-4yyqmoxy6a-uc.a.run.app' //TODO: If deploying to heroku, change URL
}

export default constansts;

//serverBaseURL: (process.env.NODE_ENV === 'production') ? 'https://iob.news:3000' : 'http://localhost:3000' //TODO: If deploying to heroku, change URL