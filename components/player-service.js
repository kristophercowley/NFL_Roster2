app.factory('PlayerFactory', [function($firebaseArray) {
    var db = new Firebase("https://mynflroster.firebaseio.com/");
    var dbBackup = db.child("backup");
    var dbTeam = db.child("myTeam");
    
    return {
        dbBackup: dbBackup,
        dbTeam: dbTeam
    }
}])



// Start Firebase
// var db = new Firebase("https://mynflroster.firebaseio.com/");
// All filtered players get backed up here
// var dbBackup = db.child("backup");
// vm.backup = new $firebaseArray(dbBackup);
// my Team goes here
// var dbTeam = db.child("myTeam");
// vm.myTeam = new $firebaseArray(dbTeam);
    // End firebase