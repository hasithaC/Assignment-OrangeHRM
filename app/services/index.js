import axios from 'axios';
import {Method} from '../config/method';

export default async function Api(
  BaseUrl,
  EndPoint,
  method,
  token,
  body,
  isBasicAuth,
) {
  let response_data = {};
  const URL = BaseUrl + EndPoint;

  return new Promise(async (resolve, reject) => {
    if (isBasicAuth) {
      await axios
        .post(URL, body, {
          auth: {
            username: 'hasitha123',
            password: '12345678',
          },
        })
        .then(response => {
          response_data = response.data;
          resolve(response_data);
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
          reject(error);
        });
    } else {
      if (Method.POST === method) {
        await axios
          .post(URL, body, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then(response => {
            response_data = response.data;
            resolve(response_data);
            console.log(response.data);
          })
          .catch(error => {
            console.error(error);
            reject(error);
          });
      } else {
        await axios
          .get(URL, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then(response => {
            response_data = response.data;
            resolve(response_data);
            console.log(response.data);
          })
          .catch(error => {
            console.error(error);
            reject(error);
          });
      }
    }
  });
}
