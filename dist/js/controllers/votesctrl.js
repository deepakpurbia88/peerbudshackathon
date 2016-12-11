app.controller('VotesCtrl', function($scope, $http,headerService,APIService) {
  if(!headerService.token){
    window.location = '#/';
  }
  else
  {
    //posts page

    var x2js = new X2JS();
    $scope.mainDiv = true;
    

    $scope.currentPageData = [];
    $scope.currentPage = 1;
    $scope.numPerPage = 10;
    $scope.maxSize = 5;
    

    $scope.getListOfPosts = function (){
      //var url = headerService.contextPath+'/Posts.xml';
      //var url = 'data/Posts.xml';
      var url = 'data/postsample.xml';
      APIService.APIGet(url, function(response) {
                console.log("response----", response);
              //  if(response.pwcMessage.status === true){
                   //$scope.data = response.data;
                  
                   $scope.data  = x2js.xml_str2json(response);
                   $scope.data = $scope.data.posts.row;
                   console.log("jsonData---:", $scope.data);
                   paginationFunc($scope.data);

                  
                //   }
                /*
                else{
                    $scope.status = response.pwcMessage.message;
                    
                }*/
               });


    }

    $scope.getListOfPosts();

    
        
        

    
    // Pagination
    function paginationFunc(data){

      $scope.$watch('currentPage + numPerPage', function() {
      var begin = (($scope.currentPage - 1) * $scope.numPerPage)
      , end = begin + $scope.numPerPage;
      

      $scope.currentPageData = data.slice(begin, end);

      });
    }  
  }

  

    

  
});