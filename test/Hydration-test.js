import { expect } from 'chai';

import Hydration from '../src/model/Hydration';

describe.skip('Hydration', () => {
  let hydration;
  let user1;
  let user2;
  let userRepository;
  let hydrate1;
  let hydrate2;
  let hydrate3;

  beforeEach(() => {
    hydrate1 = new Hydration({
        "userID": 1,
        "date": "2019/06/15",
        "numOunces": 37
      });

    hydrate2 = new Hydration({
      "userID": 2,
      "date": "2019/06/15",
      "numOunces": 75
    });

    hydrate3 = new Hydration({
      "userID": 2,
      "date": "2019/06/16",
      "numOunces": 91
    })
  })
  it('should be a function', () => {
    expect(Hydration).to.be.a('function');
  });
  it('should be an instance of hydrate', () => {
    expect(hydrate1).to.be.an.instanceof(Hydration);
  });
  it('should have an id', () => {
    expect(hydrate2.userId).to.equal(2);
  });
  it('should have a date', () => {
    expect(hydrate3.date).to.equal('2019/06/16');
  });
  it('should have an amount of ounces drank', () => {
    expect(hydrate3.ounces).to.equal(91);
  });
  describe('drink', () => {
    it('should update the average number of ounces over all time', function() {
      expect(user2.ouncesAverage).to.equal(83);
    })
    it('should add the date and amount to the object record', function() {
      expect(user1.ouncesRecord).to.deep.equal([{"2019/06/15": 37}])
      expect(user2.ouncesRecord.length).to.equal(2)
    })
  });
});
