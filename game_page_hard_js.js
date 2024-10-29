var deck_order = []; //randomized order
var guess_made = []; //array of current round guesses
var guess_counter = 0; //counts number of guess made
var card_count = 0; //current number of cards

var url = "http://localhost:3000/post";

function randomize_order()
{
//Precondition: 
//Postcondition: Generate an array (deck_order) with unique numbers 1-52 in a random order
    while (deck_order.length < 52)
    {
        //Generate random number 1-52
        var card = Math.floor(Math.random() * 52) + 1;

        //If random number 'card' is not in array already re-randomize new number
        if (deck_order.indexOf(card) == -1)
        {
            deck_order.push(card);
        }

    }
    card_count = 0;
    document.getElementById("randomize").innerHTML = deck_order;
}

function add_card()
{
//Precondition: Must have a defined 'deck_order' array
//Postcondition: Adds next card which corresponds to the next number in 'deck_order' array
    
    //run this function first, if a new container needs to be added
    add_container();

    //8 container intializations
    const new_card_container_1 = document.getElementById("container1");
    const new_card_container_2 = document.getElementById("container2");
    const new_card_container_3 = document.getElementById("container3");
    const new_card_container_4 = document.getElementById("container4");
    const new_card_container_5 = document.getElementById("container5");
    const new_card_container_6 = document.getElementById("container6");
    const new_card_container_7 = document.getElementById("container7");
    
    //if there are no cards added yet, randomize order first
    if (card_count == 0)
    {
        randomize_order();
    }

    var test = document.getElementById("test");
    test.innerHTML = 'a' + card_count;


    //Add the next card to corresponding container (8 cards for each container, 8x7=56)
    //First container
    if (card_count < 8)
    {
        //add a new image inside div with id and image equal to its file name
        //increase 'card_count' by one to indicate current cards being displayed
        var div = "<div class='card' id='a" + deck_order[card_count] + "'><img src='deck_images/" + deck_order[card_count] + ".png'></div>";
        new_card_container_1.innerHTML = new_card_container_1.innerHTML + div;
        card_count = card_count + 1;
    }
    //second container
    else if (card_count >= 8 && card_count < 16 )
    {
        var div = "<div class='card' id='a" + deck_order[card_count] + "'><img src='deck_images/" + deck_order[card_count] + ".png'></div>";
        new_card_container_2.innerHTML = new_card_container_2.innerHTML + div;
        card_count = card_count + 1;
    }
    //third container
    else if (card_count >= 16 && card_count < 24 )
    {
        var div = "<div class='card' id='a" + deck_order[card_count] + "'><img src='deck_images/" + deck_order[card_count] + ".png'></div>";
        new_card_container_3.innerHTML = new_card_container_3.innerHTML + div;
        card_count = card_count + 1;
    }
    //fourth container
    else if (card_count >= 24 && card_count < 32 )
    {
        var div = "<div class='card' id='a" + deck_order[card_count] + "'><img src='deck_images/" + deck_order[card_count] + ".png'></div>";
        new_card_container_4.innerHTML = new_card_container_4.innerHTML + div;
        card_count = card_count + 1;
    }
    //fifth container
    else if (card_count >= 32 && card_count < 40 )
    {
        var div = "<div class='card' id='a" + deck_order[card_count] + "'><img src='deck_images/" + deck_order[card_count] + ".png'></div>";
        new_card_container_5.innerHTML = new_card_container_5.innerHTML + div;
        card_count = card_count + 1;
    }
    //sixth container
    else if (card_count >= 40 && card_count < 48 )
    {
        var div = "<div class='card' id='a" + deck_order[card_count] + "'><img src='deck_images/" + deck_order[card_count] + ".png'></div>";
        new_card_container_6.innerHTML = new_card_container_6.innerHTML + div;
        card_count = card_count + 1;
    }
    //seventh container
    else if (card_count >= 48 && card_count <= 51)
    {
        var div = "<div class='card' id='a" + deck_order[card_count] + "'><img src='deck_images/" + deck_order[card_count] + ".png'></div>";
        new_card_container_7.innerHTML = new_card_container_7.innerHTML + div;
        card_count = card_count + 1;
    }
    

}

