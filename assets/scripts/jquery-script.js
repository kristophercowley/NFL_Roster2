// $('form').submit(function(e){
// 	e.preventDefault();
// })
// $('form').submit(addPlayer)

// $('#addPlayer').click(addPlayer);

// var pId = 0;
// var roster = [];
//or var roster = {};

// function Player(id, name, pos, num) {
// 	this.id = id;
// 	this.name = name;
// 	this.pos = pos;
// 	this.num = num;
// }

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
// function getIndex(id) {
// 	for (var i = 0; i < roster.length; i++) {
// 		if (id === roster[i].id) {
// 			return i
// 		}
// 	}
// 	return -1;
// }

//Remove player
// function removePlayer(id) {
// 	var playerIndex = getIndex(id);
// 	if (playerIndex === -1) {
// 		return { error: "Player does not exist at this index" };
// 	}
// 	roster.splice(playerIndex, 1);
// 	drawPlayer();
// }	
//Adds players to array and draws to screen		
// function addPlayer(e) {
// 	e.preventDefault();
// 	var pName = $('#player-name').val();
// 	var pPosition = $('#player-position').val();
// 	var pNumber = $('#player-number').val();
// 	var temp = new Player(pId, pName, pPosition, pNumber);
// 	roster.push(temp);
// 	pId++;
// 	drawPlayer()
// }

//Creates player objects/cards 
// function drawPlayer() {
// 	var template = '';
// 	var rosterElem = $('.player-roster');
// 	for (var i = 0; i < roster.length; i++) {
// 		var playerCard = '<div class="player-card">' +
// 			'<button onclick="removePlayer(' + roster[i].id + ')" class="btn-xs btn-danger">REMOVE</button><br/>' +
// 			'<img src="assets/images/oj.jpg" />' +
// 			'<br/>' +
// 			'<span class="display-name"><b>' + roster[i].name + '</b></span>' +
// 			'<br/>' +
// 			'<span class="display-position">' + roster[i].pos + '</span>' +
// 			'<br/>' +
// 			'<span class="display-number">' + roster[i].num + '</span>' +
// 			'<br/>' +
// 			'</div>';
// 		template += playerCard;
// 	}
// 	rosterElem.empty();
// 	rosterElem.append(template)
// }



//jquery card test
// var playerObj = {
// 	name: "A",
// 	pos: "Badass",
// 	num: 333
// }
// function createPlayerCard(player){ 
// var $card = $('<div class="player-card">')
// var $rem = $('<button class="btn btn-danger">remove</button><br/>')
// 	$rem.click(function(){
// 	$card.remove();
// 	})
// $card.append($rem);
// $card.append('<img src="assets/images/oj.jpg"/><br/>');
// $card.append('<span>'+ player.name +'</span><br/>');
// $card.append('<span>'+ player.pos +'</span><br/>');
// $card.append('<span>'+ player.num +'</span><br/>');

// $('.player-roster').append($card);
// }
// createPlayerCard(playerObj);





//Test cases for api request and drawing
// var requestor = function () {
// 	$.get('http://api.boisecodeworks.com/api/players')
// 		.success(function (res) {
// 			drawPlayers(res)

// 		})
// }
// //API test stuffs
// function drawPlayers(players) { 
// 	// var out = '';
// 	for (var i = 0; i < players.length; i++) {
// 		$('#players').append('<li>' + players[i].name)
// 		// out = out + ", " + players[i].name
		 
// 	}//$('p').text(out);
// }






//api from store cart
// var requestor = function(){
//   var url = "http://bcw-getter.herokuapp.com/?url=";
//      var url2 = "http://api.cbssports.com/fantasy/players/list?version=3.0&SPORT=football&response_format=json";
//      var apiUrl = url + encodeURIComponent(url2);
//      $.get(apiUrl).success(function(res){
//              var resToObj = JSON.parse(res);
//              var liveRoster = resToObj.body.players;
//              drawPlayers(liveRoster)
//          })
// }
 
// function drawPlayers(players){
//      for(var i = 0; i < 100; i++){
//          $('#players').append('<li>' + players[i].fullname + '<img src="'+players[i].photo+'"/></li>');
//      }
// }

// requestor();