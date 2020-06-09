function updateClock() {
	var date = new Date();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var ampm = hours >= 12 ? 'pm' : 'am';
		hours = hours % 12;
		hours = hours ? hours : 12;
		minutes = minutes < 10 ? '0'+minutes : minutes;
	var time = hours+2 + ':' + minutes + ' ' + ampm;   //hours+2 is because of privacy.resistFingerprinting = True in Firefox, which set browsertime to UTC
		document.getElementById('time').innerHTML = time;
		setTimeout(updateClock, 1000);
}
updateClock();
