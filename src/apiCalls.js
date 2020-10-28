let apiCalls = {
  fetchUserData() {
    fetch('https://fe-apps.herokuapp.com/api/v1/fitlit/1908/users/userData')
      .then(response => response.json())
      .catch(err => console.log(err))
  },

  fetchSleepData() {
    fetch('https://fe-apps.herokuapp.com/api/v1/fitlit/1908/sleep/sleepData')
      .then(response => response.json())
      .catch(err => console.log(err))
  },

  fetchActivityData() {
    fetch('https://fe-apps.herokuapp.com/api/v1/fitlit/1908/activity/activityData')
      .then(response => response.json())
      .catch(err => console.log(err))
  },

  fetchHydrationData() {
    fetch('https://fe-apps.herokuapp.com/api/v1/fitlit/1908/hydration/hydrationData')
      .then(response => response.json())
      .catch(err => console.log(err))
  }
}
