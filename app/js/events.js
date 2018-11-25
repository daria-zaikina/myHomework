var xhr = new XMLHttpRequest();
xhr.open("GET","http://localhost:3000/api/APP.json", true);
xhr.send();

xhr.onreadystatechange = function () {
if (xhr.status == 200 && xhr.readyState == 4) {
    console.log("xhr.responseText", xhr.responseText);
    appJSON = JSON.parse(xhr.responseText);
    console.log(appJSON.length);
    createAllApplications(appJSON);
	console.log(appJSON[0].image);
	step = appJSON.length - 3;
 }
}

let imageSwitchRight = document.querySelector('.image-switch-right');
	imageSwitchRight.addEventListener('click', switchRight); 

let imageSwitchLeft = document.querySelector('.image-switch-left');
	imageSwitchLeft.addEventListener('click',switchLeft); 


function createApplication(application) {
let imageBlockDiv = document.getElementsByClassName('images-line clearfix')[0];

let imageBlock = document.createElement('li');
	imageBlock.className = 'image-block';
	
let imageBlockContainer = document.createElement('div');
	imageBlockContainer.className = 'image-block__container';
	
let imageBlockImg = document.createElement('img');
	imageBlockImg.className = 'image-block__img';
	imageBlockImg.src = application.image;
console.log(application.image);
	
let textUnderImage = document.createElement('div');
	textUnderImage.className = 'text-under-image';
	textUnderImage.innerHTML = application.title;

let dateUnderText = document.createElement('div');
	dateUnderText.className = 'date-under-text';
	dateUnderText.innerHTML = application.lastUpdate;


	imageBlockDiv.appendChild(imageBlock);
	imageBlock.appendChild(imageBlockContainer);
	imageBlockContainer.appendChild(imageBlockImg);
	imageBlockContainer.appendChild(textUnderImage);
	imageBlockContainer.appendChild(dateUnderText);
};

function createAllApplications (applications) {
var i = 0;
do {
    createApplication(applications[i]);
	i ++;
}
while (i < applications.length);
};

var position = 1;
function switchRight () {
	if (position = 1) {
		let imageBlock = document.querySelector('.images-line');
		let switchLength = step * 363;
		imageBlock.style.marginLeft = -switchLength + 'px';
		position --;
		console.log("step",step);
	};
	if (position < step && position > 1) {
		let imageBlock = document.querySelector('.images-line');
		let switchLength = position * 363;
		imageBlock.style.marginLeft = switchLength + 'px';
		position --;
		console.log("step",step);
	};
}

function switchLeft () {
	if (position >= step) {
	let imageBlock = document.querySelector('.images-line');
	let switchLength =  0;
	imageBlock.style.marginLeft = switchLength + 'px';
	position ++;
	console.log("step",step);
	};
	if (position < step) {
	let imageBlock = document.querySelector('.images-line');
	let switchLength =  -position * 363;
	imageBlock.style.marginLeft = switchLength + 'px';
	position ++;
	console.log("step",step);
	};
}