function onDevtoolsOpen() {
  document.querySelector(".status").textContent = "opened";
  setTimeout(() => {
    console.log("%cDevtools is opened!", "color:red;font-size:24px;");
  }, 10);
}

class DevToolsChecker extends Error {
  toString() {}
  get message() {
    onDevtoolsOpen();
  }
}

console.log(new DevToolsChecker());