function make_guess(card_id)
{       
//Precondition: card_id is int from 1-52
//Postcondition: Check if the users guess is correct by comparing with deck_order array
    guessed_card(card_id);  
    guess_made[guess_counter] = card_id;
    guess_counter = guess_counter + 1;
    //flip cards face down via function, check guess via function
    flip_card_down();
    check_guess();
    
}

function check_guess()
{
//precondition:
//postcondition: check if the users guess matches the "deck_order"
    var correctness = false;

    if (guess_counter == card_count)
    {
        for (var i = 0; i < card_count; i = i + 1)
        {
            document.getElementById("test").innerHTML = deck_order[i] + 'a' + guess_made[i] ;
            if (guess_made[i] != deck_order[i])
            {
                correctness = false;
                break;
            }
            correctness = true;
        }
        if (correctness == true)
        {
            //useres guess was correct, add new card and update arrays
            alert("correct");
            flip_card_up();
            add_card();
            guess_made = [];
            guess_counter = 0;
            const card_guess_cont = document.getElementById("guesses");
            card_guess_cont.innerHTML = '';
        }
        else
        {
            //Users guess was wrong, reset
            alert("incorrect");
            var name = prompt("please enter your name to keep track of your score");
            var score = parseInt(card_count - 1);

            $.post(url+'?data='+JSON.stringify({
                                        'name':name, //client's identity on the server
                                        'score': score,
                                        'action':'add_score_hard'}),
                response);
            
                alert('Your score is: ' + score);
            flip_card_up();
            location.reload();
            
        }
    }
}

function flip_card_down()
{
//Precondition: card_count does not equal 0
//Postcondition: Change all cards img src to card_back.jpg
    for (var i = 0; i < card_count; i = i + 1)
    {
        var card_id = "a" + deck_order[i];
        document.getElementById(card_id).innerHTML = '<img src="deck_images/card_back.jpg">';
    }
}

function flip_card_up()
{
//Precondition: card_count does not equal 0
//Postcondition: Change all cards img src to its deck_order.png
    for (var i = 0; i < card_count; i = i + 1)
    {
        var card_id = "a" + deck_order[i];
        document.getElementById(card_id).innerHTML = '<img src="deck_images/' + deck_order[i] +'.png">';
    }
}

function add_container()
{
//Precondition: 'add_card()' function must be called
//Postcondition: create a new container in 'parent' container if previous container is at 8 cards

    const parent_div = document.getElementById("parent");

    //Check card count, if next card to added needs a new container
    if(card_count == 7)
    {
        //Add new container with id='containerX', where X is container multiple, to parent div
        var div = "<div class='container2' id='container2'>"
        parent_div.innerHTML = parent_div.innerHTML + div;
    }
    else if(card_count == 16)
    {
        var div = "<div class='container3' id='container3'>"
        parent_div.innerHTML = parent_div.innerHTML + div;
    }
    else if(card_count == 24)
    {
        var div = "<div class='container4' id='container4'>"
        parent_div.innerHTML = parent_div.innerHTML + div;
    }
    else if(card_count == 32)
    {
        var div = "<div class='container5' id='container5'>"
        parent_div.innerHTML = parent_div.innerHTML + div;
    }
    else if(card_count == 40)
    {
        var div = "<d   iv class='container6' id='container6'>"
        parent_div.innerHTML = parent_div.innerHTML + div;
    }
    else if(card_count == 48)
    {
        var div = "<div class='container7' id='container7'>"
        parent_div.innerHTML = parent_div.innerHTML + div;
    }
   
}

//Add card to guesses made div
function guessed_card(card_id)
{
    const card_guess_cont = document.getElementById("guesses");
    var div = "<div class='guessed_card' id='a" + card_id + "'><img src='deck_images/" + card_id + ".png'></div>";
    card_guess_cont.innerHTML = card_guess_cont.innerHTML + div;
}

function response(data, status) {
    console.log('Server response:');
    console.log(data);
}

