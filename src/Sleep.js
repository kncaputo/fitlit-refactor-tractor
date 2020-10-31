export default class Sleep {
  constructor(userSleepData) {
    this.userID = userSleepData.userID;
    this.date = userSleepData.date;
    this.hoursSlept = userSleepData.hoursSlept;
    this.sleepQuality = userSleepData.sleepQuality;
  }

  createJSONObj() {
    return {
      userID: this.userID,
      date: this.date,
      hoursSlept: this.hoursSlept,
      sleepQuality: this.sleepQuality
    }
  }
}
