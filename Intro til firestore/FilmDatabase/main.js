firebase.initializeApp({
    apiKey: "AIzaSyAB21yV8f5lGoTOUzbTEQUdbE5YSHyJV2Q",
    authDomain: "firestore-9adfd.firebaseapp.com",
    databaseURL: "https://firestore-9adfd.firebaseio.com",
    projectId: "firestore-9adfd",
    storageBucket: "firestore-9adfd.appspot.com",
    messagingSenderId: "11685326624"
});

//Initialize Cloud Firestore Through Firebase
var db = firebase.firestore();

var fjellnavnInput = document.querySelector('.fjellnavn');
var mohInput = document.querySelector('.moh');
var bildeInput = document.querySelector('.fjellbilde');
var sendKnapp = document.querySelector('.send');

sendKnapp.addEventListener('click', function () {

    var storageRef = firebase.storage().ref('it-1/fjell');
    var bilde = bildeInput.files[0];
    var uploadTask = storageRef.child(bilde.name).put(bilde);

    uploadTask.on('state changed',
        function () {},
        function (error) {console.log(error)},
        function () {
            db.collection('fjell').add({
                navn: fjellnavnInput.value,
                moh: mohInput.value*1,
                bilde: uploadTask.snapshot.downloadURL
            });
        }
    );

    /*
    db.collection('fjell').add({
       fjellnavn:fjellnavnInput.value,
       moh: mohInput.value*1,
       fjellbilde: bildeInput.files[0].name

   });
   */
});



db.collection('fjell').add({
    navn: "Vengetind",
    moh: 1852,
    bilde: "",
});
