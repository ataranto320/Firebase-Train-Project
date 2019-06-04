// results for info inputed through add train form

// results shown from add train input

// firebase
<script src="https://www.gstatic.com/firebasejs/6.1.0/firebase-app.js"></script>

<script src="/__/firebase/init.js"></script>

    var firebaseConfig = {
    apiKey: "AIzaSyAVD7LjAlxiisN6OHobVpuvNjoYMy5wQOM",
    authDomain: "train-schedule-82d22.firebaseapp.com",
    databaseURL: "https://train-schedule-82d22.firebaseio.com",
    projectId: "train-schedule-82d22",
    storageBucket: "train-schedule-82d22.appspot.com",
    messagingSenderId: "680763801753",
    appId: "1:680763801753:web:6e69a62cd17c9608"
  };

firebase.initializeApp(firebaseConfig);

var database = firesbase.database();

// button to add trains to schedule
$('train-input').on("click", function(event){
    event.preventDefault();

    // grab user input
    var train = $('train-input').val().trim();
    var destination = $('destination-input').val().trim();
    var freq = $('freq-input').val().trim();
    var firstTrainTime = $('FTT-input').val().trim();

    //creates a local temp object for holding user input info
    var userInput = {
        train: train,
        destination: destination,
        frequency: freq,
        firstTrainTime = FTT
    };

    
})