src="https://www.gstatic.com/firebasejs/4.8.1/firebase.js"></script>
// Initialize Firebase
var config = {
    apiKey: "AIzaSyAB21yV8f5lGoTOUzbTEQUdbE5YSHyJV2Q",
    authDomain: "firestore-9adfd.firebaseapp.com",
    databaseURL: "https://firestore-9adfd.firebaseio.com",
    projectId: "firestore-9adfd",
    storageBucket: "firestore-9adfd.appspot.com",
    messagingSenderId: "11685326624"
};
firebase.initializeApp(config);






firebase.initializeApp({
    apiKey: '### FIREBASE API KEY ###',
    authDomain: '### FIREBASE AUTH DOMAIN ###',
    projectId: '### CLOUD FIRESTORE PROJECT ID ###'
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();