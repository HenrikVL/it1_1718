firebase.initializeApp({
    apiKey: "AIzaSyBe2NMHpFn1mdv9qQ9Su4xPNyh4bStpbYA",
    authDomain: "skjema-e30fe.firebaseapp.com",
    projectId: "skjema-e30fe"
});

// Initialize Cloud Firestore through Firebase
let db = firebase.firestore();

let iName =             document.querySelector('#inputName');
let iSport =            document.querySelector('#inputSport');
let iMedals =           document.querySelector('#inputMedals');
let outputProfile =     document.querySelector('#list');
let regProfileBtn =     document.querySelector('#registerProfileBtn');


db.collection("profiler");


    regProfileBtn.addEventListener('click', function () {
       db.collection("profiler").add({
           name:    iName.value,
           sport:   iSport.value,
           medals:  iMedals.value*1
           });
        alert("opplasting fullført")
    });

let profiler = db.collection("profiler");

profiler.onSnapshot(function (data) {
    outputProfile.innerHTML = "";
    let document = data.docs;
    for(let x in document){
        outputProfile.innerHTML +=
            "<tr>" +
            "<td>" + document[x].data().name + "</td>" +
            "<td>" + document[x].data().sport + "</td>" +
            "<td>" + document[x].data().medals + "</td>" +
            "</tr>";
    }
});

let srtName = document.querySelector("#srtNameTitle");

srtName.onclick = function(){

    let orderQueryName = profiler.orderBy("name", "asc");

    orderQueryName.onSnapshot(function(data){
        outputProfile.innerHTML = "";
        let objekt = data.docs;
        for(let x in objekt)
            outputProfile.innerHTML +=
                "<tr>" +
                "<td>" + objekt[x].data().name + "</td>" +
                "<td>" + objekt[x].data().sport + "</td>" +
                "<td>" + objekt[x].data().medals + "</td>" +
                "</tr>";
    });
};

let srtMedal = document.querySelector("#srtMedalTitle");

srtMedal.onclick = function(){
    let orderQueryMedals = profiler.orderBy("medals", "desc");
    orderQueryMedals.onSnapshot(function(data){
        outputProfile.innerHTML = "";
        let objekt = data.docs;
        for(let x in objekt)
            outputProfile.innerHTML +=
                "<tr>" +
                "<td>" + objekt[x].data().name + "</td>" +
                "<td>" + objekt[x].data().sport + "</td>" +
                "<td>" + objekt[x].data().medals + "</td>" +
                "</tr>";
    });
};











    //MODAL.MODAL.MODAL.MODAL.

// Get the modal
let modal = document.getElementById('myModal');

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

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
















