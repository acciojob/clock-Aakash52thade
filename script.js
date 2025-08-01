//your JS code here. If required.

function updateClock() {

	const now = new Date();
	const formateTime = now.toLocalString();
	document.getElementById('timer').textContext = formateTime;
	
}
updateClock();

setInterval(updateClock, 1000);