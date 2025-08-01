//your JS code here. If required.

function updateClock() {

	const now = new Date();
	const formateTime = now.toLocaleString();
	document.getElementById('timer').textContent = formateTime;
	
}
updateClock();

setInterval(updateClock, 1000);