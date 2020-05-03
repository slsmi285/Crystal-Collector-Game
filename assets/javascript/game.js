//Much like Word Guess Game, instead player will guess numbers.
$(document).ready(() => {
    //Program generates RANDOM number between 19 and 120.
    var randNumber = Math.floor(Math.random() * (120 - 19) + 19);
    $('#randNum').html(randNumber);
    //each crystal has HIDDEN VALUE, RANDOM (1-12)
    var redJ = Math.floor(Math.random() * 12) + 1;
    var purpleJ = Math.floor(Math.random() * 12) + 1;
    var yellowJ = Math.floor(Math.random() * 12) + 1;
    var orangeJ = Math.floor(Math.random() * 12) + 1;

    //Create TOTAL SCORE. Points to INCREMENTAL add.
    //Player clicks on crystal, to display value to  TOTAL SCORE. 
    var wins = 0;
    var losses = 0;

    var totScore = 0;
    $('#totScore').text(totScore);
    //console.log("total score 1")

    //define 
    function win() {
        wins = wins + 1;
        $('#wins').text(wins);
        alert("You Won!!!");
        reset();


    }

    function lose() {
        losses = losses + 1;
        $('#losses').text(losses);
        alert("You Lost ");
        reset();
    }

    $('#red').click(() => {
        totScore = totScore + redJ;
        $('#totScore').text(totScore);
        console.log("total score 1");
        if (totScore === randNumber) {
            win();
            reset();
        } else if (totScore > randNumber) {
            lose();
            reset();
        }

    });

    $('#purple').click(() => {
        totScore = totScore + purpleJ;
        $('#totScore').text(totScore);
        console.log("total score 2");
        if (totScore === randNumber) {
            win();
            reset();
        } else if (totScore > randNumber) {
            lose();
            reset();
        }

    });

    $('#yellow').click(() => {
        totScore = totScore + yellowJ;
        $('#totScore').text(totScore);
        console.log("total score 3");
        if (totScore === randNumber) {
            win();
            reset();
        } else if (totScore > randNumber) {
            lose();
            reset();
        }

    });

    $('#orange').click(() => {
        totScore = totScore + orangeJ;
        $('#totScore').text(totScore);
        console.log("total score 4");
        if (totScore === randNumber) {
            win();
            reset();
        } else if (totScore > randNumber) {
            lose();
            reset();
        }

    });

    //Wins IF total score === (matches) the random number from the start of game.
    //Loses IF total score > the random number.
    //Game RESTARTS if win or loss, and new random number appears. Crystals to have new hidden values. FOR LOOP?
    //User's score will RESET to 0.
    //Overall score...Display WINS and LOSSES, FOR LOOP. 
    //Game automatically goes into another GAME -- Overal score is kept and tracked. But values are refreshed.
    //function reset() {
    //totScore = 0;
    //$('#totScore').text(totScore);
    //console.log("game over");
    //}


    function reset() {

        totScore = 0;
        $('#totScore').text(totScore);
    
        randNumber = Math.floor(Math.random() * (120 - 19) + 19);
        $('#randNum').html(randNumber);
        redJ = Math.floor(Math.random() * 12) + 1;
        purpleJ = Math.floor(Math.random() * 12) + 1;
        yellowJ = Math.floor(Math.random() * 12) + 1;
        orangeJ = Math.floor(Math.random() * 12) + 1;
    }

});