app.controller('PlayerController', function($scope, $firebaseArray) {
    var vm = this;
    $scope.opt = "--this is opt for now";
    $scope.data = "Data not Loaded";
    $scope.rosterView = true;
    // setTimeout(function(){
    //     $scope.rosterView = false;
    // },100)
    vm.proRoster = [];
    vm.display = [];
    vm.myTeam = [];
    // End local
    // Start Firebase
    var db = new Firebase("https://mynflroster.firebaseio.com/");
    // All filtered players get backed up here
    var dbBackup = db.child("backup");
    vm.backup = new $firebaseArray(dbBackup);
    // my Team goes here
    var dbTeam = db.child("myTeam");
    vm.myTeam = new $firebaseArray(dbTeam);
    // End firebase

    //Test obj
    vm.playerObj = {
        fullname: "A",
        photo: "www.boisecodeworks.com/assets/unify/img/bg/32.jpg",
    }
    // vm.myTeam.$add(vm.playerObj)

    //Declares arrays
    // vm.proRoster = [];
    // vm.display = [];
    // vm.myTeam = [];

    //Declare arrays and inserts test teams and positions info
    $scope.teams = ['SF', "KC", "IND", "CHI", "PHI", "ARI", "DET", "GB", "DEN"];
    $scope.positions = ['QB', 'FB', 'RB'];

    // Create Custom Player
    function CreatePlayer() {
        this.fullname = $scope.playerName
        this.position = $scope.playerPosition
        this.id = $scope.playerNumber
        this.pro_status = "Pending";
        this.photo = "http://s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200/";
        this.pro_team = "Prospect";
    }

    // Adds Custom Player To My Team ????
    $scope.addCustomPlayer = function() {
        var tempPlayer = new CreatePlayer();
        vm.myTeam.$add(tempPlayer);

    }



    // Adds player to my team
    vm.addToMyTeam = function(index) {
        // vm.myTeam.push(vm.display[index]);
        vm.proRoster.splice(index, 1);
        vm.display.splice(index, 1);
        console.log(vm.myTeam);
        //working on firebase
        vm.myTeam.$add(vm.display[index])
    }

    //Removes player from vm.display/screen
    vm.remove = function(index) {
        console.log(index)
        // vm.proRoster.splice(index, 1);
        vm.proRoster.push(index);
        // vm.myTeam.splice(index, 1);
        vm.myTeam.$remove(index)
    }

    //Filters players by a chosen team
    vm.getTeam = function(team) {
        console.log("is getTeam working?")
        vm.display = [];
        for (var i = 0; i < vm.proRoster.length; i++) {
            if (team === vm.proRoster[i].pro_team) {
                vm.display.push(vm.proRoster[i]);
            }
        } console.log(vm.display)
    }

    //Filters players by a chosen position
    vm.getPos = function(pos) {
        console.log("is getPos working?")
        vm.display = [];
        for (var i = 0; i < vm.proRoster.length; i++) {
            if (pos === vm.proRoster[i].position) {
                vm.display.push(vm.proRoster[i]);
            }
        } console.log(vm.display)
    }

    //Finds all team tags and pushes to array
    vm.popTeams = function(array) {
        for (var i = 0; i < array.length; i++) {
            if ($scope.teams.indexOf(array[i].pro_team) == -1)
                $scope.teams.push(array[i].pro_team);
        }
    }
    //vm.popTeams(vm.proRoster);

    //Finds all position tags and pushes to array
    vm.popPos = function(array) {
        for (var i = 0; i < array.length; i++) {
            if ($scope.positions.indexOf(array[i].position) == -1)
                $scope.positions.push(array[i].position);
        }
    }

    //Pulls players from api and pushes them to proRoster		
    vm.drawPlayers = function(player) {
        for (var i = 0; i < 1000; i++) {
            var temp = {}
            if (player[i].pro_status === "A" && player[i].photo !== "https://auth.cbssports.com/images/players/unknown-player-170x170.png") {
                temp.fullname = player[i].fullname,
                    temp.photo = player[i].photo,
                    temp.pro_status = player[i].pro_status,
                    temp.pro_team = player[i].pro_team,
                    temp.id = player[i].id,
                    temp.position = player[i].position
                    vm.proRoster.push(temp),
                    // sends angular fire a copy
                    // vm.backup.$add(temp),
                    // end copy
                    vm.popTeams(vm.proRoster),
                    vm.popPos(vm.proRoster)
            }
        }
        console.log(vm.proRoster)
    }


    vm.requestor = function() {
        $scope.data = "Loading Data..... ";
        console.log("request sent");
        vm.url = "http://bcw-getter.herokuapp.com/?url=";
        vm.url2 = "http://api.cbssports.com/fantasy/players/list?version=3.0&SPORT=football&response_format=json";
        vm.apiUrl = vm.url + encodeURIComponent(vm.url2);
        $.get(vm.apiUrl).success(function(res) {
            vm.resToObj = JSON.parse(res);
            vm.liveRoster = vm.resToObj.body.players;
            console.log(vm.liveRoster);
            vm.drawPlayers(vm.liveRoster);
            $scope.data = "Data Loaded";
            $scope.$apply();

        })
    }
    vm.requestor();

})

