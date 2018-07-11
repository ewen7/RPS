var roundNumber = 0;
var userS = 0;
var compS = 0;
var rps =['rock','paper','scissors'];
// 0 1 2

function playRound(userThrow){
	var compThrow = Math.floor(Math.random()*3);
	console.log(userThrow + ' vs ' + compThrow);
	if (userThrow == compThrow){
		result="Tie!";
	}
	else if ((userThrow == compThrow + 1) || (userThrow == compThrow - 2)){
		result="You win!";
		userS ++;
	}
	else{
		result="You lost";
		compS ++;
	}
	roundNumber++;
	$('#compS').text(compS);
	$('#userS').text(userS);
	//update table
	$('tbody').append('<tr><td>'+roundNumber+'</td><td>'+rps[userThrow]+'</td><td>'+rps[compThrow]+'</td><td>'+result+'</td><td>'+userS+' vs ' +compS+'</td></tr>');
}

function reset(){
	userS = 0;
	compS = 0;
	roundNumber = 0;
	$('#compS').text(compS);
	$('#userS').text(userS);
	$('tbody').empty();
}

$('#rock').click(function() {
	playRound(0);
});

$('#paper').click(function() {
	playRound(1);
});

$('#scissors').click(function() {
	playRound(2)
});
$('#reset').click(function() {
	reset();
});
