export default class Sleep {
  constructor(userSleepData) {
    this.userID = userSleepData.userID;
    this.date = userSleepData.date;
    this.hoursSlept = userSleepData.hoursSlept;
    this.sleepQuality = userSleepData.sleepQuality;
  }

//   sleep(userRepo) {
//     var sleep = this;
//     userRepo.users.find(function(user) {
//       return user.id === sleep.userId;
//     }).updateSleep(this.date, this.hoursSlept, this.sleepQuality);
//   }
}
