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
      this.sleepHistory.push(sleep);
    });
  }

  createSleepHoursRecord() {
    this.sleepHoursRecord = this.sleepHistory.map(sleep => {
      return sleep = {date: sleep.date, hours: sleep.hoursSlept};
    })
  }

  createSleepQualityRecord() {
    this.sleepQualityRecord = this.sleepHistory.map(sleep => {
      return sleep = {date: sleep.date, sleepQuality: sleep.sleepQuality};
    })
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

  averageWeeklySleepHours(todayDate) {
    return (this.sleepHoursRecord.reduce((sum, sleepAct) => {
      let index = this.sleepHoursRecord.indexOf(this.sleepHoursRecord.find(sleep => sleep.date === todayDate));
      if (index >= this.sleepHoursRecord.indexOf(sleepAct) && this.sleepHoursRecord.indexOf(sleepAct) <= (index + 6)) {
        sum += sleepAct.hours;
      }
      return sum;
    }, 0) / 7).toFixed(1);
  }

  averageWeeklySleepQuality(todayDate) {
    return (this.sleepQualityRecord.reduce((sum, sleepAct) => {
      let index = this.sleepQualityRecord.indexOf(this.sleepQualityRecord.find(sleep => sleep.date === todayDate));
      if (index >= this.sleepQualityRecord.indexOf(sleepAct) && this.sleepQualityRecord.indexOf(sleepAct) <= (index + 6)) {
        sum += sleepAct.sleepQuality;
      }
      return sum;
    }, 0) / 7).toFixed(1);
  }

  // updateSleep(date, hours, quality) {
  //   this.sleepHoursRecord.unshift({
  //     'date': date,
  //     'hours': hours
  //   });
  //   this.sleepQualityRecord.unshift({
  //     'date': date,
  //     'quality': quality
  //   });
  //   if(this.sleepHoursRecord.length) {
  //     this.hoursSleptAverage = ((hours + (this.hoursSleptAverage * (this.sleepHoursRecord.length - 1))) / this.sleepHoursRecord.length).toFixed(1);
  //   } else {
  //     this.hoursSleptAverage = hours;
  //   }
  //   if (this.sleepQualityRecord.length) {
  //     this.sleepQualityAverage = ((quality + (this.sleepQualityAverage * (this.sleepQualityRecord.length - 1))) / this.sleepQualityRecord.length).toFixed(1);
  //   } else {
  //     this.sleepQualityAverage = quality;
  //   }
  // }
}
