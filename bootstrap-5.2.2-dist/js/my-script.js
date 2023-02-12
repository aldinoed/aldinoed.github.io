// Fitur Popup Message
$(document).ready(function () {
  if (
    $(".send").click(function () {
      alert("Message sent!");
    })
  );
});

// Fitur Actived Menu Navigation
$(document).ready(function () {
  const itemList = $(".nav-item a");
  if (
    itemList.click(function () {
      $("a").removeClass("actived"), $(this).addClass("actived");
    })
  );
});

//Fitur Section Margin Top
$(".nav-link").click(function () {
  const linked = $(this).attr("href");
  const linkedSection = $(linked);
  $("html, body").animate({
    scrollTop: linkedSection.offset().top - 50,
  });
});
