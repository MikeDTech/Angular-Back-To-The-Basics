(function() {

    var app = angular.module("githubViewer");

    var UserCtrl = function($scope, githubHttpCall, $routeParams) {

        var onUserComplete = function(data) {
            $scope.user = data;

            githubHttpCall.getRepos($scope.user)
                .then(onRepos, onError);
        };

        var onRepos = function(data) {
            $scope.repos = data;
        };

        var onError = function(reason) {
            $scope.error = "Could not fetch the file";
        };

        $scope.username = $routeParams.username; // Grabs Username Based on Url
        $scope.repoSortOrder = '-stargazers_count';

        githubHttpCall.getUser($scope.username).then(onUserComplete, onError);

    };

    app.controller("UserCtrl", UserCtrl); //This is where you register this controller as a module


}());