
var maanantai = ['xx1', 'yy1', 'zz1', 'ww1', 'qq1'];
var tiistai = ['xx2', 'yy2', 'zz2', 'ww2', 'qq2'];
var keskiviikko = ['xx3', 'yy3', 'zz3', 'ww3', 'qq3'];
var torstai = ['xx4', 'yy4', 'zz4', 'ww4', 'qq4'];
var perjantai = ['xx5', 'yy5', 'zz5', 'ww5', 'qq5'];
var päivät = ['Maanantai', 'Tiistai', 'Keskiviikko', 'Torstai', 'Perjantai'];

function lukkari() {
    let text = "";
    i = 1;
    for (let päivä of päivät) {
        text +=
            '<div class="paiva">' +
            '<h2 style="padding: 10px 15px";>' +
            päivä +
            '</h2>' +
            '<ul class="' + getClass(i) + '">' + tunnit(päivä.toLocaleLowerCase()) + '</ul>' +
            '</div>';
        i++;
    }
    document.getElementById("lukkari").innerHTML = text;
}

lukkari();

function tunnit(päivä) {
    const päiväArray = window[päivä];
    let text = "";
    for (var i = 0; i < päiväArray.length; i++) {
        text += '<li>' + päiväArray[i] + "</li>";
    }
    return text;
}

function getClass(i) {
    var aika = new Date();
    var luokka = 'redC'
    if (i === aika.getDay()) {
        luokka = 'greenC'
    }
    return luokka;
}
