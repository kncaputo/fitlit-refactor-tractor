export default class Hydration {
  constructor(data) {
    this.userId = data.userID;
    this.date = data.date;
    this.ounces = data.numOunces;
  }

  createJSONObj() {
    return {
      userId: this.userID,
      date: this.date,
      numOunces: this.ounces
    }
  }
}
