
var maanantai = ['1. Tunti', '2. Tunti', '3. Tunti', '4. Tunti', '5. Tunti'];
var tiistai = ['1. Tunti', '2. Tunti', '3. Tunti', '4. Tunti', '5. Tunti'];
var keskiviikko = ['1. Tunti', '2. Tunti', '3. Tunti', '4. Tunti', '5. Tunti'];
var torstai = ['1. Tunti', '2. Tunti', '3. Tunti', '4. Tunti', '5. Tunti'];
var perjantai = ['1. Tunti', '2. Tunti', '3. Tunti', '4. Tunti', '5. Tunti'];
var lauantai = ['Vapaa'];
var sunnuntai = ['Vapaa'];
var päivät = ['Maanantai', 'Tiistai', 'Keskiviikko', 'Torstai', 'Perjantai', 'Lauantai', 'Sunnuntai'];

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
