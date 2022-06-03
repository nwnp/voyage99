const result = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("first log");
    // resolve("second log");
    reject("error test");
  }, 1000);
})
  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.log(message);
  });
