import { config } from './common';

export const environment = Object.assign({
  production: true,
  //baseUrl: 'https://gestion-des-transports-back.herokuapp.com/'
  baseUrl: 'http://localhost:8080/'
}, config);
