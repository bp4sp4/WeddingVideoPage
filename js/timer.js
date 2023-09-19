function startTimer(duration, display) {
  var timer = duration,
    hours,
    minutes,
    seconds;
  var interval = setInterval(function () {
    hours = parseInt(timer / 3600, 10);
    minutes = parseInt((timer % 3600) / 60, 10);
    seconds = parseInt(timer % 60, 10);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = hours + ":" + minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
    }
    if (timer === 0) {
      clearInterval(interval);
      display.textContent = "세션 만료!";
    }
  }, 1000);
}

window.onload = function () {
  var duration1 = 3600; // 1시간을 초로 변환
  var duration2 = 7200; // 2시간을 초로 변환
  var duration3 = 10800; // 3시간을 초로 변환

  var display1 = document.querySelector("#timer");
  var display2 = document.querySelector("#timer2");
  var display3 = document.querySelector("#timer3");

  startTimer(duration1, display1);
  startTimer(duration2, display2);
  startTimer(duration3, display3);
};
