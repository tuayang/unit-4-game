$(document).ready(function() {

	// random array
	var random = [];

	for (var r = 19; r < 121; r++) {
		random.push(r);
	}
	var crystals = [];

    // for loop
	for (var b = 1; b < 13; b++) {
		crystals.push(b);
	}

	// open selected variables
	var randNum; 
	var crystalNum = []; 
    var c1;
	var c2;
	var c3;
	var c4;
    var totalScore = 0; // score
	var wins = 0;
	var losses = 0;

    // Begining of Functions

	function pickRandNum(arr) {
		var i = arr[Math.floor(Math.random() * arr.length)];
		randNum = i;
		$("#randomNumber").html(randNum);
	} 

	// generating random numbers for crystals when picked

	function pickRandCrystal(arr) {
		for (var y = 0; y < 4; y++){
            var a = arr[Math.floor(Math.random() * arr.length)];
            crystalNum.push(a);
		}
    }
    
    function crystalValues(arr) {

	// random value generated for crystals 
		for (i = 0; i < arr.length; i++) {
		$("#button-" + (i+1)).attr("value", arr[i]);
		}
            c1 = arr[0];
            c2 = arr[1];
            c3 = arr[2];
            c4 = arr[3];
	} 

    // crystal values

	pickRandNum(random); 
	pickRandCrystal(crystals); 
    crystalValues(crystalNum);
    
    // for crystal 1
		$("#button-1").on("click", function() {
			totalScore += c1;
			$("#totalNumber").html(totalScore);
		});
    // for crystal 2
		$("#button-2").on("click", function() {
			totalScore += c2;
			$("#totalNumber").html(totalScore);
		});
    // for crystal 3
		$("#button-3").on("click", function() {
			totalScore += c3;
			$("#totalNumber").html(totalScore);
		});
    // for crystal 4
		$("#button-4").on("click", function() {
			totalScore += c4;
			$("#totalNumber").html(totalScore);
		});
    // for random click
	    $("button").on("click", function() {

    //  after win or lose before reset and alert 
        if (totalScore == randNum) {
			wins++;
			console.log(totalScore);
			$("#totalNumber").html(totalScore);
            $("#wins").html("Wins: " + wins);
            setTimeout(function() {gameReset("you win")}, 200);
        } else if (totalScore > randNum){
			losses++;
			$("#totalNumber").html(totalScore);
			$("#losses").html("Losses: " + losses);
			setTimeout(function() {gameReset('you lose')}, 200);
        }
        
 // to reset the game 
    function gameReset(i) {
        crystalNum = [];
        pickRandNum(random);
        pickRandCrystal(crystals);
        crystalValues(crystalNum);

        totalScore = 0;
        $("#totalNumber").html(totalScore);

        alert(i);
        } 
	});

}); 