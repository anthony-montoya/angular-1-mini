angular.module('friendsList').controller('mainCtrl', function($scope) {
    $scope.friends = ["Jack", "Sam", "Chogen", "Emjazz"];

    $scope.addFriend = function(newFriend) {
        $scope.friends.push(newFriend);
        $scope.newFriend = "";
    }
})

