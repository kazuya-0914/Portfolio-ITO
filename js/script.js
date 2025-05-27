$(function(){
  $(".hamburger").on('click', function () {
    const $target = $('#hamburger-menu')
    if ($target.css('display') === 'none') {
      $target.css('display', 'block');
    } else {
      $target.css('display', 'none');
    }

    $(this).toggleClass('active');
  });

  $(".anchor").on("click", function () {
    const $target = $('#hamburger-menu');
    $target.css('opacity', 0);
  });
});