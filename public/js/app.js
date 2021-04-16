let countDate = new Date('Apr 29, 2021 11:00:00').getTime();
let now = new Date().getTime();
let gap = countDate - now;
let text = 'Lo sentimos 🙁, este taller pasó… Nos vemos pronto';

function workshopStarts() {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  let d = Math.floor(gap / day);
  let h = Math.floor((gap % day) / hour);
  let m = Math.floor((gap % hour) / minute);
  let s = Math.floor((gap % minute) / second);

  document.getElementById('day').innerText = d;
  document.getElementById('hour').innerText = h;
  document.getElementById('minute').innerText = m;
  document.getElementById('second').innerText = s;
}

if (gap > 0) {
  setInterval(function () {
    workshopStarts();
  }, 1000);
} else {
  // document.getElementById('mensaje').innerText = text;
}
