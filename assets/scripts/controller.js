app.controller('PlayerController', function () {
    var vm = this;
    vm.name = "Testies"

    vm.playerObj = {
        fullname: "A",
        photo: "www.boisecodeworks.com/assets/unify/img/bg/32.jpg",

    }

    vm.proRoster = [];
    vm.teamSort = [];
    vm.display = [];

    vm.remove = function (index) {
        console.log(index)
        vm.proRoster.splice(index, 1);
    }

    vm.getTeam = function (team) {
        console.log("is this working?")
        vm.display = [];
        for (var i = 0; i < vm.proRoster.length; i++) {
            if (team === vm.proRoster[i].pro_team) {
                vm.display.push(vm.proRoster[i]);
            }
        } console.log(vm.display)
    }

    vm.getPos = function (pos) {
        console.log("is this working?")
        vm.display = [];
        for (var i = 0; i < vm.proRoster.length; i++) {
            if (pos === vm.proRoster[i].position) {
                vm.display.push(vm.proRoster[i]);
            }
        } console.log(vm.display)
    }

    // vm.getTeam('KC');

    
			
    vm.drawPlayers = function (player) {
        for (var i = 0; i < 1000; i++) {
            var temp = {}
            if (player.pro_status !== null) {
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

