import Sleep from './Sleep';

export default class SleepRepository {
  constructor(sleepData) {
    this.rawSleepData = sleepData;
    this.sleepHistory = [];
    this.hoursSleptAverage = 0;
    this.sleepQualityAverage = 0;
    this.sleepHoursRecord = [];
    this.sleepQualityRecord = [];
  }

  createSleep() {
    this.rawSleepData.forEach(rawSleep => {
      let sleep = new Sleep(rawSleep);
      this.sleepHistory.push(sleep)
    });
  }

  updateHoursSleptAverage() {
    let totalSleepHours = this.sleepHistory.reduce((totalHours, sleep) => {
      totalHours += sleep.hoursSlept;
      return totalHours;
    }, 0)
    this.hoursSleptAverage = (totalSleepHours / this.sleepHistory.length).toFixed(1);
  }

  updateSleepQualityAverage() {
    let totalSleepQuality = this.sleepHistory.reduce((totalQuality, sleep) => {
      totalQuality += sleep.sleepQuality;
      return totalQuality;
    }, 0)
    this.sleepQualityAverage = (totalSleepQuality / this.sleepHistory.length).toFixed(1);
  }
}
