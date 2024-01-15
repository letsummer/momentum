const clockTitle = document.querySelector("#countdown");

function getClock() {
  const date = new Date();
  const playBall = new Date("2024-03-23 0:00:00");
  const dday = Math.round((playBall - date) / (1000 * 60 * 60 * 24));
  const days = String(dday).padStart(2, "0");

  if(days>0)
    clockTitle.innerText = `-${days}`;
  else
    clockTitle.innerText = `+${days}`;
//   console.log(days);
}

setInterval(getClock, 1000);
