// function wait(timer) {
//   return new Promise(function (fullfilled, reject) {
//     setTimeout(fullfilled, 2000);
//   });
// }

// async function run() {
//   console.log("Start");
//   await wait(2000);
//   console.log("End");
// }

// run();

function makeTimer(timer = 1000, str) {
  return new Promise(function (fullfilled, rejected) {
    setTimeout(() => {
      if (str) {
        fullfilled(str);
      } else {
        rejected("Error");
      }
    }, timer);
  });
}

async function allTimer() {
  try {
    const timer1 = await makeTimer(2000, "First time");
    console.log(timer1);
  } catch (error) {
    console.log(error);
    return error;
  }
}

allTimer();
