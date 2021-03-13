$(function(){
  $('#single-item').slick({
      autoplay:true, // 自動再生を設定
      autoplaySpeed:3000, // スライド切り替えの時間を設定
      dots:true, // インジケーターを表示
    });
  window.onscroll = function(){
    var scrollTop = window.pageYOffset ;   //スクロール量を取得
    if (scrollTop > 200 ) { 　　
      $('#main-header').css('background-color', 'black');
      $('#main-header').css('transition', '1.3s')
    }
    if (scrollTop < 200 ) { 
      $('#main-header').css('background-color', '');
      $('#main-header').css('transition', '1.0s')
    }
  }
});