(function() {
  function resize() {
    var baseFontSize = 100; //设计稿 100px 相当于 1rem
    var designWidth = 750; //设计稿宽度
    var width = window.innerWidth; //屏幕宽度
    var currentFontSize = (width / designWidth) * baseFontSize;
    document.querySelector("html").style.fontSize = currentFontSize + "px";
  }
  window.onresize = function() {
    resize();
  };

  document.addEventListener("DOMContentLoaded", resize);
})();
