// results for info inputed through add train form

// results shown from add train input

// firebase

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

var database = firebase.database();

//button to add trains to schedule
$('train-input').on("click", function(event){
    event.preventDefault();

    //grab user input
    var train = $('train-input').val().trim();
    var destination = $('destination-input').val().trim();
    var freq = $('freq-input').val().trim();
    var firstTrainTime = $('FTT-input').val().trim();
    var nextArrival = $('NA-input').val().trim();
    var minutesAway = $('MA-input').val().trim();

    //creates a local temp object for holding user input info
    var userInput = {
        train: train,
        destination: destination,
        frequency: freq,
        firstTrainTime = FTT,
        nextArrival: NA,
        minutesAway: MA
    };

    //uploads user input to database
    database.ref().push(userInput);

    //console log
    console.log(userInput.train);
    console.log(userInput.destination);
    console.log(userInput.freq);
    console.log(userInput.FTT);
    console.log(userInput.NA);
    console.log(userInput.MA);

    alert("User Input Added");

    //clear text boxes
    $('train-input').val("");
    $('destination-input').val("");
    $('freq-input').val("");
    $('FTT-input').val("");
    $('NA-input').val("");
    $('MA-input').val("");
});

//create firebase event for user input to database and add a row in html from user's entry
database.ref().on("child_added", function(addChild){
    console.log(addChild.val());

    //store into variables
    var train = addChild.val().train;
    var destination = addChild.val().destination;
    var freq = addChild.val().frequency;
    var FTT = addVhild.val().firstTrainTime;
    var NA = addChild.val().nextArrival;
    var MA = addChild.val().minutesAway;

    //console.log train info
    console.log(train);
    console.log(destination);
    console.log(freq);
    console.log(FTT);
    console.log(NA);
    console.log(MA);

    //prettify?
    // var FTTPretty = moment.unix(FTT).format("HH/mm");

    // Calculate the frequency of trains using hardcore math to calculate the frequency of them coming into the station
    // var freq = moment().diff(moment(freq, "X"), "mins");
    // console.log(freq);

    //calculate next arrival and minutes away
    //arrival time - current time = mins left?
    // moment.js
    Date.now()
    Math.floor(Date.now() / 1000)

    //create a new row
    var newRow = $('tr').append(
        $('td').text(train),
        $('td').text(destination),
        $('td').text(freq),
        $('td').text(nextArrival),
        $('td').text(minutesAway)
    );

    //assumption on frequency of train
    var tFreq = 5;

    //time of first train
    var firstTrain = "5:00";

    //first arrival
    var firstArrival = moment(firstTrain, "HH:mm");
    console.log(firstArrival);

    //current time
    var currentTime = moment();
    console.log("Current Time: " + moment(currentTime).format("HH:mm"));

    //time difference between trains
    var timeDiff = moment().diff(moment(firstArrival), "minutes");
    console.log("Difference In Time: " + timeDiff);

    //time remaining 
    var timeRemaining = timeDiff % tFreq;
    console.log(timeRemaining);

    //minutes until next train
    var timeTillTrain = tFreq - timeRemaining;
    console.log("Minutes Until Train: " + timeTillTrain);

    //next train
    var nextTrain = moment().add(timeTillTrain, "minutes");
    console.log("Arrival Time: " + moment(nextTrain).format("HH:mm"));



    //append new row to table
    $("tbody").append(newRow);
});