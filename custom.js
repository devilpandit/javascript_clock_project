let currentTime = new Date();
let clockTime = document.querySelector(".clock-time");

const options = {
  timeZone: "Asia/Kolkata",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
};

clockTime.textContent = currentTime.toLocaleTimeString("en-US", options);

setInterval(() => {
  currentTime = new Date(); // update the current time  in case of  an error
  clockTime.textContent = currentTime.toLocaleTimeString("en-US", options);
}, 1000);
