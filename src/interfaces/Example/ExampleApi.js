import RestClient from '../RestClient';

export class exampleApi {
  static getData(params) {
    const config = {
      url: '',
      params,
    };
    return RestClient.post(config).then((json) => {
      console.log(`Parsing content ${json}`);
      return json;
    });
  }
}
