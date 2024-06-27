
var image7 = document.getElementById('image7');
 var imageDropdown = document.getElementById('imageDropdown');


 function toggleDropdown() {
   imageDropdown.classList.toggle('show');
 }


 window.onclick = function(event) {
   if (!event.target.matches('#image7')) {
     if (imageDropdown.classList.contains('show')) {
       imageDropdown.classList.remove('show');
     }
   }
 }

 image7.addEventListener('click', toggleDropdown);
