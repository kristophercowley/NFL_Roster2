// $('form').submit(function(event){
//  event.preventDefault;
//  })
 
$('#addPlayer').click(addPlayer);

var pId = 0;
var roster = [];
//or var roster = {};

function Player(id, name, pos, num) {
	this.id = id;
	this.name = name;
	this.pos = pos;
	this.num = num;
	// this.removePlayer = function(){
	// 	$('player').remove(this.id)
	// }
}

// var playerCard = '<div class="player-card">' +
// 					'<button onclick="removePlayer()" class="btn-xs btn-danger">REMOVE</button><br/>' +
// 					'<img src="http://s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200/" />' +
// 					'<br/>' +
// 					'<span>Name:</span>' +
// 					'<span id="display-name">'+ roster[i].name + '</span>' +
// 					'<br/>' +
// 					'<span>Position:</span>' +
// 					'<span id="display-position">' + roster[i].position + '</span>' +
// 					'<br/>' +
// 					'<span>Number:</span>' +
// 					'<span id="display-number">' + roster[i].number + '</span>' +
// 					'<br/>' +
// 					'<ul id="tester"></ul>' +
// 				'</div>';

//Find index of player by id
function getIndex(id){
	for(var i = 0; i < roster.length;i++){
		if(id === roster[i].id);
		return i;
	}
	return -1;
}

//Remove player
function removePlayer(id){
	var playerIndex = getIndex(id);	
	if(playerIndex === -1){
		return {error: "Player does not exist at this index"};
	}
	roster.splice(playerIndex, 1);
}	
			
function addPlayer(e) {
	e.preventDefault;
	var pName = $('#player-name').val();
	//$('#display-name').text(pName);
	var pPosition = $('#player-position').val();
	//$('#display-position').text(pPosition);
	var pNumber = $('#player-number').val();
	//$('#display-number').text(pNumber);
	var temp = new Player(pId, pName, pPosition, pNumber);
	//$('.player-roster').append(playerCard);
	roster.push(temp);
	pId++;
	drawPlayer()
}

function drawPlayer() {
	// $('#display-name').text(p.pName);
	// $('#display-position').text(p.pPosition);
	// $('#display-number').text(p.pNumber);	
var template = '';
var rosterElem = $('.player-roster');
for (var i = 0; i < roster.length; i++) {
	var playerCard = '<div class="player-card">' +
					'<button onclick="removePlayer()" class="btn-xs btn-danger">REMOVE</button><br/>' +
					'<img src="http://s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200/" />' +
					'<br/>' +
					'<span>Name:</span>' +
					'<span id="display-name">'+ roster[i].name + '</span>' +
					'<br/>' +
					'<span>Position:</span>' +
					'<span id="display-position">' + roster[i].pos + '</span>' +
					'<br/>' +
					'<span>Number:</span>' +
					'<span id="display-number">' + roster[i].num + '</span>' +
					'<br/>' +
					'<ul id="tester"></ul>' +
				'</div>';
	template += playerCard;
	rosterElem.empty();
	rosterElem.append(template)
}
}




//event.preventDefault take away default behavior
// $('form').submit(function(){
//  event.preventDefault;
 
//  })
 
 
//Test cases for api request and drawing
var requestor = function () {
	$.get('http://api.boisecodeworks.com/api/courses')
		.success(function (res) {
			drawCourses(res)

		})
}

function drawCourses(courses) { 
	// var out = '';
	for (var i = 0; i < courses.length; i++) {
		$('#courses').append('<li>' + courses[i].name)
		// out = out + ", " + courses[i].name
		 
	}//$('p').text(out);
}