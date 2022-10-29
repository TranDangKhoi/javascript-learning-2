function wait(timer) {
  return new Promise(function (fullfilled, reject) {
    setTimeout(fullfilled, 2000);
  });
}

async function run() {
  console.log("Start");
  await wait(2000);
  console.log("End");
}

run();
