let apiCalls = {
  fetchUserData() {
    return fetch('https://fe-apps.herokuapp.com/api/v1/fitlit/1908/users/userData')
      .then(response => response.json())
      .then(data => data.userData)
      .catch(err => console.log(err))
  },

  fetchSleepData() {
    return fetch('https://fe-apps.herokuapp.com/api/v1/fitlit/1908/sleep/sleepData')
      .then(response => response.json())
      .then(data => data.sleepData)
      .catch(err => console.log(err))
  },

  fetchActivityData() {
    return fetch('https://fe-apps.herokuapp.com/api/v1/fitlit/1908/activity/activityData')
      .then(response => response.json())
      .then(data => data.activityData)
      .catch(err => console.log(err))
  },

  fetchHydrationData() {
    return fetch('https://fe-apps.herokuapp.com/api/v1/fitlit/1908/hydration/hydrationData')
      .then(response => response.json())
      .then(data => data.hydrationData)
      .catch(err => console.log(err))
  },

  postHydrationData(object, onSuccess) {
    return fetch('https://fe-apps.herokuapp.com/api/v1/fitlit/1908/hydration/hydrationData', {
      method: 'POST',
      headers: {
  	    'Content-Type': 'application/json'
      },
      body: JSON.stringify(object)
    })
    .then(response => response.json())
    .then(json => {
      console.log(json)
      onSuccess()
    })
    .catch(err => console.log(err))
  }
}

export default apiCalls;
