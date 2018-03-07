firebase.initializeApp({
    apiKey: "AIzaSyBe2NMHpFn1mdv9qQ9Su4xPNyh4bStpbYA",
    authDomain: "skjema-e30fe.firebaseapp.com",
    projectId: "skjema-e30fe"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

var iName =             document.querySelector('#inputName');
var iSport =            document.querySelector('#inputSport');
var iMedals =           document.querySelector('#inputMedals');
var outputProfile =     document.querySelector('#list');
var regProfileBtn =     document.querySelector('#registerProfileBtn');

db.collection("profiler");


    regProfileBtn.addEventListener('click', function () {
       db.collection("profiler").add({
           name:    iName.value,
           sport:   iSport.value,
           medals:  iMedals.value
           });
        alert("opplasting fullført")
    });

var profiler = db.collection("profiler");

profiler.onSnapshot(function (data) {
    outputProfile.innerHTML = "";
    var document = data.docs;
    for(var x in document){
        outputProfile.innerHTML += "<tr>" + "<td>" + document[x].data().name + "</td>" + "<td>" + document[x].data().sport + "</td>" + "<td>" + document[x].data().medals + "</td>" + "</tr>";
    }
});






    //MODAL.MODAL.MODAL.MODAL.

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}




