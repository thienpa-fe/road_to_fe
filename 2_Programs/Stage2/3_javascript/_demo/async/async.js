const myPromise = new Promise((resolve) => {
  resolve();
});

myPromise
  .then(() => {
    console.log('Start');
  })
  .then(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Do something in 3s');
      }, 3000);
    });
  })
  .then((res) => console.log(res))
  .then(() => {
    console.log('Do other thing');
  })
  .then(() => {
    console.log('Finish');
  });
