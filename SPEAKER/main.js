firebase.initializeApp({
    apiKey: "AIzaSyD2S0luaU72ILkrGlWAGD23oM2AHntoje4",
    authDomain: "speaker-4aed6.firebaseapp.com",
    projectId: "speaker-4aed6"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();


var inputContent    = document.querySelector('#inputContent');
var postContent     = document.querySelector('.postButton');
var inputName       = document.querySelector('#inputName');
var contentWrapper  = document.querySelector('.contentwrapper');


    postContent.addEventListener('click', function () {
             var today = new Date();
            db.collection("speakerPosts").add({
                user:       inputName.value,
                content:    inputContent.value,
                time:       today
            })
            alert("Upload complete")
    });


    var ref = db.collection("speakerPosts");

    ref.onSnapshot(function (data) {
            contentWrapper.innerHTML = "";
            var document = data.docs;
            for(var x in document){
                contentWrapper.innerHTML += "<div class='postWrapper'> " + "<div class='usertime'>"+ document[x].data().user + " " + document[x].data().time + "</div>" + "<div class='content'>"+ document[x].data().content + "</div>"+ "</div>";
            }
    });










function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =
        h + ":" + m;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}



