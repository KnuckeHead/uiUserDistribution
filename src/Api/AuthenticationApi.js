import axios from 'axios';
import * as ClientConfig from '../appsettings.json';

export function RegisterUser(userData) {
    return axios({
      method: "post",
      url: `${ClientConfig.apiBaseUrl}/auth/signup`,
      data: userData,
    })
    .then(response => response.data)
    .catch(error => console.log(error.response));
  }