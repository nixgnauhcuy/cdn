setInterval(()=>{
  var today = new Date();
  var seconds = 1000;
  var minutes = seconds * 60;
  var hours = minutes * 60;
  var days = hours * 24;
  var years = days * 365;
  var todayYear = today.getFullYear();
  var todayMonth = today.getMonth()+1;
  var todayDate = today.getDate();
  var todayHour = today.getHours();
  var todayMinute = today.getMinutes();
  var todaySecond = today.getSeconds();

  var create_time=Date.UTC(2020,11,28,0,0,0);
  var timestamp = Date.UTC(todayYear,todayMonth,todayDate,todayHour,todayMinute,todaySecond);
  var all_sec=timestamp-create_time;

  var extra_date = 0;
  if((todayYear%4==0 && todayYear%100!=0)||(todayYear%100==0 && todayYear%400==0)){
	extra_date = 1;
  }

  let time=new Array(0,0,0,0,0);
  time[0]=Math.floor(all_sec/years);
  time[1]=Math.floor(((all_sec/days)-time[0]*365)-extra_date);
  time[2]=Math.floor((all_sec-(time[0]*365+time[1])*days)/hours);
  time[3]=Math.floor((all_sec-(time[0]*365+time[1])*days-time[2]*hours)/minutes);
  time[4]= Math.floor((all_sec-(time[0]*365+time[1])*days-time[2]*hours-time[3]*minutes)/seconds);
  currentTimeHtml='本站已安全运行 '+time[0]+' 年 '+time[1]+' 天 '+time[2]+' 时 '+time[3]+' 分 '+time[4]+' 秒';
  document.getElementById("running-time").innerHTML=currentTimeHtml;
},1000);