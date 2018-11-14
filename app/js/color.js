elements = document.querySelectorAll('*');
var size = Object.keys(elements).length;
function getRandomElement (min, max) {
return Math.floor(Math.random() * (max-min) + min);
};
function getRandomColor(){
    var allowed = "ABCDEF0123456789", S = "#";
 
    while(S.length < 7){
        S += allowed.charAt(Math.floor((Math.random()*16)+1));
    }
    return S;
 };
var tagNumber = getRandomElement(0,size);
var newColor = getRandomColor;
elements[tagNumber].style.background = '#ff0000';