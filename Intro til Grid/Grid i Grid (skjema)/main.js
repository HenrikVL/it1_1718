firebase.initializeApp({
    apiKey: "AIzaSyBe2NMHpFn1mdv9qQ9Su4xPNyh4bStpbYA",
    authDomain: "skjema-e30fe.firebaseapp.com",
    projectId: "skjema-e30fe"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

var fornavnInput = document.querySelector('.fornavn');
var etternavnInput = document.querySelector('.etternavn');
var telefonInput = document.querySelector('.telefon')
var epostInput = document.querySelector('.epost');
var sporsmalInput = document.querySelector('.sporsmal')
var sendKnapp = document.querySelector('.send')

sendKnapp.addEventListener('click', function () {

    db.collection ('Info').add({
        fornavn: fornavnInput.value,
        etternavn: etternavnInput.value,
        telefon: telefonInput.value,
        epost: epostInput.email
        sporsmal: sporsmalInput.value
    })
});
