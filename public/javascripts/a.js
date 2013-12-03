function getCurrentTime() {
	return moment().tz("America/Los_Angeles").format("hh:mm:ss a");
}

var time = getCurrentTime();

function setTime(time) {
	// var americanTime = moment().tz("America/Los_Angeles").format("hh:mm:ss a")
	// var chineseTime = moment().tz("Asia/Shanghai").format("hh:mm:ss a")
	// document.getElementById('america').innerHTML = americanTime;
	document.getElementById('time').innerHTML = "Its " + time + " right now.";
}

function isAwake(time) {
	var timeArray = time.split(":")
	var hours = parseInt(timeArray[0])
	var minutes = parseInt(timeArray[1])
	var seconds = parseInt(timeArray[2].split(" ")[0])
	var merd = timeArray[2].split(" ")[1]

	if(( ((hours >= 6) && (hours <= 11)) && merd == "am") || (hours < 10 && merd == "pm") || (hours == 12 && merd == "pm"))
	{
		awakeStatus = true;
	}
	else if (hours == 12 && merd == "am")
	{	
		awakeStatus = false;
	}
	else
	{
		awakeStatus = false;
	}
	return awakeStatus;
}

function display() {
	var time = getCurrentTime();
	setTime(time);

	var currentStatus = isAwake(time);
	var status;
	var body = $('body');
	if(currentStatus == true)
	{
		status = "Yes, they're awake."
	}
	else
	{
		status = "No, they're asleep."
	}

	document.getElementById('status').innerHTML = status;
}

setInterval(display, 500);