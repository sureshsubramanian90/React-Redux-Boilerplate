const axios = require('axios');

export default class RestClient {
  static get(config) {
    const { url, params } = config;
    const headers = {};
    let response = {};
    return axios
      .get(url, {
        params,
        headers,
      })
      .then(function(response) {
        response = { ...response, isSuccess: true };
        return response;
      })
      .catch(function(error) {
        response = { ...error, isSuccess: false };
        return response;
      });
  }
  static post(config) {
    const { url, params } = config;
    const headers = {};
    let response = {};
    return axios
      .post(url, { ...params }, { headers })
      .then(function(response) {
        response = { ...response, isSuccess: true };
        return response;
      })
      .catch(function(error) {
        response = { ...error, isSuccess: false };
        return response;
      });
  }

  static put(config) {
    const { url, params } = config;
    const headers = {};
    let response = {};
    return axios
      .put(url, { ...params }, { headers })
      .then(function(response) {
        response = { ...response, isSuccess: true };
        return response;
      })
      .catch(function(error) {
        response = { ...error, isSuccess: false };
        return response;
      });
  }
  static delete(config) {
    const { url, params } = config;
    const headers = {};
    let response = {};
    return axios
      .delete(url, { ...params }, { headers })
      .then(function(response) {
        response = { ...response, isSuccess: true };
        return response;
      })
      .catch(function(error) {
        response = { ...error, isSuccess: false };
        return response;
      });
  }
}
