const axios = require('axios');

const healthcheck =  async (flag) => {
    try {
        const application = await axios.get(flag);

        if(application && application.status === 200){
            return 'OK';
        }

        return 'NAO OK';
    } catch (error) {
        return 'NAO OK';
    }
    
}

module.exports = { healthcheck };