$('form').submit(addPlayer)
 
// $('#addPlayer').click(addPlayer);

var pId = 0;
var roster = [];
//or var roster = {};

function Player(id, name, pos, num) {
	this.id = id;
	this.name = name;
	this.pos = pos;
	this.num = num;	
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
		if(id === roster[i].id){
		return i
		}
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
	drawPlayer();
}	
//Adds players to array and draws to screen		
function addPlayer(e) {
	e.preventDefault();
	var pName = $('#player-name').val();
	var pPosition = $('#player-position').val();
	var pNumber = $('#player-number').val();
	var temp = new Player(pId, pName, pPosition, pNumber);
	roster.push(temp);
	pId++;
	drawPlayer()
}

//Creates player objects/cards 
function drawPlayer() {	
var template = '';
var rosterElem = $('.player-roster');
for (var i = 0; i < roster.length; i++) {
	var playerCard = '<div class="player-card">' +
					'<button onclick="removePlayer('+ roster[i].id +')" class="btn-xs btn-danger">REMOVE</button><br/>' +
					'<img src="http://s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200/" />' +
					'<br/>' +
					'<span class="display-name"><b>'+ roster[i].name + '</b></span>' +
					'<br/>' +
					'<span class="display-position">' + roster[i].pos + '</span>' +
					'<br/>' +
					'<span class="display-number">' + roster[i].num + '</span>' +
					'<br/>' +
				'</div>';
	template += playerCard;
}
	rosterElem.empty();
	rosterElem.append(template)
}
 
//Test cases for api request and drawing
var requestor = function () {
	$.get('http://api.boisecodeworks.com/api/courses')
		.success(function (res) {
			drawCourses(res)

		})
}
//API test stuffs
function drawCourses(courses) { 
	// var out = '';
	for (var i = 0; i < courses.length; i++) {
		$('#courses').append('<li>' + courses[i].name)
		// out = out + ", " + courses[i].name
		 
	}//$('p').text(out);
}