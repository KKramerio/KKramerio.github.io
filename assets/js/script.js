// script.js
function changeImage(images) {
    var currentIndex = 0;
    var image = document.getElementById("image");
    function updateImage() {
      image.src = images[currentIndex];
      currentIndex++;
      if (currentIndex >= images.length) {
        currentIndex = 0;
      }
    }
    updateImage();
    setInterval(updateImage, 2000); //Change image every 3 sec
  }

  function toggleZoom() {
    var image = document.getElementById("zoomable-image");
    image.classList.toggle("zoomed");
  }