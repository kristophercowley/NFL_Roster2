app.controller('PlayerController', function () {
	var vm = this;
	vm.name = "Testies"

	vm.playerObj = {
		fullname: "A",
		photo: "www.boisecodeworks.com/assets/unify/img/bg/32.jpg",

	}
	// vm.createPlayerCard = function (player) {
	// 	var $card = $('<div class="player-card">')
	// 	var $rem = $('<button class="btn btn-danger">remove</button><br/>')
	// 	$rem.click(function () {
	// 		$card.remove();
	// 	})
	// 	$card.append($rem);
	// 	$card.append('<img src="assets/images/oj.jpg"/><br/>');
	// 	$card.append('<span>' + player.name + '</span><br/>');
	// 	$card.append('<span>' + player.pos + '</span><br/>');
	// 	$card.append('<span>' + player.num + '</span><br/>');
	// }
	vm.proRoster = [

	];
	//vm.proRoster.push(vm.playerObj)
			
	//now in draw function
	// vm.PlayerConstructor(player){
	// 	this.fullname = player.fullname,
	// 	this.photo = player.photo,
	// 	vm.proRoster.push(player)
	// }
			
	vm.drawPlayers = function (player) {
		for (var i = 0; i < 25; i++) {
			var temp = {}
			if(player.pro_status !== null){
			temp.fullname = player[i].fullname,
			temp.photo = player[i].photo,
			temp.pro_status = player[i].pro_status,
			temp.pro_team = player[i].pro_team,
			temp.id = player[i].id,
			temp.position = player[i].position
			vm.proRoster.push(temp)
		}
		}
		console.log(vm.proRoster)
	}

	vm.requestor = function () {
        console.log("request sent")
		vm.url = "http://bcw-getter.herokuapp.com/?url=";
		vm.url2 = "http://api.cbssports.com/fantasy/players/list?version=3.0&SPORT=football&response_format=json";
		vm.apiUrl = vm.url + encodeURIComponent(vm.url2);
		$.get(vm.apiUrl).success(function (res) {
			vm.resToObj = JSON.parse(res);
			vm.liveRoster = vm.resToObj.body.players;
			console.log(vm.liveRoster)
			vm.drawPlayers(vm.liveRoster)
		})
	}
	// vm.requestor();

})

