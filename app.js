/**
 * Created by Andres on 1/20/2017.
 */

/*
var loadResume = function (){
    document.getElementsByTagName("main").load("resume.html");
}

var loadAbout = function () {
    document.getElementsByTagName("main").load("about.html");
}*/
var resume = document.getElementsByClassName("resume");
var main = document.getElementsByTagName("main");
var loadResume = function() {
    resume.addEventListener('click', showResume());
}

function showResume() {
    main.innerHTML = " ";
    main.innerHTML = "<div>HELLLO!</div>";
}


loadResume();