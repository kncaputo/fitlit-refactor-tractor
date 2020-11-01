import { expect } from 'chai'
import Activity from '../src/model/Activity';

describe.only('Activity', () => {
  let activity1;
  let activity2;
  
  beforeEach(() => {
    activity1 = new Activity({
      "userID": 1,
      "date": "2019/06/15",
      "numSteps": 3684,
      "minutesActive": 140,
      "flightsOfStairs": 16
    });
    activity2 = new Activity({
      "userID": 2,
      "date": "2019/06/20",
      "numSteps": 2856,
      "minutesActive": 280,
      "flightsOfStairs": 22
    });
  });

  describe('Constructor', () => {
    it('should be a function', () => {
      expect(Activity).to.be.a('function');
    });

    it('should be an instance of activity', () => {
      expect(activity1).to.be.an.instanceof(Activity);
    });

    it('should hold a userId', () => {
      expect(activity2.userId).to.equal(2);
    });

    it('should hold a date', () => {
      expect(activity1.date).to.equal("2019/06/15");
    });

    it('should hold number of steps', () => {
      expect(activity1.steps).to.equal(3684);
    });

    it('should hold minutes active', () => {
      expect(activity2.minutesActive).to.equal(280);
    });

    it('should hold flights of stairs', () => {
      expect(activity2.flightsOfStairs).to.equal(22);
    });

    it('should have a default value of 0 for miles walked', () => {
      expect(activity2.milesWalked).to.equal(0);
    });
  });
});
