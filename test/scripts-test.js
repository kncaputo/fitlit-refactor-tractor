const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);
import Service from '../src/service/Service';

describe.only('Service', () => {
  before(() => {
    global.service = {};
    chai.spy.on(Service, ['postData', 'fetchData'], () => {})
  })

  describe('Fetch', () => {
    it('should fetch user data from APIs', () => {
      let service = new Service(url, dataKey)
      expect(service.fetchData()).to.have.been.called(1);
      expect(service.fetchData).to.have.been.called.with();
    })
  })

  describe('Post', () => {
    it('should post user data from input', () => {
      expect(service.fetchData()).to.have.been.called(1);
      expect(service.fetchData).to.have.been.called.with();
    })
  })
})
