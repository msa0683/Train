
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDvhQiR9APhLKPVZ1ly_WVlBBwMpC-e5M4",
    authDomain: "train-homework-wk4.firebaseapp.com",
    databaseURL: "https://train-homework-wk4.firebaseio.com",
    projectId: "train-homework-wk4",
    storageBucket: "train-homework-wk4.appspot.com",
    messagingSenderId: "203017524589"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  var trainName;
  var destination;
  var firstTrain;
  var frequency;

  $('#submit').on('click', function(event){
    event.preventDefault();

    trainName = $('#train-name').val().trim();
    destination = $('#destination').val().trim();
    firstTrain = $('#first-train').val().trim();
    frequency = $('#frequency').val().trim();

    database.ref().push({
      name: trainName,
      destination: destination,
      train: firstTrain,
      frequency: frequency,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
    })
  });

  database.ref().on('child_added', function(snapshot) {
    
    var sv = snapshot.val();

    console.log(sv.name);
    console.log(sv.destination);
    console.log(sv.train);
    console.log(sv.frequency);

    var row = $('<tr>');
      row.append($('<td>' + sv.name + '<td>'));
      row.append($('<td>' + sv.destination + '<td>'));
      row.append($('<td>' + sv.train + '<td>'));
      row.append($('<td>' + sv.frequency + '<td>'));

      console.log(row);

      $('.table').append(row);

  });






          
