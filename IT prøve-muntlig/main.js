firebase.initializeApp({
    apiKey: "AIzaSyBe2NMHpFn1mdv9qQ9Su4xPNyh4bStpbYA",
    authDomain: "skjema-e30fe.firebaseapp.com",
    projectId: "skjema-e30fe"
});

// Initialize Cloud Firestore through Firebase
let db = firebase.firestore();



//Define variables
let iName =             document.querySelector('#inputName');
let iSport =            document.querySelector('#inputSport');
let iMedals =           document.querySelector('#inputMedals');
let iPicture =          document.querySelector('#inputPicture');
let iAge =              document.querySelector('#inputAge');
let iHeight =           document.querySelector('#inputHeight');
let iWeight =           document.querySelector('#inputWeight')
let outputProfile =     document.querySelector('#list');
let regProfileBtn =     document.querySelector('#registerProfileBtn');
let profiler =          db.collection("profiler");





//Create a folder in which to store data (profiles og athletes)
db.collection("profiler");

    regProfileBtn.addEventListener('click', function () {
       db.collection("profiler").add({
           name:    iName.value,
           sport:   iSport.value,
           medals:  iMedals.value*1,
           picture: iPicture.value,
           age:     iAge.value*1,
           height:  iHeight.value*1,
           weight:  iWeight.value*1,
           });
        alert("opplasting fullført")
    });


//Sort name alphabetically from the start (ascending A-Z)
let profilerOA = profiler.orderBy("name", "asc");
profilerOA.onSnapshot(function (data) {
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




//Sort names alphabetically
let nameOrderAsc = document.querySelector('#srtName');
let select = "";
nameOrderAsc.addEventListener('change', function () {
    select = nameOrderAsc.value;
    if(select == "AZ"){
        profilerOA.onSnapshot(function (data) {
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
        })
    } else{
        let profilerOD = profiler.orderBy("name", "desc");
        profilerOD.onSnapshot(function (data) {
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
        })
    }
});











//Sort medals by high-low/low-high
let medalOrderAsc = document.querySelector('#srtMedal');
let selectMedal = "";
medalOrderAsc.addEventListener('change', function () {
    selectMedal = medalOrderAsc.value;
    if(selectMedal == "HL"){
        let medalOD = profiler.orderBy("medals", "desc");
        medalOD.onSnapshot(function (data) {
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
        })
    } else{
        let medalOA = profiler.orderBy("medals", "asc");
        medalOA.onSnapshot(function (data) {
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
        })
    }
});









//Filtrate different sports (category)
let catInput = document.querySelector('#filterSport');
let search = "";
catInput.addEventListener('change', function () {
        let database = db.collection('profiler');
        search = catInput.value;
        if(search == "x"){
            let profilerOA = profiler.orderBy("name", "asc");
            profilerOA.onSnapshot(function (data) {
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
        }else{
            let query = database.where('sport', '==', search);
            outputProfile.innerHTML = "";
            query.onSnapshot(function (data) {
                let objekt = data.docs;
                for(let x in objekt){
                    let doc = objekt[x].data();
                    outputProfile.innerHTML +=
                        "<tr>" +
                        "<td>" + doc.name + "</td>" +
                        "<td>" + doc.sport + "</td>" +
                        "<td>" + doc.medals + "</td>" +
                        "</tr>";
                }
            });
        }

});




//Search for profiles
function myFunction() {
    let input, filter, table, tr, td, i;
    input = document.getElementById("nameSrc");
    filter = input.value.toUpperCase();
    table = document.getElementById("list");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}



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
















