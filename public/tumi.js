//get the popup
var createplaylist = document.getElementById("createPlaylistPop");

//get the button that opens the popup
var createbtn = document.getElementById("createPlaylistButton");

// get the element that closes the modal
 var span = document.getElementsByClassName("close-create")[0];

// when the button is clicked, open the popup
   createbtn.onclick = function() {
    createplaylist.style.display = "block";
}

// when closed (x) is clicked, close the popup
  span.onclick = function() {
    createplaylist.style.display = "none";
}

// When the user clicks anywhere outside of the popup, close it
window.onclick = function(event) {
  if (event.target == createplaylist) {
      createplaylist.style.display = "none";
  }
}

const hamburger = document.querySelector('.hamburger');
const nav = document.getElementById('menu');

hamburger.addEventListener('click', function() {
  nav.classList.toggle('open');
});