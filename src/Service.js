class Service {
  constructor(url, dataKey, onSuccessHandler) {
    this.url = url;
    this.dataKey = dataKey;
    this.onSuccessHandler = onSuccessHandler;
  }

  fetchData() {
      return fetch(this.url)
        .then(response => response.json())
        .then(data => data[this.dataKey])
        .catch(err => console.log(err))
    },
  }

  postData(newPost) {
    return fetch(this.url, {
      method: 'POST',
      headers: {
  	    'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPost)
    })
    .then(response => response.json())
    .then(json => {
      console.log(json)
      this.onSuccessHandler();
    })
    .catch(err => console.log(err))
    }
  }
}
