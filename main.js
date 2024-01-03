const hour = document.querySelector("#hour");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");

const timeInterval = () => {
  const newDate = new Date().toString();
  let time = newDate.split(" ")[4];
  let mytime = time.split(":");
  hour.innerHTML = mytime[0] + "<span>Hour</span>";
  min.innerHTML = mytime[1] + "<span>Min</span>";
  sec.innerHTML = mytime[2] + "<span>Sec</span>";
};

setInterval(timeInterval, 1000);
