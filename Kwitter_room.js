var firebaseConfig = {
  apiKey: "AIzaSyC-hEdVgKi8-seJirWhh2eyPoU_4SI-c8c",
  authDomain: "lets-chat-web-app-5d153.firebaseapp.com",
  firebaseURL="https://www.gstatic.com/firebasejs/8.7.0/firebase-app.js",
  projectId: "lets-chat-web-app-5d153",
  storageBucket: "lets-chat-web-app-5d153.appspot.com",
  messagingSenderId: "96138797232",
  appId: "1:96138797232:web:2a635a3513556cbc521b75"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
      username = localStorage.getItem("user_name");
      document.getElementById("user_name").innerHTML = "Welcome " + username + "!!!";
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        //Start code
        console.log("room name -" + Room_names);
  
        row = "<div id='+ Room_names' class='room_name' onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
        
        document.getElementById("output").innerHTML = row;
        //End code
        });});}
  getData();
  
  function addRoom() {
   room_name = document.getElementById("room_name").value;
  
   firebase.database().ref("/").child(room_name).update({
     purpose: "adding user"
   });
  
   localStorage.setItem("room_name", room_name );
  
   window.location = "kwitter_page.html";
  }
  
  function redirectToRoomName(name){
    console.log(name);
  
    localStorage.setItem("room_name", name);
  
    window.location = "kwitterpage.html";
  }
  
  function logout()
  {
    localStorage.removeItem("user_name");
  
    localStorage.removeItem("room_name");
  
    window.location = "index.html";
  }