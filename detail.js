// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction();myFunction2();myFunction3();};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;
var box =document.getElementById('box');
var search =  document.getElementById('search');
var info = document.getElementById("info");

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

function myFunction2() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    box.style.transition="0.4s";
    search.style.transition="0.4s";
    box.style.width="50px";
    search.style.display= 'none';
  } else {
    box.style.transition="0.6s";
    search.style.transition="0.4s";
    box.style.width="200px";
    search.style.display= 'block';
  }
}
function myFunction3(){
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop <2405) {
    info.style.transition="0.4s";
    info.classList.add("sticky2");
    info.style.padding= "35px";
  } else {
    info.style.transition="0.4s";
    info.classList.remove("sticky2");
    info.style.padding= "45px";
  }
}