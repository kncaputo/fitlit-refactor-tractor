export default class Service {
  constructor(url, dataKey) {
    this.url = url;
    this.dataKey = dataKey;
  }

  fetchData() {
    return fetch(this.url)
      .then(response => response.json())
      .then(data => data[this.dataKey])
      .catch(err => console.log(err))
  }

  postData(newPost, onSuccess) {
    return fetch(this.url, {
      method: 'POST',
      headers: {
  	    'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPost)
    })
    .then(response => response.json())
    .then(json => {
      console.log(json);
      onSuccess;
    })
    .catch(err => console.log(err))
  }
}
