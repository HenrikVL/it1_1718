firebase.initializeApp({
    apiKey: "AIzaSyB7MIJvcbPoewawiR3kWeqriTsJB87x8qo",
    authDomain: "mitt-andre-prosjekt.firebaseapp.com",
    projectId: "mitt-andre-prosjekt"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

var tittelE = document.querySelector('.tittel');
var tekstE = document.querySelector('.tekst');
var knappE = document.querySelector('.knapp');

knappE.addEventListener('click', function () {
    db.collection("mappe").add({
        tittel: tittelE.value,
        tekst: tekstE.value.
    });
    tittelE.value = "";
    tekstE.value = ""
});

