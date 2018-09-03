// Documentation read -  https://newsapi.org

class NewsApi {
  constructor(config) {
    let { client_id, url } = config;
    (this.client_id = client_id), (this.url = url);
  }
  handlerNewsApi() {
    return new Promise(resolve => {
      fetch(`${this.url}${this.client_id}`)
        .then(res => res.json())
        .then(user => resolve(user));
    });
  }
}
