//Custom Service
(function() {

    var app = angular.module("githubViewer");
    

    var githubHttpCallRepos = function($http) {

        var getReposList = function(username) {
            return $http.get("https://api.github.com/users/" + username + "/repos")
                .then(function(response) {
                    return response.data;
                });
        };

        var getReposNames= function(repos) {
            return $http.get(repos.name)
                .then(function(response) {
                    return response.data;
                });
        };


        return {
            getUser: getReposList,
            getRepoNames: getReposNames
        };

    };

    app.factory("githubHttpCallRepos", githubHttpCallRepos);

}());