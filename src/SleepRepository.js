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
}
