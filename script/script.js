function showFilter(e){
  var targetClick = e.target.name;
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


document.addEventListener('click', showFilter);
