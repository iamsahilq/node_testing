import { expect } from 'chai';
import Sinon from 'sinon';

import MyClass from './myClass';
const myObj = new MyClass();

describe('Testing MyClass', () => {
  it('test add function', () => {
    expect(myObj.add(1, 2)).to.be.equal(3);
  });
  it('add method spy', () => {
    const addSpy = Sinon.spy(myObj, 'add');
    const arg1 = 10,
      arg2 = 20;
    myObj.callAdd(arg1, arg2);
    // Sinon.assert.calledOnce(addSpy);
    expect(addSpy.calledOnce).to.be.true;
    expect(addSpy.calledWith(arg1, arg2)).to.be.true;
  });
  it('add method spy', () => {
    const callbackSpy = Sinon.spy();
    myObj.callTheCallback(callbackSpy);
    expect(callbackSpy.calledOnce).to.be.true;
  });
});
