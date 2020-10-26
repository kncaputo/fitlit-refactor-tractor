import SleepRepository from './SleepRepository';
import ActivityRepository from './ActivityRepository';
import HydrationRepository from './HydrationRepository';

 export default class User {
  constructor(userData, sleepData, activityData) {
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
    this.friendsActivityRecords = []
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

  findFriendsTotalStepsForWeek(users, date) {
    this.friends.map(friend => {
      let matchedFriend = users.find(user => user.id === friend);
      matchedFriend.calculateTotalStepsThisWeek(date);
      this.friendsActivityRecords.push(
        {
          'id': matchedFriend.id,
          'firstName': matchedFriend.name.toUpperCase().split(' ')[0],
          'totalWeeklySteps': matchedFriend.totalStepsThisWeek
        })
    })
    this.calculateTotalStepsThisWeek(date);
    this.friendsActivityRecords.push({
      'id': this.id,
      'firstName': 'YOU',
      'totalWeeklySteps': this.totalStepsThisWeek
    });
    this.friendsActivityRecords = this.friendsActivityRecords.sort((a, b) => b.totalWeeklySteps - a.totalWeeklySteps);
  }
}

// export default User;
