
function showtime() {
    var date = new Date();
    var h = date.getHours(); //0-23
    var m = date.getMinutes(); //0-59
    var s = date.getSeconds(); //0-59
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s;
    document.getElementById("aika").innerText = time;
    setTimeout(showtime, 1000);
}
showtime();
