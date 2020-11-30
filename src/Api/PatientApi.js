import axios from 'axios';
import * as ClientConfig from '../appsettings.json';

export function fetchAvaiableDoctorsApi() {
    return axios({
      method: "get",
      url: `${ClientConfig.apiBaseUrl}/patient/getDoctors`
    }).then(response => response.data);
  }