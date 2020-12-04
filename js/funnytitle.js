<!--浏览器搞笑标题-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "https://cdn.jsdelivr.net/gh/nixgnauhcuy/cdn/image/leave.png");
         document.title = '╭(°A°`)╮ 页面崩溃啦';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "https://cdn.jsdelivr.net/gh/nixgnauhcuy/cdn/image/favicon.png");
         document.title = '(ฅ>ω<*ฅ) 噫又好了';
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });