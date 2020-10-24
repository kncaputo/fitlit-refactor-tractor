import Sleep from './Sleep';

export default class SleepRepository {
  constructor(sleepData) {
    this.rawSleepData = sleepData;
    this.sleepHistory = [];

  }

  createSleep() {
    this.rawSleepData.forEach(rawSleep => {
      let sleep = new Sleep(rawSleep);
      this.sleepHistory.push(sleep)
    });
  }
}





// export default SleepRepository {
//   constructor() {
//     this.sleepHistory = []; // includes all instantiations of Sleep
//     this.sleepQualityAverage = 0;
//     this.sleepHoursRecord = [];
//     this.sleepQualityRecord = [];
//   }
// }
