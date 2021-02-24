
const pro = process.env.NODE_ENV === 'production'

module.exports = (phase, { defaultConfig }) => ({
    server : {
        host : '0.0.0.0'
    },
    env : {
        DEPLOY_ENV: process.env.DEPLOY_ENV,
        LOCAL_API : 'http://localhost:8081/api',
        DEV_API : 'http://192.168.0.100:8082/api',
        SIT_API : '',
        customKey: 'my-value',

    },
    node : {
        fs : 'empty'
    }
})
