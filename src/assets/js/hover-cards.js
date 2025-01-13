$(document).ready(function () {
  let hoverTimeout;
  $(".box-business").hover(
    function () {
      clearTimeout(hoverTimeout);

      $(".box-business").removeClass("active");
    },
    function () {
      hoverTimeout = setTimeout(function () {
        $(".box-business:first").addClass("active");
      }, 400);
    }
  );

  $(".box-business:first").addClass("active");
});
$(document).ready(function () {
  let hoverTimeout;
  $(".box-program-network").hover(
    function () {
      clearTimeout(hoverTimeout);

      $(".box-program-network").removeClass("active");
    },
    function () {
      hoverTimeout = setTimeout(function () {
        $(".box-program-network:first").addClass("active");
      }, 400);
    }
  );

  $(".box-program-network:first").addClass("active");
});
