//--------------------------------variable---------------------------------------------
var testDiv = document.querySelector('.div_form');
var test  = document.querySelector('.overzicht');
var  slider = document.querySelector('#duur');
var  filter = document.querySelector('section > button');
var filterContainer = document.querySelector('.filter');
var downloadToggle = true;
var spook = document.querySelectorAll('.spook')

//----------------------------------Function------------------------------------------

/*toggle de src van download class*/
function download(e){
  var targetClick = e.target.alt;
  var srcImage = document.querySelector('.download');
  var x = srcImage.getAttribute('src');


  if(targetClick == 'download' && downloadToggle === true ){
    srcImage.src = 'icon/download_check.svg';
    downloadToggle = false;
  }
  else if (targetClick == 'download' && downloadToggle === false){
    srcImage.src = 'icon/download.svg';
    downloadToggle = true;
  }
}

function showFilter(e){
  var targetClick = e.target.alt;
  var filterContainer = document.querySelector(".filter")
console.log(targetClick);

if(targetClick == "filter"){
  filterContainer.style.top= "20vh";
}

}
function filter(){
  	filterContainer.classList.toggle('showFilter');
    console.log('classlist');
}

function filterHide(){
  	filterContainer.style.top= "110vh";
    console.log('lol');
}

//change font
function paranoia(){
for(i = 0; i<spook.length; i++){
    spook[i].style.fontStyle = 'italic';
}

  //bron:http://stackoverflow.com/questions/5600351/javascript-change-css-color-for-5-seconds
  setTimeout(function(){
    for(i = 0; i<spook.length; i++){
        spook[i].style.fontStyle = 'normal';
    }
  }, 5000);
}

setInterval(function(){
  paranoia();
}, 1000);
//----------------------------------------------Triggers---------------------------------------------
document.addEventListener('click', download);  //verander de download image
document.addEventListener('click', showFilter);
filter.addEventListener('click', filterHide);
