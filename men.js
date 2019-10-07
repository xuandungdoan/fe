// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction();myFunction2();};

// Get the header
var header = document.getElementById("myHeader");
var header2 =document.getElementById('myheader2')
// Get the offset position of the navbar
var sticky = header.offsetTop;
var box =document.getElementById('box');
var search =  document.getElementById('search');

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    header2.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
    header2.classList.remove("sticky");
  }
}

function myFunction2() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    box.style.transition="0.4s";
    box.style.width="50px";
    search.style.display= 'none';
  } else {
    box.style.transition="0.5s";
    box.style.width="200px";
    search.style.display= 'block';
  }
}