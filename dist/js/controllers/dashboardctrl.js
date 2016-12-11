app.controller('DashboardCtrl', function($scope, $http, headerService, APIService,$rootScope) {
	if(!headerService.token){
		window.location = '#/';
	}
	else
	{
		$rootScope.headerDiv = true;
        $rootScope.footerDiv = true;
        $rootScope.navbarDiv = true;
	}		

   
});