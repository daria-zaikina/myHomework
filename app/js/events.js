applications = [{
		image: 'assets/shot-1.png',
		head: 'СТАНДАРТНЫЙ ПАКЕТ',
		date: '08 впреля 2012'
	}, {
		image: 'assets/shot-2.png',
		head: 'НОВЫЙ ЦФТ-БАНК',
		date: '09 сентября 2016'
	}, {
		image: 'assets/shot-3.png',
		head: 'КАТАЛОГ РАЗРАБОТОК',
		date: '03 марта 2015'
	}, {
		image: 'assets/shot-3.png',
		head: 'КАТАЛОГ РАЗРАБОТОКK',
		date: '03 марта 2015'
	}, {
		image: 'assets/shot-3.png',
		head: 'КАТАЛОГ РАЗРАБОТОКKK',
		date: '03 марта 2015'
	}, {
		image: 'assets/shot-3.png',
		head: 'КАТАЛОГ РАЗРАБОТОКKKK',
		date: '03 марта 2015'
	}
];
var i = 2 ;
function createApplication() {

let imageBlockDiv = document.getElementsByClassName('info-images')[0];

let imageBlock = document.createElement('div');
imageBlock.className = 'image-block clearfix';



imageBlockDiv.appendChild(imageBlock);

let imageElement = document.createElement('img');
imageElement.className = 'image';
imageElement.src = applications[i].image;

imageBlock.appendChild(imageElement);

let spanElement = document.createElement('span');
spanElement.className = 'text-under-image heading-level-4';
spanElement.innerHTML = applications[i].head;

imageBlock.appendChild(spanElement);

let span2Element = document.createElement('span');
span2Element.className = 'date-under-text';
span2Element.innerHTML = applications[i].date;

imageBlock.appendChild(span2Element);
}

do {
    createApplication ();
    i ++;
}
while (i < 5);

function changeApplicationsToRight (i) {
     return i ++;
}