// Get the countdown element
var countdown = document.querySelector('.countdown');

// Set the launch date 
// get the time distance from 01 Jan 1970 to launchDate
// in milliseconds!
var launchDate = new Date('April 01 2019').getTime();

// Update every second
var interval = setInterval(() => {
  // get current date and time
  var now = new Date().getTime();

  // get the time distance from now to launchDate
  var distance = launchDate - now;

  // Time calculations
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display results
  countdown.innerHTML = `
    <div><span class="time">${days}</span><span class="word">Days</span></div>
    <div><span class="time">${hours}</span><span class="word">Hours</span></div>
    <div><span class="time">${minutes}</span><span class="word">Minutes</span></div>
    <div><span class="time">${seconds}</span><span class="word">Seconds</span></div>
  `;

  // Check if launchDate is passed
  if (distance < 0) {
    clearInterval(interval);
    countdown.style.color = "#5b4d46";
    countdown.innerHTML = "Launched!"
  }
}, 1000);