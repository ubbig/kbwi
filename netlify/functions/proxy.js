const axios = require('axios');

exports.handler = async function(event, context) {
    console.log('Function `handler` invoked', { path: event.path, httpMethod: event.httpMethod });

    const path = event.path.replace(/\.netlify\/functions\/[^/]+/, '');
    const url = `https://8296084146.for-seoul.synctreengine.com${path}`;

    console.log(`Request URL: ${url}`);

    try {
        const { data } = await axios({
            method: event.httpMethod,
            url,
            data: event.body,
            headers: event.headers,
        });

        console.log('Response received:', data);
        return {
            statusCode: 200,
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' },
        };
    } catch (error) {
        console.error('Error during the request:', error);

        return {
            statusCode: error.response ? error.response.status : 500,
            body: error.message || 'Internal Server Error',
        };
    }
};
