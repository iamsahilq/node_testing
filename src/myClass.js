class MyClass {
  constructor() {
    console.log('MyClass Init');
  }
  add(val1, val2) {
    return val1 + val2;
  }

  callAdd(val1, val2) {
    return this.add(val1, val2);
  }

  callTheCallback(callback) {
    callback();
  }
}

export default MyClass;
