const ENV = import.meta.env.VITE_ENV || 'dev';

const config = {
  dev: {
    API_BASE_URL: 'http://localhost:8080',
  },
  qa: {
    API_BASE_URL: 'https://qa.example.com/api',
  },
  stage: {
    API_BASE_URL: 'https://stage.example.com/api',
  },
  prod: {
    API_BASE_URL: 'https://prod.example.com/api',
  },
};

export default config[ENV];
