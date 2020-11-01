import Hydration from './Hydration';

export default class HydrationRepository {
  constructor(hydrationData) {
    this.rawHydrationData = hydrationData
    this.hydrationHistory = [];
    this.ouncesAverage = 0;
    this.ouncesRecord = [];
  }

  start() {
    this.rawHydrationData.forEach(rawHydration => {
      this.createNewHydration(rawHydration);
    });
  }

  createNewHydration(rawHydration) {
    let hydration = new Hydration(rawHydration);
    this.hydrationHistory.push(hydration);
    this.updateStats();
  }

  updateStats() {
    this.createOuncesRecord();
    this.averageDailyOunces();
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
    let todayHydration = this.ouncesRecord.find(hydration => {
      let dateKey = Object.keys(hydration)
      return dateKey[0] === todayDate
    })
    return todayHydration[todayDate];
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
}
