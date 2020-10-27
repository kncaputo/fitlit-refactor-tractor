import Hydration from './Hydration';

export default class HydrationRepository {
  constructor(hydrationData) {
    this.rawHydrationData = hydrationData
    this.hydrationHistory = [];
    this.ouncesAverage = 0;
    this.ouncesRecord = [];
    // this.start()
  }

  start() {
    this.createHydration();
    this.createOuncesRecord();
    this.averageDailyOunces();
  }

  createHydration() {
    this.rawHydrationData.forEach(rawHydration => {
      let hydration = new Hydration(rawHydration);
      this.hydrationHistory.push(hydration);
    });
  }

  createOuncesRecord() {
    this.ouncesRecord = this.hydrationHistory.map(hydration => {
      return hydration = {[hydration.date]: hydration.ounces};
    })
  }

  averageDailyOunces() {
    let totalDailyOunces = this.hydrationHistory.reduce((totalOunces, hydration) => {
      totalOunces += hydration.ounces;
      return totalOunces;
    }, 0)
    this.ouncesAverage = (totalDailyOunces / this.hydrationHistory.length).toFixed(1);
  }

  findOunces(todayDate) {
    let todayHydration = this.hydrationHistory.find(hydration => {
      return hydration.date === todayDate;
    })

    return todayHydration.ounces;
  }

  findWeeklyOunces(todayDate) {
    return this.hydrationHistory.reduce((acc, hydration) => {
      let index = this.hydrationHistory.indexOf(this.hydrationHistory.find(hydration => hydration.date === todayDate));
      if (index >= this.hydrationHistory.indexOf(hydration) && this.hydrationHistory.indexOf(hydration) <= (index + 6)) {
        hydration = {[hydration.date]: hydration.ounces}
        acc.unshift(hydration);
      }
      return acc
    }, [])
  }

  findDailyOunces(date) {
    return this.ouncesRecord.reduce((sum, record) => {
      let amount = record[date];
      if (amount) {
        sum += amount
      }
      return sum
    }, 0)
  }
}

// updateHydration(date, amount) {
//   this.ouncesRecord.unshift({[date]: amount});
//   if (this.ouncesRecord.length) {
//     this.ouncesAverage = Math.round((amount + (this.ouncesAverage * (this.ouncesRecord.length - 1))) / this.ouncesRecord.length);
//   } else {
//     this.ouncesAverage = amount;
//   }
// }
