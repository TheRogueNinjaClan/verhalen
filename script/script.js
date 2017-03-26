//--------------------------------variable---------------------------------------------
var testDiv = document.querySelector('.div_form');
var test = document.querySelector('.overzicht');
var slider = document.querySelector('#duur');
var filter = document.querySelector('section > button');
var filterContainer = document.querySelector('.filter');
var downloadButton = document.querySelector('.download');
var downloadToggle = true;
var spook = document.querySelectorAll('.spook');
var spook2 = document.querySelectorAll('.spook2');
var recentButton = document.querySelector('.recent button');
var recentToggle = true;
var positionUitgelicht = 0;

//----------------------------------Function------------------------------------------

/*toggle de src van download class*/
function download() {
    var progressieBar = document.querySelector('.overzicht article a div');

    if (downloadToggle === true) {
        progressieBar.classList.toggle('progressieBarActive');

        //Zorgt dat de plaatje later verandert
        setTimeout(function() {
            downloadButton.src = 'icon/download_check.svg';
            downloadToggle = false;
        }, 1950);
    } else {
        progressieBar.classList.toggle('progressieBarActive');
        downloadButton.src = 'icon/download.svg';
        downloadToggle = true;
    }
}

function showFilter(e) {
    var targetClick = e.target.alt;
    var filterContainer = document.querySelector(".filter");
    console.log(targetClick);

    if (targetClick == "filter") {
        filterContainer.style.top = "20vh";
    }

}

function filter() {
    filterContainer.classList.toggle('showFilter');
    console.log('classlist');
}

function filterHide() {
    filterContainer.style.top = "110vh";
    console.log('lol');
}

//slide the recent section to the screen
function showRecent() {
    var recentSection = document.querySelector('.recent');
    var arrow = document.querySelector('.recent button img');
    if (recentToggle === true) {
        recentSection.style.transform = 'translateX(-15em)';
        arrow.style.transform = 'rotate(180deg)';
        recentToggle = false;
    } else {
        recentSection.style.transform = 'translateX(0)';
        arrow.style.transform = 'rotate(0)';
        recentToggle = true;
    }
}

function nav() {
    document.querySelector('.navLocation').classList.add('navLocationCheck');
}

//bron:http://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow_auto
function showUitgelicht() {
    var uitgelicht = document.querySelectorAll('.uitgelicht');

    for (i = 0; i < uitgelicht.length; i++) {
        uitgelicht[i].style.display = 'none';
    }

    positionUitgelicht++;
    console.log(positionUitgelicht);

    if (positionUitgelicht > uitgelicht.length) {
        positionUitgelicht = 1;
    }

    uitgelicht[positionUitgelicht - 1].style.display = 'block';
    setTimeout(showUitgelicht, 4000);
}

//change font
function paranoia() {
    for (i = 0; i < spook.length; i++) {
        spook[i].style.fontStyle = 'italic';
    }

    //bron:http://stackoverflow.com/questions/5600351/javascript-change-css-color-for-5-seconds
    setTimeout(function() {
        for (i = 0; i < spook.length; i++) {
            spook[i].style.fontStyle = 'normal';
        }
    }, 5000);
}

setInterval(function() {
    paranoia();
}, 1000);
//----------------------------------------------Triggers---------------------------------------------
window.addEventListener('load', nav);
window.addEventListener('load', showUitgelicht);
downloadButton.addEventListener('click', download); //verander de download image
document.addEventListener('click', showFilter);
recentButton.addEventListener('click', showRecent);
filter.addEventListener('click', filterHide);
