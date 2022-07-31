//loading画面
$(window).on('load',function(){
  $("#loading").delay(4500).fadeOut('slow');//ローディング画面を4.5秒（1500ms）待機してからフェードアウト
  $("#dogLoading").delay(4500).fadeOut('slow');//ロゴを4.5秒（1200ms）待機してからフェードアウト
});

//トップ画像
$('#slideContents').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2400,
});