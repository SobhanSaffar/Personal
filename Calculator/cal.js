    // پاک کردن
function clearScreen() {
    document.getElementById("result").value = "";
    }
    // اضاف کردن مقدار
    function display(value) {
    document.getElementById("result").value += value;
    }
    // نتیجه ارزیابی شده عبارت ریاضی را برمی گرداند.
    function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
    }