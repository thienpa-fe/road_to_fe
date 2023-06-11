const student = {
  name: 'Peter',
  gotoWork: function () {
    console.log('this in gotoWork', this);

    function doSomething() {
      console.log('this in doSomething');
      console.log(this);
    }

    const doSomething2 = () => {
      console.log('this in doSomething');
      console.log(this);
    };

    doSomething();
    doSomething2();
  },
};
student.gotoWork();
