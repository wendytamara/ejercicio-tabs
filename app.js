/*
function display () {
    var tabs = document.querySelectorAll(".tabs");
    var tab2 = document.getElementById("tab2");
    tab2.addEventListener("click", displayTab2);
}
function displayTab2 () {
    var container2 = document.getElementById("container2");
    container2.classList.remove("hidden");
    var container1 = document.getElementById("container1");
    container1.classList.add('hidden');
}

window.onload = function() {
    display();
}

function displayTab3 () {
    var container2 = document.getElementById("container2");
    container2.classList.remove("hidden");
    var container1 = document.getElementById("container1");
    container1.classList.add('hidden');
}
*/
var tabs = document.querySelectorAll(".tabs");
var parrafos = document.querySelectorAll(".parrafos");

function toggleTab (elem){
  for (var i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", showContainers);
  }
}

function showContainers() {
  for (var j = 0; j < parrafos.length; j++) {
    parrafos[j].dataset.text;
  }

}

window.onload = function() {
  toggleTab(tabs);
}
