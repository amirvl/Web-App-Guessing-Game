const express = require('express');
const app = express();
const port = 3000;

const namesHard = [];
const scoresHard = [];

const namesMed = [];
const scoresMed = [];

const namesEasy = [];
const scoresEasy = [];

app
 .post('/post', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    console.log("New express client");
    console.log("Received: ");
    console.log(JSON.parse(req.query['data']));
    var z = JSON.parse(req.query['data']);

    if (z['action'] == 'add_score_hard')
    {
        check_array_hard(z['name'], z['score'])

        console.log(namesHard);
        console.log(scoresHard);
    }
    else if (z['action'] == 'add_score_med')
    {
        check_array_med(z['name'], z['score'])

        console.log(namesMed);
        console.log(scoresMed);
    }
    else if (z['action'] == 'add_score_easy')
    {
        check_array_easy(z['name'], z['score'])

        console.log(namesEasy);
        console.log(scoresEasy);
    }


    

}).listen(port);
console.log("Server is running! (listening on port " + port + ")");

//Hard
app.get('/getScoresHard', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.send(scoresHard); // Send the names array to the client
});

app.get('/getNamesHard', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.send(namesHard); // Send the names array to the client
});

//Medium
app.get('/getScoresMed', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.send(scoresMed); // Send the scores array to the client
});

app.get('/getNamesMed', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.send(namesMed); // Send the names array to the client
});

//Easy
app.get('/getScoresEasy', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.send(scoresEasy); // Send the scores array to the client
});

app.get('/getNamesEasy', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.send(namesEasy); // Send the names array to the client
});

function check_array_hard(name, score)
{
    if (!namesHard.includes(name))
    {
        namesHard.push(name);
        scoresHard.push(score);
    }
    else
    {
        index = namesHard.indexOf(name);

        if (scoresHard[index] < score)
        {
            scoresHard[index] = score;
        }
    }
    sort_array_hard();
}

function sort_array_hard()
{
    var max = namesHard.length;

    for (var i = 0; i < max; i = i + 1)
    {
        for (var j = 0; j < max - i - 1; j = j + 1)
        {
            if (scoresHard[j] < scoresHard[j+1])
            {
                var temp = scoresHard[j];
                scoresHard[j] = scoresHard[j+1];
                scoresHard[j+1] = temp;

                var temp = namesHard[j];
                namesHard[j] = namesHard[j+1];
                namesHard[j+1] = temp;
            }
        }
    }
}

function check_array_med(name, score)
{
    if (!namesMed.includes(name))
    {
        namesMed.push(name);
        scoresMed.push(score);
    }
    else
    {
        index = namesMed.indexOf(name);

        if (scoresMed[index] < score)
        {
            scoresMed[index] = score;
        }
    }
    sort_array_med();
}

function sort_array_med()
{
    var max = namesMed.length;

    for (var i = 0; i < max; i = i + 1)
    {
        for (var j = 0; j < max - i - 1; j = j + 1)
        {
            if (scoresMed[j] < scoresMed[j+1])
            {
                var temp = scoresMed[j];
                scoresMed[j] = scoresMed[j+1];
                scoresMed[j+1] = temp;

                var temp = namesMed[j];
                namesMed[j] = namesMed[j+1];
                namesMed[j+1] = temp;
            }
        }
    }
}

function check_array_easy(name, score)
{
    if (!namesEasy.includes(name))
    {
        namesEasy.push(name);
        scoresEasy.push(score);
    }
    else
    {
        index = namesEasy.indexOf(name);

        if (scoresEasy[index] < score)
        {
            scoresEasy[index] = score;
        }
    }
    sort_array_easy();
}

function sort_array_easy()
{
    var max = namesMed.length;

    for (var i = 0; i < max; i = i + 1)
    {
        for (var j = 0; j < max - i - 1; j = j + 1)
        {
            if (scoresEasy[j] < scoresEasy[j+1])
            {
                var temp = scoresEasy[j];
                scoresEasy[j] = scoresEasy[j+1];
                scoresEasy[j+1] = temp;

                var temp = namesEasy[j];
                namesEasy[j] = namesEasy[j+1];
                namesEasy[j+1] = temp;
            }
        }
    }
}