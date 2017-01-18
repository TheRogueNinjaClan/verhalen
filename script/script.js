var testDiv = document.querySelector('.div_form');
  var test  = document.querySelector('.overzicht');
    var downloadToggle = true;

function showFilter(e){
  var targetClick = e.target.alt;
  var filterContainer = document.querySelector(".filter")
console.log(targetClick);

if(targetClick == "filter"){
  filterContainer.style.top= "20vh";
  console.log('lol');
}

if(targetClick == "annuleren"){
  filterContainer.style.top= "120vh";
}
}

/*toggle de src van download class*/
function download(e){
  var targetClick = e.target.alt;
  var srcImage = document.querySelector('.download');
  var x = srcImage.getAttribute('src');


  if(targetClick == 'download' && downloadToggle === true ){
    srcImage.src = 'icon/download_check.svgz';
    downloadToggle = false;
  }
  else if (targetClick == 'download' && downloadToggle === false){
    srcImage.src = 'icon/download.svgz';
    downloadToggle = true;
  }
}



document.addEventListener('click', download);  //verander de download image
document.addEventListener('click', showFilter);
