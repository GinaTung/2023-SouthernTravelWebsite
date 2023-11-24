// 確保圖片都載入後，以免造成剛進入頁面時圖片會被覆蓋
$('.waterfall-flow-section').imagesLoaded().progress( function() {
    $('.waterfall-flow-section').masonry(); // 渲染整體畫面
  });
  