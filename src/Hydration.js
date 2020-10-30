export default class Hydration {
  constructor(data, userRepository) {
    this.userId = data.userID;
    this.date = data.date;
    this.ounces = data.numOunces;
  }
  // drink(userRepo) {
  //   var hydrate = this;
  //   userRepo.users.find(function(user) {
  //     return user.id === hydrate.userId;
  //   }).updateHydration(this.date, this.ounces);
  // }
}

// export default Hydration;
