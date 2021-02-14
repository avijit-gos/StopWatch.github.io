let second = 0, minute = 0, hour = 0;
let displaySec, displayMin, displayHr;
let status = "stopped";
let interval = null;

//*********** Logic of Running the StopWatch **************//
function StopWatch() {
	second++;
	if(second/60 === 1) {
		second = 0;
		minute++;
		if(minute/60 === 1) {
			minute =0;
			hour++
		}
	}

	//Leading 0's
	if(second<10) {
		displaySec = `0${second.toString()}`;
	} else {
		displaySec = second
	} 
	if(minute<10) {
		displayMin = `0${minute.toString()}`
	} else {
		displayMin = minute
	}
	if(hour<10) {
		displayHr = `0${hour.toString()}`
	} else {
		displayHr = hour;
	}
	document.querySelector('.header').innerHTML = `${displayHr} : ${displayMin} : ${displaySec}`;
}

//****** Running the Start & Stop button
function startStop() {
	//starting stopWatch..
	if(status === 'stopped') {
		interval = window.setInterval(StopWatch,100);
		document.querySelector('#startStop').innerHTML = 'Pause';
		document.querySelector('#startStop').style.background = '#eb4d4b';
		status = 'Started'
	} else {
		window.clearInterval(interval);
		document.querySelector('#startStop').innerHTML = 'Start';
		document.querySelector('#startStop').style.background = '#6ab04c';
		status = 'stopped'
	}
}

//******* running of function Reset
function reset() {
	let time = document.querySelector('.header').innerHTML = `${displayHr}Min : ${displayMin}Sec : ${displaySec}ms`;
	alert(`You Completed in - ${time}`);
	window.clearInterval(interval);
	displaySec = 0;
	displayMin = 0;
	displayHr = 0;
	document.querySelector('.header').innerHTML = "00 : 00 : 00";
	document.querySelector('#startStop').innerHTML = 'Start';
	document.querySelector('#startStop').style.background = '#6ab04c';

}