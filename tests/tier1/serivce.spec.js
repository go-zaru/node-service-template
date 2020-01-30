const Lab = require('@hapi/lab');
const { expect } = require('@hapi/code');
const { stub, spy, useFakeTimers } = require('sinon');
const { describe, it, after, afterEach, before, beforeEach } = exports.lab = Lab.script();

const {Service} = require('../../lib/service/Service');

describe('Service', () => {
  describe('when initialized', ()=>{
    it('should return instance of service', ()=>{
      const sut = new Service({...deps});
      expect(sut).be.instanceOf(Service);
    });
  });

  describe('when method is called', () => {
    let clock;
    const timestamp = new Date().now;

    function createDepenencyMocksWithSpies() {
      return { driver:{myspy:spy()}}
    };

    beforeEach(() => {
      clock = useFakeTimers({ now: timestamp });
    });

    it('should return emit log entry', () => {
      const mocks = createDepenencyMocksWithSpies();
      const sut = new Service(mocks);
      expect(sut).be.instanceOf(Service);

      expect(mocks.driver.myspy.args[0]).to.be.equal([...args])
    });

    after(()=>{
      clock.restore();
    });
  });
});
