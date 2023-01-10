(function () {
    "use strict";

    // 选择元素函数
    var el = function (element) {
        // id选择元素
        if (element.charAt(0) === "#") {
            return document.querySelector(element);
        }
        // 选择一类元素
        return document.querySelectorAll(element);
    };

    // 选择计算器的元素
    var viewer = el("#viewer"),
        equals = el("#equals"),
        nums = el(".num"),
        ops = el(".ops"),
        theNum = "",
        oldNum = "",
        resultNum,
        operator;

    // 数字
    var setNum = function () {
        if (resultNum) {
            theNum = this.getAttribute("data-num");
            resultNum = "";
        } else {
            theNum += this.getAttribute("data-num");
        }
        viewer.innerHTML = theNum;
    };

    // 操作符
    var moveNum = function () {
        oldNum = theNum;
        theNum = "";
        operator = this.getAttribute("data-ops");

        equals.setAttribute("data-result", "");
    };

    // 等号
    var displayNum = function () {

        oldNum = parseFloat(oldNum);
        theNum = parseFloat(theNum);

        switch (operator) {
            case "plus":
                resultNum = oldNum + theNum;
                break;

            case "minus":
                resultNum = oldNum - theNum;
                break;

            case "times":
                resultNum = oldNum * theNum;
                break;

            case "divided by":
                resultNum = oldNum / theNum;
                break;

            default:
                resultNum = theNum;
        }

        if (!isFinite(resultNum)) {
            if (isNaN(resultNum)) {
                resultNum = "错误";
            } else {
                resultNum = "不能除以0";
            }
        }

        viewer.innerHTML = resultNum;
        equals.setAttribute("data-result", resultNum);

        oldNum = 0;
        theNum = resultNum;
    };

    // 清除
    var clearAll = function () {
        oldNum = "";
        theNum = "";
        viewer.innerHTML = "0";
        equals.setAttribute("data-result", resultNum);
    };

    // 添加点击事件
    // 所有的数字按钮
    for (var i = 0, l = nums.length; i < l; i++) {
        nums[i].onclick = setNum;
    }

    // 操作符的点击事件
    for (var i = 0, l = ops.length; i < l; i++) {
        ops[i].onclick = moveNum;
    }

    equals.onclick = displayNum;

    el("#clear").onclick = clearAll;
})();