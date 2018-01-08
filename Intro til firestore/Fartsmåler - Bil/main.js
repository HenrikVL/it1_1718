firebase.initializeApp({
    apiKey: "AIzaSyCLSIH_V9hviFHv9pN9lT5bf4BzzdWufsE",
    authDomain: "fartsmaler.firebaseapp.com",
    projectId: "fartsmaler",
    storageBucket: "fartsmaler.appspot.com"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

var personNavnInput = document.querySelector('.personNavn');
var bilNrInput = document.querySelector('.bilNr');
var hastighetInput = document.querySelector('.hastighet');
var datetimeInput = document.querySelector('.datoTid');
var sendKnapp = document.querySelector('.send');

sendKnapp.addEventListener('click', function () {

    db.collection('fart').add({
        navn: personNavnInput.value,
        nummer: bilNrInput.value,
        hastighet: hastighetInput.value,
        tid: datetimeInput.value
    });
});





var mappe = db.collection('fart').orderBy('date', 'desc').limit(20);
var ny = 0;
mappe.onSnapshot(function(data){
    listeE.innerHTML = "";
    var plass = 0;
    var dokumenter = data.docs;
    for(var x in dokumenter){
        plass += 1;
        listeE.innerHTML += "<tr><td>"+ plass +"</td><td>" + dokumenter[x].data().navn + "</td><td> " + dokumenter[x].data().poeng + "</td></tr>"
    }
    ny = dokumenter[0].data().poeng;
    ny.style.bottom = 100* topscore/grense + "%";
    ny.innerHTML = "Rekord - " + dokumenter[0].data().navn + " - " + ny + " dato";