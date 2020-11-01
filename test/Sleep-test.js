import { expect } from 'chai';

import Sleep from '../src/model/Sleep';

describe.only('Sleep', () => {
  let sleep1;
  let sleep2;
  let sleep3;

  beforeEach(() => {
    sleep1 = new Sleep({
      "userID": 1,
      "date": "2019/06/15",
      "hoursSlept": 6.1,
      "sleepQuality": 2.2
    });

    sleep2 = new Sleep({
      "userID": 2,
      "date": "2019/06/25",
      "hoursSlept": 7.3,
      "sleepQuality": 3.2
    });

    sleep3 = new Sleep({
      "userID": 1,
      "date": "2019/07/17",
      "hoursSlept": 9.3,
      "sleepQuality": 1.4
    });
  });

  describe('Constructor', () => {
    it('should be a function', () => {
      expect(Sleep).to.be.a('function');
    });

    it('should be an instance of sleep', () => {
      expect(sleep1).to.be.an.instanceof(Sleep);
    });

    it('should hold a userId', () => {
      expect(sleep2.userID).to.equal(2);
    });

    it('should hold a date', () => {
      expect(sleep3.date).to.equal("2019/07/17");
    });

    it('should hold hours slept', () => {
      expect(sleep1.hoursSlept).to.equal(6.1);
    });

    it('should hold sleep quality', () => {
      expect(sleep3.sleepQuality).to.equal(1.4);
    });
  });
});
