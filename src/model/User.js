import SleepRepository from './model/SleepRepository';
import ActivityRepository from './model/ActivityRepository';
import HydrationRepository from './model/HydrationRepository';

 export default class User {
  constructor(userData, sleepData, activityData, hydrationData) {
    this.id = userData.id;
    this.name = userData.name;
    this.address = userData.address;
    this.email = userData.email;
    this.strideLength = userData.strideLength;
    this.dailyStepGoal = userData.dailyStepGoal;
    this.friends = userData.friends;
    this.sleepRepository = new SleepRepository(sleepData);
    this.activityRepository = new ActivityRepository(activityData, userData.strideLength, userData.dailyStepGoal)
    this.hydrationRepository = new HydrationRepository(hydrationData)
    this.friendsNames = [];
  }

  getFirstName() {
    var names = this.name.split(' ');
    return names[0].toUpperCase();
  }

  // updateHydration(date, amount) {
  //   this.ouncesRecord.unshift({[date]: amount});
  //   if (this.ouncesRecord.length) {
  //     this.ouncesAverage = Math.round((amount + (this.ouncesAverage * (this.ouncesRecord.length - 1))) / this.ouncesRecord.length);
  //   } else {
  //     this.ouncesAverage = amount;
  //   }
  // }
  //
  // addDailyOunces(date) {
  //   return this.ouncesRecord.reduce((sum, record) => {
  //     let amount = record[date];
  //     if (amount) {
  //       sum += amount
  //     }
  //     return sum
  //   }, 0)
  // }

  findFriendsNames(users) {
    this.friends.forEach(friend => {
      this.friendsNames.push(users.find(user => user.id === friend).getFirstName());
    })
  }
}

// export default User;
