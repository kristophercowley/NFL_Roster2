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
}

var playerCard = '<div class="player-card">' +
					'<button class="btn-xs btn-danger">REMOVE</button><br/>' +
					'<img src="http://s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200/" />' +
					'<br/>' +
					'<span>Name:</span>' +
					'<span id="display-name"></span>' +
					'<br/>' +
					'<span>Position:</span>' +
					'<span id="display-position"></span>' +
					'<br/>' +
					'<span>Number:</span>' +
					'<span id="display-number"></span>' +
					'<br/>' +
					'<ul id="tester"></ul>' +
				'</div>';
				
function addPlayer(e) {
	e.preventDefault;
	var pName = $('#player-name').val();
	//$('#display-name').text(pName);
	var pPosition = $('#player-position').val();
	//$('#display-position').text(pPosition);
	var pNumber = $('#player-number').val();
	//$('#display-number').text(pNumber);
	var temp = new Player(pId, pName, pPosition, pNumber);
	//$('.player-roster').append('div', temp);
	$('.player-roster').append(playerCard);
	roster.push(temp);
	pId++;
	drawPlayer(temp)
}

function drawPlayer(p) {
	$('#display-name').text(p.pName);
	$('#display-position').text(p.pPosition);
	$('#display-number').text(p.pNumber);

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