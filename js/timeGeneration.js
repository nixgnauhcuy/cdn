// 生成时间
function TimeGeneration() {

}

TimeGeneration.prototype = {
    constructor: TimeGeneration,

    // 获取时间 array
    getTime: function () {
        var time = new Date();
        return [parseInt(time.getHours() / 10),
            parseInt(time.getHours() % 10),
            parseInt(time.getMinutes() / 10),
            parseInt(time.getMinutes() % 10),
            parseInt(time.getSeconds() / 10),
            parseInt(time.getSeconds() % 10)]
    },

}


