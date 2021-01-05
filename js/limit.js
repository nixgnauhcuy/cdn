/*!
 * limit v1.0.0
 * (c) 2020 nixgnauhcuy
 * Released under the GPL-2.0 License.
 * Last Update: 2020/12/25 下午13:58:08
 */
function limit(){    
    document.oncontextmenu = new Function("return false;");
    document.onkeydown = document.onkeyup = document.onkeypress = function(event) {
        var e = event || window.event || arguments.callee.caller.arguments[0];

        if (e.keyCode == 123)
        {
            btf.snackbarShow("打开控制台成功，采用本站js及css请注明来源，禁止商业使用！", undefined, 3000)
        }
        
        if (window.event.ctrlKey && e.keyCode == 67)
        {
            btf.snackbarShow(GLOBAL_CONFIG.copy.success)
        }

        if (window.event.shiftKey && window.event.ctrlKey && e.keyCode == 73)
        {
            btf.snackbarShow("打开控制台成功，采用本站js及css请注明来源，禁止商业使用！", undefined, 3000)
        }

    }
}

limit()


