var xhr = new XMLHttpRequest();
xhr.open("GET","http://localhost:3000/api/APP.json", true);
xhr.send();

xhr.onreadystatechange = function () {
if (xhr.status == 200 && xhr.readyState == 4) {
    appJSON = JSON.parse(xhr.responseText);
	console.log("appJSON.length", appJSON.length);
	imagesContainer = document.querySelector(".images-container");
    widthImagesContainer = window.getComputedStyle(imagesContainer).width;
	appsOnPage = Math.trunc(parseInt(widthImagesContainer)/330);
	lengthApps = appJSON.length
	switchToEnd = lengthApps - appsOnPage;
	position = Math.trunc(lengthApps/2 - 1);
	createAllApplications(appJSON);
	createSwitchButtons(lengthApps);
	createActiveDot(position);
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

function createButton(application) {
let dotBlockDiv = document.querySelector(".switch-dot-line");

let dot = document.createElement('span');
    dot.className = 'switch-dot_button' + ' ' + application;
	
    dotBlockDiv.appendChild(dot);
}


function createAllApplications (applications) {
let imageBlock = document.querySelector('.images-line');
let startLength = -position * 362;
    imageBlock.style.marginLeft = startLength + 'px'; 
var i = 0;
do {
    createApplication(applications[i]);
	i ++;
}
while (i < applications.length);
console.log("startLength", startLength);
};

function createSwitchButtons(length) {
for (i=0; i < length; i++) {
	createButton(i);
	console.log("App", i);
}
};

function createActiveDot (middle) {
	let dots = document.getElementsByClassName("switch-dot_button")[middle];
	    dots.className =  'switch-dot_button' + ' ' + 'active';
}
function removeActiveDot (middle) {
	let dots = document.getElementsByClassName("switch-dot_button")[middle];
	    dots.className =  'switch-dot_button';
}

function switchRight () {
	let imageBlock = document.querySelector('.images-line');
	if (position <= switchToEnd && position > 0) {
		removeActiveDot(position);
		position --;
		let switchLength = -position * 362;
		imageBlock.style.marginLeft = switchLength + 'px';
		console.log("position right",position);
		console.log("switchLength right",switchLength);
		createActiveDot(position);
}
	else if (position == 0) {
		removeActiveDot(position);
		position = switchToEnd
		console.log("switchToEnd right", switchToEnd)
		let switchLength = -position * 362;
		imageBlock.style.marginLeft = switchLength + 'px';
		console.log("position = 0 right",position);
		console.log("switchToEnd",switchToEnd);
		createActiveDot(position);
	}
}

function switchLeft () {
	let imageBlock = document.querySelector('.images-line');
	if (position < switchToEnd ) {
		removeActiveDot(position);
		position ++;
		let switchLength = -position * 362;
		imageBlock.style.marginLeft = switchLength + 'px';
		console.log("position left",position);
		console.log("switchLength left", switchLength)
		createActiveDot(position);
		}
	else if (position == switchToEnd) {
		removeActiveDot(position);
		position = switchToEnd;
		let switchLength = 0;
		imageBlock.style.marginLeft = switchLength + 'px';
		console.log("position == switchToEnd left",position);
		console.log("position == switchToEnd left",switchLength);
		position = 1;
		createActiveDot(position-1);
		}
	else if (position < 1) {
		removeActiveDot(position);
		let switchLength = switchToEnd * 362;
		imageBlock.style.marginLeft = -switchLength + 'px';
		position = switchToEnd;	
		createActiveDot(position);
		}
}
