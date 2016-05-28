(function () {

var app = angular.module("githubViewer");

var RepoController = function($scope, githubHttpCallRepos, $routeParams) {

    var onReposComplete = function(data) {
        $scope.repoNames = data;

        githubHttpCallRepos.getRepos($scope.repoNames)
            .then(onReposNames, onError);
    };

    var onReposNames = function(data) {
        $scope.repos = data;
    };

    var onError = function(reason) {
        $scope.error = "Could not fetch the file";
    };

    $scope.username = $routeParams.username; // Grabs Username Based on Url
    $scope.repoSortOrder = '-stargazers_count';

    githubHttpCallRepos.getUser($scope.username).then(onReposComplete, onError);
};

app.controller("RepoController", RepoController);

})();