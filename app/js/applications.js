applications = {
	applicationFirst: {
		image: 'assets/shot-1.png',
		head: 'СТАНДАРТНЫЙ ПАКЕТ',
		date: '08 впреля 2012'
	},
	aplicationSecond: {
		image: 'assets/shot-2.png',
		head: 'НОВЫЙ ЦФТ-БАНК',
		date: '09 сентября 2016'
	},
	aplicationThird: {
		image: 'assets/shot-3.png',
		head: 'КАТАЛОГ РАЗРАБОТОК',
		date: '03 марта 2015'
	}
};

function getRandomElement (min, max) {
    return Math.floor(Math.random() * (max-min) + min);
    };

function createBlock() {
    objectLength = Object.keys(applications).length;

    applicationsIndex = getRandomElement(0, objectLength);
    sortedKeys = Object.keys(applications).sort();
    randomAplicationsName = sortedKeys[applicationsIndex];

	imageBlock = document.createElement('div');
	imageBlock.className = 'image-block clearfix';

	imageBlockDiv = document.getElementsByClassName('info-images')[0];

	imageBlockDiv.appendChild(imageBlock);

	imageElement = document.createElement('img');
	imageElement.className = 'image';
	imageElement.src = applications[randomAplicationsName].image;

	imageElementDiv = document.getElementsByClassName('image-block clearfix')[0];

	imageElementDiv.appendChild(imageElement);

	spanElement = document.createElement('span');
	spanElement.className = 'text-under-image heading-level-4';
	spanElement.innerHTML = applications[randomAplicationsName].head;

	imageElementDiv.appendChild(spanElement);

	span2Element = document.createElement('span');
	span2Element.className = 'date-under-text';
	span2Element.innerHTML = applications[randomAplicationsName].date;

	imageElementDiv.appendChild(span2Element);
}

i = 0;
do {
	createBlock();
	i++;
	console.log(i);
}
while (i < Object.keys(applications).length);
