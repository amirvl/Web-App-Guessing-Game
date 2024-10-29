
  
  var url = "http://localhost:3000/post";

  var server_namesEasy = [];
  var server_scoresEasy = [];

  var server_namesMed = [];
  var server_scoresMed = [];

  var server_namesHard = [];
  var server_scoresHard = [];
  
  window.onload = function() {

    //Hard
    $.get('http://localhost:3000/getNamesHard', function(names) {
              server_namesHard = names;

              var row = document.getElementById('hard');
              
              for (var i = 0; i < server_namesHard.length; i = i + 1)
              {
                row.innerHTML = row.innerHTML + '<tr id="h' + i + '"><td>' + server_namesHard[i] + '</td></tr>';
              }
    });

    $.get('http://localhost:3000/getScoresHard', function(scores) {
              server_scoresHard = scores;
              
              for (var j = 0; j < server_scoresHard.length; j = j + 1)
              {
                var id = 'h' + j
                var col = document.getElementById(id);
                col.innerHTML = col.innerHTML + '<td>' + server_scoresHard[j] + '</td>';
              }
    });

    //Medium
    $.get('http://localhost:3000/getNamesMed', function(names) {
              server_namesMed = names;

              var row = document.getElementById('medium');
              
              for (var i = 0; i < server_namesMed.length; i = i + 1)
              {
                row.innerHTML = row.innerHTML + '<tr id="m' + i + '"><td>' + server_namesMed[i] + '</td></tr>';
              }
    });

    $.get('http://localhost:3000/getScoresMed', function(scores) {
              server_scoresMed = scores;
              
              for (var j = 0; j < server_scoresMed.length; j = j + 1)
              {
                var id = 'm' + j
                var col = document.getElementById(id);
                col.innerHTML = col.innerHTML + '<td>' + server_scoresMed[j] + '</td>';
              }
    });

    //Easy
    $.get('http://localhost:3000/getNamesEasy', function(names) {
              server_namesEasy = names;

              var row = document.getElementById('easy');
              
              for (var i = 0; i < server_namesEasy.length; i = i + 1)
              {
                row.innerHTML = row.innerHTML + '<tr id="e' + i + '"><td>' + server_namesEasy[i] + '</td></tr>';
              }
    });

    $.get('http://localhost:3000/getScoresEasy', function(scores) {
              server_scoresEasy = scores;
              
              for (var j = 0; j < server_scoresEasy.length; j = j + 1)
              {
                var id = 'e' + j
                var col = document.getElementById(id);
                col.innerHTML = col.innerHTML + '<td>' + server_scoresEasy[j] + '</td>';
              }
    });
   
};

function response(data, status) {
      console.log('Server response:');
      console.log(data);
}
  