var myVar = setInterval(function(){ myTimer() }, 1000);


function myTimer(){
    var start_data = new Date("2020/11/28")
    var cur_data = new Date()

	var millisecond = Math.floor((cur_data.getTime() - start_data.getTime())/1000);
	var allDay = Math.floor(millisecond/(24*60*60));

	var startYear = start_data.getFullYear();
	var currentYear = cur_data.getFullYear();

	var leapYear = 0;
	for(var i=startYear; i<currentYear; i++){
        if((i%4==0 && i%100!=0) || (i%100==0 && i%400==0)){
          leapYear++;
        }
	}

	var run_year = Math.floor((allDay - leapYear*366)/365 + leapYear);
    var run_day;
    if(allDay > 366){
        run_day = (allDay - leapYear*366)%365;
    }else{
        run_day = allDay;
    }
	
	var remainder = millisecond%(24*60*60);
	var run_hour = Math.floor(remainder/(60*60));
	var run_minute = Math.floor(remainder%(60*60)/60);
	var run_second = remainder - run_hour*60*60 - run_minute*60; 


	currentTimeHtml='风吹雨打中坚挺了 '+(run_year>0 ? (run_year + " 年 "):"")+ run_day +' 天 '+ run_hour +' 时 '+ run_minute +' 分 '+ run_second +' 秒';
	document.getElementById("running-time").innerHTML=currentTimeHtml;

};

