const Lab = require('@hapi/lab');
const { expect } = require('@hapi/code');
const { spy } = require('sinon');
const { describe, it } = exports.lab = Lab.script();
const config = require('./config');
const { createService } = require('../../lib');


const createSutAndSpies = (_config) => {
  const sut = createService(_config);

  return {sut,spies:{ myspy:spy()}};
};

describe('Service', () => {
  it('should ...', () => {
    const {sut, spies} = createSutAndSpies(config);


    expect(spies.myspy.args[0][0]).to.be.equal();
  });
});
