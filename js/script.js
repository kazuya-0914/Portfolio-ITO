$(function(){

  // ハンバーガーボタンをクリック
  $(".hamburger").on('click', function () {
    $("#hamburger-menu").slideToggle(1000);
    $(this).toggleClass('active');
  });

  // ハンバーガーメニューをクリック
  $(".anchor").on("click", function () {
    $("#hamburger-menu").slideUp(1000);
    $(".hamburger").removeClass('active');
  });

  // ハンバーガーメニューを表示 or 非表示
  /*
  function hamburgerMenu() {
    const $target = $('#hamburger-menu')
    if ($target.css('display') == 'none') {
      $target.css('display', 'block');
    } else {
      $target.css('display', 'none');
    }
  }
  */

});