import Activity from './Activity';

export default class ActivityRepository {
  constructor(activityData, userStrideLength, userStepGoal) {
    this.rawActivityData = activityData
    this.activityHistory = [];
    this.userStepGoal = userStepGoal;
    this.userStrideLength = userStrideLength;
    this.totalStepsThisWeek = 0;
    this.accomplishedDays = [];
    this.trendingStepDays = [];
    this.trendingStairsDays = [];
  }

  start() {
    this.rawActivityData.forEach(rawActivity => {
      this.createNewActivity(rawActivity);
    });
  }

  createNewActivity(rawActivity) {
    let activity = new Activity(rawActivity);
    this.activityHistory.push(activity);
    this.updateStats();
  }

  updateStats() {
    this.findAccomplishedStepDays();
    this.findStairClimbingRecord();
    this.findTrendingStairsDays();
    this.findTrendingStepDays();
  }

  findSteps(date) {
    let stepDate = this.activityHistory.find(activity => {
      return activity.date === date;
    });
    if (stepDate !== undefined) {
      return stepDate.steps;
    } else {
      return 'N/A';
    }
  }

  findStairs(date) {
    let stairsDate = this.activityHistory.find(activity => {
      return activity.date === date;
    })

    if (stairsDate !== undefined) {
      return stairsDate.flightsOfStairs;
    } else {
      return 'N/A'
    }
  }

  findFlightsOfStairs(date) {
    let flightsDate = this.activityHistory.find(activity => {
      return activity.date === date;
    })

    if (flightsDate !== undefined) {
      return ((flightsDate.flightsOfStairs) / 12).toFixed(1);
    } else {
      return 'N/A'
    }
  }

  calculateMilesWalked(todayDate) {
    let todayActivity = this.activityHistory.find(activity => {
      return activity.date === todayDate
    })
    if (todayActivity !== undefined) {
      return ((todayActivity.steps * this.userStrideLength) / 5280).toFixed(1)
    } else {
      return 'N/A';
    }

  }

  calculateActiveMinutes(todayDate) {
    let todayActivity = this.activityHistory.find(activity => {
      return activity.date === todayDate;
    })

    if (todayActivity !== undefined) {
      return todayActivity.minutesActive;
    } else {
      return 'N/A';
    }
  }

  averageWeeklyMinutesActive(todayDate) {
    return (this.activityHistory.reduce((sum, activity) => {
      let index = this.activityHistory.indexOf(this.activityHistory.find(activity => activity.date === todayDate));
      if (index <= this.activityHistory.indexOf(activity) && this.activityHistory.indexOf(activity) <= (index + 6)) {
        sum += activity.minutesActive;
      }
      return sum;
    }, 0) / 7).toFixed(1);
  }

  reachStepGoal(todayDate) {
    let todayActivity = this.activityHistory.find(activity => {
      return activity.date === todayDate;
    })

    return (todayActivity.steps >= this.userStepGoal) ? true : false;
  }

  findAccomplishedStepDays() {
    let goodStepDays = this.activityHistory.filter(activity => {
      return activity.steps >= this.userStepGoal;
    })
    this.accomplishedDays = goodStepDays.map(activity => {
      return activity = {
        date: activity.date
      }
    })
  }

  findStairClimbingRecord() {
    let record = 0;
    this.activityHistory.forEach(activity => {
      if (activity.flightsOfStairs > record) {
        record = activity.flightsOfStairs;
      }
    })
    return record;
  }

  findTrendingStairsDays() {
   let positiveDays = [];
   this.activityHistory.forEach(activity => {
     if (positiveDays.length === 0) {
       positiveDays.push(activity)
     } else if (positiveDays[0].flightsOfStairs < activity.flightsOfStairs) {
       positiveDays.unshift(activity);
     } else if (positiveDays[0].flightsOfStairs > activity.flightsOfStairs) {
       positiveDays = [activity]
     }
     if (positiveDays.length > 2) {
       this.trendingStairsDays = positiveDays;
     }
   })
   if (this.trendingStairsDays.length > 2) {
     return `Your most recent positive climbing streak was ${this.trendingStairsDays[this.trendingStairsDays.length - 1].date} - ${this.trendingStairsDays[0].date}!`
   } else {
     return 'N/A';
   }
 }

  findTrendingStepDays() {
    let positiveDays = [];
    this.activityHistory.forEach(activity => {
      if (positiveDays.length === 0) {
        positiveDays.push(activity)
      } else if (positiveDays[0].steps < activity.steps) {
        positiveDays.unshift(activity);
      } else if (positiveDays[0].steps > activity.steps) {
        positiveDays = [activity]
      }
      if (positiveDays.length > 2) {
        this.trendingStepDays = positiveDays;
      }
    })
    if (this.trendingStepDays.length > 2) {
      return `Your most recent positive step streak was ${this.trendingStepDays[this.trendingStepDays.length - 1].date} - ${this.trendingStepDays[0].date}!`
    } else {
      return 'N/A'
    }
  }

  calculateAverageStepsThisWeek(todayDate) {
    return (this.activityHistory.reduce((sum, activity) => {
      let index = this.activityHistory.indexOf(this.activityHistory.find(activity => activity.date === todayDate));
      if (index >= this.activityHistory.indexOf(activity) && this.activityHistory.indexOf(activity) <= (index + 6)) {
        sum += activity.steps;
      }
      return sum;
    }, 0) / 7).toFixed(0);
  }

  calculateAverageStairsThisWeek(todayDate) {
    return (this.activityHistory.reduce((sum, activity) => {
      let index = this.activityHistory.indexOf(this.activityHistory.find(activity => activity.date === todayDate));
      if (index >= this.activityHistory.indexOf(activity) && this.activityHistory.indexOf(activity) <= (index + 6)) {
        sum += activity.flightsOfStairs;
      }
      return sum;
    }, 0) / 7).toFixed(0);
  }

  calculateDailyCalories(date) {
    let totalMinutes = this.activityHistory.filter(activity => {
      return activity.date === date
    }).reduce((sumMinutes, activity) => {
      return sumMinutes += activity.minutesActive
    }, 0);
    return Math.round(totalMinutes * 7.6);
  }

  calculateTotalStepsThisWeek(todayDate) {
    this.totalStepsThisWeek = (this.activityHistory.reduce((sum, activity) => {
      let index = this.activityHistory.indexOf(this.activityHistory.find(activity => activity.date === todayDate));
      if (index >= this.activityHistory.indexOf(activity) && this.activityHistory.indexOf(activity) <= (index + 6)) {
        sum += activity.steps;
      }
      return sum;
    }, 0));
  }
}
