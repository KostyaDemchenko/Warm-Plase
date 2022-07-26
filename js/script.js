$('.slider').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {

  $(".num").text(slick.slickCurrentSlide() + 1)
  $(".amnt").text(slick.slideCount)

});


// read-more

function read_more() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("more-btn");
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Читать далее";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Свернуть";
    moreText.style.display = "flex";
  }
}

$(document).ready(function () {

  $('.our-works-slider').slick({
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 3,
    appendArrows: ".our-works-slider__navigation",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          centerMode: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: false,
          slidesToShow: 1
        }
      }
    ]
  });

// conter
  $('.our-works-slider').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    let counter = slick.slickCurrentSlide() + 1 + " / " + slick.slideCount;
    $(".our-works-slider__counter").text(counter);
  });

//btn-scroll-up
  var btn = $('#button');

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, '300');
  });


});