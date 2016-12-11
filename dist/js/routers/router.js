app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "html/dashboard.html",
        controller: 'DashboardCtrl'
    })
    .when("/posts", {
        templateUrl : "html/posts.html",
        controller: 'PostsCtrl'
    })
    .when("/votes", {
        templateUrl : "html/votes.html",
        controller: 'VotesCtrl'
    })
    .otherwise({ 
        redirectTo: '/' 
    });
   
});