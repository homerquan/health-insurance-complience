const development = {
    apiUrl: 'http://127.0.0.1:8000', 
};

const production = {
    apiUrl: 'http://127.0.0.1:8000', // change it to your domains
};

const config = process.env.NODE_ENV === 'development' ? production : development;

module.exports = config;