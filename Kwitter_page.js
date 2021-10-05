var firebaseConfig = {
    apiKey: "AIzaSyC-hEdVgKi8-seJirWhh2eyPoU_4SI-c8c",
    authDomain: "lets-chat-web-app-5d153.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-5d153-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-5d153",
    storageBucket: "lets-chat-web-app-5d153.appspot.com",
    messagingSenderId: "96138797232",
    appId: "1:96138797232:web:2a635a3513556cbc521b75"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;



 } });  }); }
getData();

function send()
{
 msg = document.getElementById("msg").value;
 firebase.database().ref("room_name").push({
       Name:user_name,
       Message:msg,
       Like:0
 });
 document.getElementById("msg").value = "";
}