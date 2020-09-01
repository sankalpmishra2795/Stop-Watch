// variable

let min = 00;
let sec = 00;

// Get Element

let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset");
stop.style.display = "none";

// Print value
document.querySelector(".output").innerHTML = min + ":" + sec;

// AddEventListener to start

start.addEventListener("click", function () {
  // setInterval
  const timer = setInterval(() => {
    sec++;
    if (sec == 60) {
      min++;
      sec = 0;
    }
    document.querySelector(".output").innerHTML = min + ":" + sec;
    // hide start button & display stop button
    start.style.display = "none";
    stop.style.display = "inline-block";
  }, 1000);
  // AddEventListener to stop

  stop.addEventListener("click", function () {
    clearInterval(timer);
    // hide stop button & display start button
    start.style.display = "inline-block";
    stop.style.display = "none";
  });
  // AddEventListener to start

  reset.addEventListener("click", function () {
    clearInterval(timer);
    sec = 0;
    min = 0;
    document.querySelector(".output").innerHTML = min + ":" + sec;
    // hide stop button & display start button
    start.style.display = "inline-block";
    stop.style.display = "none";
  });
});
