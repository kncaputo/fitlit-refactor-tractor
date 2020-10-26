import Hydration from './Hydration';

export default class HydrationRepository {
  constructor(hydrationData) {
    this.rawHydrationData = hydrationData
    this.ouncesAverage = 0;
    this.ouncesRecord = [];
  }

  createHydration() {
    
  }

  // addDailyOunces(date) {
  //   return this.ouncesRecord.reduce((sum, record) => {
  //     let amount = record[date];
  //     if (amount) {
  //       sum += amount
  //     }
  //     return sum
  //   }, 0)
  // }
}

// updateHydration(date, amount) {
//   this.ouncesRecord.unshift({[date]: amount});
//   if (this.ouncesRecord.length) {
//     this.ouncesAverage = Math.round((amount + (this.ouncesAverage * (this.ouncesRecord.length - 1))) / this.ouncesRecord.length);
//   } else {
//     this.ouncesAverage = amount;
//   }
// }
