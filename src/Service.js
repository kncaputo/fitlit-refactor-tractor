export default class Service {
  constructor(url, dataKey) {
    this.url = url;
    this.dataKey = dataKey;
  }

  fetchData(url, data) {
      return fetch(url)
        .then(response => response.json())
        .then(data => data[data])
        .catch(err => console.log(err))
    },
  }

  postData(url, data) {

  }
}
