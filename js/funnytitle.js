/* 离开当前页面时修改网页标题，回到当前页面时恢复原来标题 */
window.onload = function() {
  var OriginTitile = document.title;
  var titleTime;
  document.addEventListener('visibilitychange', function() {
    if(document.hidden) {
      $('[rel="icon"]').attr('href', "https://cdn.jsdelivr.net/gh/nixgnauhcuy/cdn/image/leave.png");
      $('[rel="shortcut icon"]').attr('href', "https://cdn.jsdelivr.net/gh/nixgnauhcuy/cdn/image/leave.png");
      document.title = '╭(°A°`)╮ 页面崩溃啦';
      clearTimeout(titleTime);
    } else {
      $('[rel="icon"]').attr('href', "https://cdn.jsdelivr.net/gh/nixgnauhcuy/cdn/image/favicon.png");
      $('[rel="shortcut icon"]').attr('href', "https://cdn.jsdelivr.net/gh/nixgnauhcuy/cdn/image/favicon.png");
      document.title = 'ฅ>ω<*ฅ) 噫又好了';
      titleTime = setTimeout(function() {
        document.title = OriginTitile;
      }, 2000);
	}
  });
}
