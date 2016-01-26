$('#addPlayer').click(addPlayer);

function addPlayer(){
	var pName = $('#player-name').val();
	$('#display-name').text(pName);
	var pPosition = $('#player-position').val();
	$('#display-position').text(pPosition);
	var pNumber = $('#player-number').val();
	$('#display-number').text(pNumber);
}

function Player(name,pos,num){
	this.name = name;
	this.pos = pos;
	this.num = num;
}