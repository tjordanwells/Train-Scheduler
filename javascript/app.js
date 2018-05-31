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

    $(".form-control").val("");

    var tableRow = $("<tr>");
    var tableName = $("<th scope='row'></th>");
    var tableDestination = $("<td>");
    var tableFrequency = $("<td>");
    var tableNext = $("<td>");
    var tableMinutes = $("<td>");

    $("#schedule").append(tableRow);
    tableRow.append(tableName.text(trainName));
    tableRow.append(tableDestination.text(destination));
    tableRow.append(tableFrequency.text(frequency));
    tableRow.append(tableNext);
    tableRow.append(tableMinutes);

    console.log(trainName);
    console.log(destination);
    console.log(firstTrainTime);
    console.log(frequency);

})




