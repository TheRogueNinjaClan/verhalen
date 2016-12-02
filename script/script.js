function showFilter(e){
  var targetClick = e.target.name;
  var filterContainer = document.querySelector("#filter")
console.log(targetClick);

if(targetClick == "filter"){
  filterContainer.style.transform= "translate(-50vh, -50vw)";
  console.log('lol');
}
}


document.addEventListener('click', showFilter);
