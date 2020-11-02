const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);
import Service from '../src/service/Service';

describe('Service', () => {
  describe('Fetch', () => {
    it('should fetch user data from APIs', () => {
      let service = new Service();
      chai.spy.on(service, ['fetchData', 'postData'], () => {})
      service.fetchData();
      expect(service.fetchData).to.have.been.called(1);
    });
  });

  describe('Post', () => {
    it('should post user data from input', () => {
      let service = new Service();
      chai.spy.on(service, ['fetchData', 'postData'], () => {})
      const functionEx = () => {};
      service.postData({}, functionEx);

      expect(service.postData).to.have.been.called(1);
      expect(service.postData).to.have.been.called.with({}, functionEx);
    });
  });
})
