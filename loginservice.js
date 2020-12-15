var app = angular.module('myApp');

app.factory('LoginService', function() {
    var admin = 'sandeep';
    var pass = '123456';
    var isAuthenticated = false;

    return {
        login: function(username, password) {
            isAuthenticated = username === admin && password === pass;
            return isAuthenticated;
        },
        isAuthenticated: function() {
            return isAuthenticated;
        }
    };

});