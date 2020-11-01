import SleepRepository from './SleepRepository';
import ActivityRepository from './ActivityRepository';
import HydrationRepository from './HydrationRepository';

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

  findFriendsNames(users) {
    this.friends.forEach(friend => {
      this.friendsNames.push(users.find(user => user.id === friend).getFirstName());
    })
  }
}
