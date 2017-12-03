firebase.initializeApp({
    apiKey: "AIzaSyB7MIJvcbPoewawiR3kWeqriTsJB87x8qo",
    authDomain: "mitt-andre-prosjekt.firebaseapp.com",
    projectId: "mitt-andre-prosjekt"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

var brukernavnE = document.querySelector('.brukernavn');
var passordE = document.querySelector('.passord');
var eMailE = document.querySelector('.eMail');
var knappE = document.querySelector('.knapp');
var listeE = document.querySelector('.liste');

knappE.addEventListener('click', function () {
    db.collection("userinfo").add({
        brukernavn: brukernavnE.value,
        passord: passordE.value,
        email: eMailE.value

    });
    brukernavnE.value = "";
    passordE.value = "";
    eMailE.value = "";
});

var ref = db.collection("userinfo");

ref.onSnapshot(function (data) {
    listeE.innerHTML = "";
    liste1E.innerHTML = "";
    liste2E.innerHTML = "";
    var dokument = data.docs;
    var dokument1 = data.docs;
    var dokument2 = data.docs;
    for(var x in dokument){
        listeE.innerHTML += "<li>" + dokument[x].data().brukernavn + "</li>";
        liste1E.innerHTML += "<li>" + dokument1[x].data().passord + "</li>";
        liste2E.innerHTML += "<li>" + dokument2[x].data().email+ "</li>"

    }

});