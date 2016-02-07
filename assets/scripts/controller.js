app.controller('PlayerController', function ($scope) {
    var vm = this;
    vm.name = "Testies";
    $scope.opt = "--this is opt for now";
    
    //Test obj
    vm.playerObj = {
        fullname: "A",
        photo: "www.boisecodeworks.com/assets/unify/img/bg/32.jpg",

    }
    
    //Declares arrays
    vm.proRoster = [];
    vm.display = [];
    
    //Declare arrays and inserts test teams and positions info
    $scope.teams = ['SF',"KC","IND","CHI","PHI","ARI","DET","GB","DEN"];
    $scope.positions = ['QB','FB','RB'];

    //Removes player from vm.display/screen
    vm.remove = function (index) {
        console.log(index)
        vm.proRoster.splice(index, 1);
    }

    //Filters players by a chosen team
    vm.getTeam = function (team) {
        console.log("is getTeam working?")
       vm.display = [];
        for (var i = 0; i < vm.proRoster.length; i++) {
            if (team === vm.proRoster[i].pro_team) {
                vm.display.push(vm.proRoster[i]);
            }
        } console.log(vm.display)
    }
     //Filters players by a chosen position
    vm.getPos = function (pos) {
        console.log("is getPos working?")
        vm.display = [];
        for (var i = 0; i < vm.proRoster.length; i++) {
            if (pos === vm.proRoster[i].position) {
                vm.display.push(vm.proRoster[i]);
            }
        } console.log(vm.display)
    }
    
    //Finds all team tags and pushes to array
    vm.popTeams = function(array){
        for (var i = 0; i < array.length; i++) {
            if($scope.teams.indexOf(array[i].pro_team) == -1)
            $scope.teams.push(array[i].pro_team);
        }  
    }
    //vm.popTeams(vm.proRoster);
    
    //Finds all position tags and pushes to array
     vm.popPos = function(array){
        for (var i = 0; i < array.length; i++) {
            if($scope.positions.indexOf(array[i].position) == -1)
            $scope.positions.push(array[i].position);
        }  
    }
    
    //Pulls players from api and pushes them to proRoster		
    vm.drawPlayers = function (player) {
        for (var i = 0; i < 1000; i++) {
            var temp = {}
            if (player[i].pro_status === "A") {
                temp.fullname = player[i].fullname,
                temp.photo = player[i].photo,
                temp.pro_status = player[i].pro_status,
                temp.pro_team = player[i].pro_team,
                temp.id = player[i].id,
                temp.position = player[i].position
                vm.proRoster.push(temp),
                vm.popTeams(vm.proRoster),
                vm.popPos(vm.proRoster)
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

