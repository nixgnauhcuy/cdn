/* 离开当前页面时修改网页标题，回到当前页面时恢复原来标题 */
window.onload = function() {
  var OriginTitile = document.title;
  document.addEventListener('visibilitychange', function() {
    if(document.hidden) {
      $('[rel="icon"]').attr('href', "https://cdn.jsdelivr.net/gh/nixgnauhcuy/cdn/image/leave.png");
      $('[rel="shortcut icon"]').attr('href', "https://cdn.jsdelivr.net/gh/nixgnauhcuy/cdn/image/leave.png");
      document.title = '网页走丢了╭(°A°`)╮';
    } else {
      $('[rel="icon"]').attr('href', "https://cdn.jsdelivr.net/gh/nixgnauhcuy/cdn/image/favicon.png");
      $('[rel="shortcut icon"]').attr('href', "https://cdn.jsdelivr.net/gh/nixgnauhcuy/cdn/image/favicon.png");
      document.title = OriginTitile;
	}
  });
}
