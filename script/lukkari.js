
var maanantai = [
    {'aika':'8:15-9:15', 'tunti':'MU'},
    {'aika':'9:30-10:30', 'tunti':'MU'},
    {'aika':'10:50-11:50', 'tunti':'FY'},
    {'aika':'11:50-12:15', 'tunti':'RUOKAILU'},
    {'aika':'12:15-13:15', 'tunti':'ATK'},
    {'aika':'13:30-14:30', 'tunti':'ATK'}
];
var tiistai = [
    {'aika':'8:15-9:15', 'tunti':'TN'},
    {'aika':'9:30-10:30', 'tunti':'TN'},
    {'aika':'10:50-11:50', 'tunti':'FY'},
    {'aika':'11:50-12:15', 'tunti':'RUOKAILU'},
    {'aika':'12:15-13:15', 'tunti':'ÄI'},
    {'aika':'13:15-14:15', 'tunti':'HYPPY'},
    {'aika':'14:15-15:00', 'tunti':'IS'}
];
var keskiviikko = [
    {'aika':'8:15-9:15', 'tunti':'HI'},
    {'aika':'9:30-10:30', 'tunti':'ÄI'},
    {'aika':'10:35-11:00', 'tunti':'RU'},
    {'aika':'11:00-11:25', 'tunti':'RUOKAILU'},
    {'aika':'11:25-12:00', 'tunti':'RU'},
    {'aika':'12:15-13:15', 'tunti':'TE'},
    {'aika':'13:30-14:30', 'tunti':'MA'}
];
var torstai = [
    {'aika':'8:15-9:15', 'tunti':'MA'},
    {'aika':'9:30-10:30', 'tunti':'HI'},
    {'aika':'10:35-11:35', 'tunti':'OPO'},
    {'aika':'11:35-12:15', 'tunti':'RUOKAILU'},
    {'aika':'12:15-13:15', 'tunti':'LI'},
    {'aika':'13:30-14:30', 'tunti':'LI'}
];
var perjantai = [
    {'aika':'8:15-9:15', 'tunti':'MA'},
    {'aika':'9:30-10:30', 'tunti':'HI'},
    {'aika':'10:35-11:35', 'tunti':'FY'},
    {'aika':'11:35-12:15', 'tunti':'RUOKAILU'},
    {'aika':'12:15-13:15', 'tunti':'ÄI'},
    {'aika':'13:30-14:30', 'tunti':'TE'}
];
var lauantai = [
    {'aika':'-', 'tunti': 'KOODAUS'}
];
var sunnuntai = [
    {'aika':'-', 'tunti': 'KOODAUS'}
];

var päivät = ['Maanantai', 'Tiistai', 'Keskiviikko', 'Torstai', 'Perjantai', 'Lauantai', 'Sunnuntai'];

function lukkari() {
    let text = "";
    let i = 1;
    
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
        text += '<li>' + päiväArray[i].aika +'<br/>' + päiväArray[i].tunti + "</li>";
    }
    return text;
}

function getClass(i) {
    //console.log(i)
    var aika = new Date();
    var luokka = 'redC';
    if (getIndexOfDay(i) === aika.getDay()) {
        luokka = 'greenC';
    }
    return luokka;
}
function getIndexOfDay(i) {    
       return i === päivät.length ? 0 : i;
          
}
