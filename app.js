const deg = 6;
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");

setInterval(() => {
  let day = new Date();
  let hours = day.getHours() * 30;
  let minutes = day.getMinutes() * deg;
  let seconds = day.getSeconds() * deg;

  hr.style.transform = `rotateZ(${hours + minutes / 12}deg)`;
  mn.style.transform = `rotateZ(${minutes}deg)`;
  sc.style.transform = `rotateZ(${seconds}deg)`;
}, 1000);
