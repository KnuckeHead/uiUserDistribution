import axios from 'axios';
import * as ClientConfig from '../appsettings.json';

export function fetchAllUsersApi() {
  return axios({
    method: "get",
    url: `${ClientConfig.apiBaseUrl}/`
  }).then(response => response.data);
}

export function fetchUserApi(id) {
    return axios({
      method: "get",
      url: `${ClientConfig.apiBaseUrl}/getUser/${id}`
    }).then(response => response.data);
  }

export function addUserApi(user) {
  return axios({
    method: "post",
    url: `${ClientConfig.apiBaseUrl}/addUser`,
    data: user
  }).then(response => response.data);
}

export function deleteUserApi(id) {
  return({
    method: 'delete',
    url: `${ClientConfig.apiBaseUrl}/deleteUser/${id}`
    }).then(response => response.data);
}