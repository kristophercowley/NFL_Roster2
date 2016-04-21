app.controller('PlayerController', function($scope) {
    var vm = this;
    vm.name = "Testies";
    $scope.opt = "--this is opt for now";
    $scope.data = "Data not Loaded";
    $scope.rosterView = true;
    vm.proRoster = [];
    vm.display = [];
    vm.myTeam = [];
    // End local
    var db = new Firebase("https://mynflroster.firebaseio.com/");
    var dbTeam = db.child("team");

    var count = 0;
    dbTeam.on("child_added", function(snap) {
        count++;
        console.log("added", snap.key());
    });
    dbTeam.once("value", function(snap) {
        console.log("initial data loaded!", Object.keys(snap.val()).length === count);
    //    console.log()
    });


    dbTeam.on("value", function(snapshot) {
        console.log(snapshot.val());
        vm.myTeam = snapshot.val();
        console.log(vm.myTeam)
    }, function(errorObject) {
        console.log("The read failed: " + errorObject.code);
    });
    // End firebase





    //Test obj
    vm.playerObj = {
        fullname: "A",
        photo: "www.boisecodeworks.com/assets/unify/img/bg/32.jpg",

    }

    //Declares arrays
    // vm.proRoster = [];
    // vm.display = [];
    // vm.myTeam = [];

    //Declare arrays and inserts test teams and positions info
    $scope.teams = ['SF', "KC", "IND", "CHI", "PHI", "ARI", "DET", "GB", "DEN"];
    $scope.positions = ['QB', 'FB', 'RB'];


    // Adds player to my team
    vm.addToMyTeam = function(index) {
        vm.myTeam.push(vm.display[index]);
        vm.proRoster.splice(index, 1);
        vm.display.splice(index, 1);
        console.log(vm.myTeam);
        //working on firebase
        dbTeam.set(vm.myTeam)
    }

    //Removes player from vm.display/screen
    vm.remove = function(index) {
        console.log(index)
        // vm.proRoster.splice(index, 1);
        vm.myTeam.splice(index, 1);
        dbTeam.remove()
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
            console.log(vm.liveRoster)
            vm.drawPlayers(vm.liveRoster);
            $scope.data = "Data Loaded";
            $scope.$apply();

        })
    }
    vm.requestor();

})

