function updateClock() {
  const now = new Date();
  const formattedTime = now.toLocaleString();
  document.getElementById('timer').textContent = formattedTime; 
}

updateClock();
setInterval(updateClock, 1000);
