$(function(){

  // ハンバーガーボタンをクリック
  $(".hamburger").on('click', function () {
    $('#hamburger-menu').fadeToggle(500);
    // hamburgerMenu();
    $(this).toggleClass('active');
  });

  // ハンバーガーメニューをクリック
  $(".anchor").on("click", function () {
    $('#hamburger-menu').fadeOut(500);
    // hamburgerMenu();
    $(".hamburger").removeClass('active');
  });

  // ハンバーガーメニューを表示 or 非表示
  function hamburgerMenu() {
    const $target = $('#hamburger-menu')
    if ($target.css('display') == 'none') {
      $target.css(
        {
          'display': 'block',
          'opacity': 1,
        }
      );
    } else {
      $target.css(        
        {
          'display': 'none',
          'opacity': 0,
        }
      );
    }
  }

});