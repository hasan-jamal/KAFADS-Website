// StartSlider 1

$(document).ready(function () {
  $(".slider-logos").slick({
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    dots: false,
    responsive: [
      {
        breakpoint: 1025, // Mobile landscape and larger
        settings: {
          slidesToShow: 5, // Number of slides to show at once
          centerMode: true, // Optional: Keep centering on smaller screens
          centerPadding: "0px", // Adjust padding if needed
        },
      },
      {
        breakpoint: 614.4, // Mobile landscape and larger
        settings: {
          slidesToShow: 4, // Number of slides to show at once
          centerMode: true, // Optional: Keep centering on smaller screens
          centerPadding: "0px", // Adjust padding if needed
        },
      },
      {
        breakpoint: 480, // Mobile portrait and smaller
        settings: {
          slidesToShow: 3, // Number of slides to show at once
          centerMode: false, // Optional: Turn off centering for small screens
          centerPadding: "0px", // Adjust padding if needed
        },
      },
    ],
  });
});
//  End Slider 1
// StartSlider 2

$(document).ready(function () {
  $(".slider-clients").slick({
    prevArrow: $(".arrow-left-clients"),
    nextArrow: $(".arrow-right-clients"),
    centerMode: true,
    centerPadding: "0px",
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    responsive: [
      {
        breakpoint: 1025, // Mobile landscape and larger
        settings: {
          slidesToShow: 2, // Number of slides to show at once
          centerMode: true, // Optional: Keep centering on smaller screens
          centerPadding: "0px", // Adjust padding if needed
        },
      },
      {
        breakpoint: 877.8, // Mobile landscape and larger
        settings: {
          slidesToShow: 2, // Number of slides to show at once
          centerMode: true, // Optional: Keep centering on smaller screens
          centerPadding: "0px", // Adjust padding if needed
        },
      },
      {
        breakpoint: 614.5, // Mobile portrait and smaller
        settings: {
          slidesToShow: 1, // Number of slides to show at once
          centerMode: false, // Optional: Turn off centering for small screens
          centerPadding: "0px", // Adjust padding if needed
        },
      },
    ],
  });
});
//  End Slider 2
