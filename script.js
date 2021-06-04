var img = document.getElementById('watch-img');
var timediv = document.getElementById('time');
var heartdiv = document.getElementById('heart-rate');
timediv.style.display = 'block';
heartdiv.style.display = 'none';


function showTime(){
	timediv.style.display = 'block';
	heartdiv.style.display = 'none';
}

function showHeartRate(){
	timediv.style.display = 'none';
	heartdiv.style.display = 'block';
}



function changeWatch(e){
	var color = e.id;
	// var getClass = e.classList;
	// var active = getClass.contains('active');
	// if (!active) {
	// 	getClass.add('active');
	// }
	
	chooseColor(color);
};

function chooseColor(color) {
	switch (color) {
		case 'red':
			img.src = 'https://i.imgur.com/PTgQlim.png';
			break;
		case 'black':
			img.src = 'https://i.imgur.com/iOeUBV7.png';
			break;
		case 'blue':
			img.src = 'https://i.imgur.com/Mplj1YR.png';
			break;
		case 'pink':
			img.src = 'https://i.imgur.com/Zygu7I3.png';
			break;
		case 'purple':
			img.src = 'https://i.imgur.com/xSIK4M8.png';
			break;
	}
}