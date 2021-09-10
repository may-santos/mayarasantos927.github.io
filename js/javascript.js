$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});

$(document).ready(function () {
  $(".slideshow-img:gt(0)").hide();

  setInterval(function () {
    $(".slideshow-img:first")
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo("#slideshow");
  }, 3000);
});

var slideIndex = 1;
showDivs(slideIndex, "mySlidesGerenciador");
showDivs(slideIndex, "mySlidesVacinaSP");
showDivs(slideIndex, "mySlidesAdoptCat");
// showDivs(slideIndex, 'mySlidesGerenciador');

function plusDivs(n, nameClass) {
  showDivs((slideIndex += n), nameClass);
}

function showDivs(n, nameClass) {
  var i;
  var x = document.getElementsByClassName(nameClass);
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}
