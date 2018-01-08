// Initialize Firebase
var config = {
    apiKey: "AIzaSyA_WlBn6y9RfNYpfKoKFTi1Keo_4k4vjMg",
    authDomain: "julekalender-3e5fb.firebaseapp.com",
    databaseURL: "https://julekalender-3e5fb.firebaseio.com",
    projectId: "julekalender-3e5fb",
    storageBucket: "julekalender-3e5fb.appspot.com",
    messagingSenderId: "281362532318"
};
firebase.initializeApp(config);

var db = firebase.firestore();

/*
for(var lukenummer = 1; lukenummer<=24; lukenummer++){
    db.collection("julekalender").add({
        luke: lukenummer
    })
}
 */

var wrapperE = document.querySelector('.wrapper');

var ref = db.collection('julekalender');



var query = ref.where('luke', '==', 12).where('luke', '==', 24);







query.onSnapshot(function (data) {
    var objekt = data.docs;

    for(var x in objekt){

        wrapperE.innerHTML +=       "<div class='luke'>" +
                                        objekt[x].data().luke +
                                    "</div>";
    }
});

