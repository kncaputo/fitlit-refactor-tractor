// import sleepData from './data/sleep';
// import userData from '../data/user';
import User from './User';

export default class UserRepository {
  constructor(userData, sleepData, activityData, hydrationData) {
    this.users = [];
    this.rawUserData = userData;
    this.rawSleepData = sleepData;
    this.rawActivityData = activityData;
    this.rawHydrationData = hydrationData;
  }

  createUsers() {
    this.rawUserData.forEach(rawUser => {
      let userSleepData = this.filterUserSleepData(rawUser.id);
      let userActivityData = this.filterUserActivityData(rawUser.id);
      let userHydrationData = this.filterUserHydrationData(rawUser.id);
      let user = new User(rawUser, userSleepData, userActivityData, userHydrationData);
      this.users.push(user);
    });
  }

  filterUserSleepData(id) {
    return this.rawSleepData.filter(sleep => {
      return sleep.userID === id;
    })
  }

  filterUserActivityData(id) {
    return this.rawActivityData.filter(activity => {
      return activity.userID === id;
    })
  }

  filterUserHydrationData(id) {
    return this.rawHydrationData.filter(hydration => {
      return hydration.userID === id;
    })
  }

  getUser(id) {
    return this.users.find(function(user) {
      return user.id === id;
    })
  }

  calculateAverageStepGoal() {
    let goals = this.users.map(function(user) {
      return user.dailyStepGoal;
    });
    let total = goals.reduce(function(sum, goal) {
      sum += goal;
      return sum;
    }, 0);
    return total / this.users.length;
  }

  calculateAverageSleepQuality() {
    let totalSleepQuality = this.users.reduce((sum, user) => {
      sum += user.sleepRepository.sleepQualityAverage;
      return sum;
    }, 0);
    return totalSleepQuality / this.users.length;
  }

  calculateAverageSteps(date) {
    let allUsersStepsCount = this.users.map(user => {
      return user.activityRepository.activityHistory.filter(activity => {
        return activity.date === date;
      });
    })
    let sumOfSteps = allUsersStepsCount.reduce((stepsSum, activityCollection) => {
      activityCollection.forEach(activity => {
        stepsSum += activity.steps
      })
      return stepsSum;
    }, 0);
    return Math.round(sumOfSteps / allUsersStepsCount.length);
  }

  calculateAverageStairs(date) {
    let allUsersStairsCount = this.users.map(user => {
      return user.activityRepository.activityHistory.filter(activity => {
        return activity.date === date;
      });
    })
    let sumOfStairs = allUsersStairsCount.reduce((stairsSum, activityCollection) => {
      activityCollection.forEach(activity => {
        stairsSum += activity.flightsOfStairs
      })
      return stairsSum;
    }, 0);
    return Math.round(sumOfStairs / allUsersStairsCount.length);
  }

  calculateAverageMinutesActive(date) {
    let allUsersMinutesActiveCount = this.users.map(user => {
      return user.activityRepository.activityHistory.filter(activity => {
        return activity.date === date;
      });
    })
    let sumOfMinutesActive = allUsersMinutesActiveCount.reduce((minutesActiveSum, activityCollection) => {
      activityCollection.forEach(activity => {
        minutesActiveSum += activity.minutesActive
      })
      return minutesActiveSum;
    }, 0);
    return Math.round(sumOfMinutesActive / allUsersMinutesActiveCount.length);
  }

  // calculateAverageDailyWater(date) {
  //   let todaysDrinkers = this.users.filter(user => {
  //     return user.hydrationRepository.addDailyOunces(date) > 0;
  //   });
  //   let sumDrankOnDate = todaysDrinkers.reduce((sum, drinker) => {
  //     return sum += drinker.addDailyOunces(date);
  //   }, 0)
  //   return Math.floor(sumDrankOnDate / todaysDrinkers.length);
  // }

  findBestSleepers(date) {
    return this.users.filter(user => {
      return user.calculateAverageQualityThisWeek(date) > 3;
    })
  }

  getLongestSleepers(date) {
    return sleepData.filter(sleep => {
      return sleep.date === date;
    }).sort((a, b) => {
      return b.hoursSlept - a.hoursSlept;
    })[0].userID;
  }

  getWorstSleepers(date) {
    return sleepData.filter(sleep => {
      return sleep.date === date;
    }).sort((a, b) => {
      return a.hoursSlept - b.hoursSlept;
    })[0].userID;
  }

  // findFriendsTotalStepsForWeek(users, date) {
  //   this.friends.map(friend => {
  //     let matchedFriend = users.find(user => user.id === friend);
  //     matchedFriend.calculateTotalStepsThisWeek(date);
  //     this.friendsActivityRecords.push(
  //       {
  //         'id': matchedFriend.id,
  //         'firstName': matchedFriend.name.toUpperCase().split(' ')[0],
  //         'totalWeeklySteps': matchedFriend.totalStepsThisWeek
  //       })
  //   })
  //   this.calculateTotalStepsThisWeek(date);
  //   this.friendsActivityRecords.push({
  //     'id': this.id,
  //     'firstName': 'YOU',
  //     'totalWeeklySteps': this.totalStepsThisWeek
  //   });
  //   this.friendsActivityRecords = this.friendsActivityRecords.sort((a, b) => b.totalWeeklySteps - a.totalWeeklySteps);
  // }
}
