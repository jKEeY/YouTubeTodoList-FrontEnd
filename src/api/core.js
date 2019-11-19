import axios from 'axios';

const apiUrl = `http://127.0.0.1:8000/api`;

console.log(process.env.API_URL)

const getApi = () => {
    return axios.create({
        baseURL: apiUrl,
    })
}

function sendToAxios(method, url, data) {
    const api = getApi();
    switch (method) {
      case "post":
        return api.post(url, data);
      case "patch":
        return api.patch(url, data);
      case "get":
        return api.get(url, data);
      case "delete":
        return api.delete(url, data);
      default: {
        return null;
      }
    }
  }
  
function send(method, url, data) {
    return sendToAxios(method, url, data)
      .then(response => {
        return Promise.resolve(response);
      })
      .catch(error => {
        if (!error.status)
          return Promise.resolve({ data: { error: { code: 0 } } });
  
        return Promise.reject(error);
      });
  }

export const get = url => send("get", url, {});

export const post = (url, data) => send("post", url, data);

export const sendDelete = (url, data) => send("delete", url, data);

export const patch = (url, data) => send("patch", url, data);
  