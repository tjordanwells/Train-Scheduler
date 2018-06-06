var config = {
    apiKey: "AIzaSyDynZi3_CMfjVS0fZ6wcsQ-XndzHniYi8E",
    authDomain: "train-scheduler-b50e5.firebaseapp.com",
    databaseURL: "https://train-scheduler-b50e5.firebaseio.com",
    projectId: "train-scheduler-b50e5",
    storageBucket: "",
    messagingSenderId: "962151402190"
  };
firebase.initializeApp(config);

var database = firebase.database();

$("#submit").on("click", function(event) {
    event.preventDefault();
    var trainName = $("#name").val().trim();
    var destination = $("#destination").val().trim();
    var firstTrainTime = $("#first-train-time").val().trim();
    var frequency = $("#frequency").val().trim();

    var newTrain = {
        name: trainName,
        dest: destination,
        time: firstTrainTime,
        freq: frequency
    };

    database.ref().push(newTrain);

    console.log(newTrain.name);
    console.log(newTrain.dest);
    console.log(newTrain.time);
    console.log(newTrain.freq);


    $(".form-control").val("");

});

database.ref().on("child_added", function(childSnapshot, prevChildKey) {
    console.log(childSnapshot.val());

    var trainName = childSnapshot.val().name;
    var destination = childSnapshot.val().dest;
    var firstTrainTime = childSnapshot.val().time;
    var frequency = childSnapshot.val().freq;

    console.log(trainName);
    console.log(destination);
    console.log(firstTrainTime);
    console.log(frequency);

    var localTime = moment().local().format("HH:mm");
    var firstTrainConverted = moment(firstTrainTime, "HH:mm").subtract(1, "years");
    console.log(firstTrainConverted);
    console.log(localTime);

    var difference = moment().diff(moment(firstTrainConverted), "minutes");
    console.log(difference);

    var remainder = difference % frequency;
    console.log(remainder);

    var minutesAway = frequency - remainder;
    console.log(minutesAway);

    var nextArrival = moment().add(minutesAway, "minutes").format("HH:mm");
    console.log(nextArrival);

    $("#schedule").append("<tr><th scope='row'>" + trainName + "</th><td>" + destination + "</td><td>" + 
    frequency + "</td><td>" + nextArrival + "</td><td>" + minutesAway + "</td><tr>");



});




