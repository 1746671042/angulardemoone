(function(angular){
    //自定义模块
    var app = angular.module("myApp", []);
    app.controller("indexCon",["$scope",function($scope){
            $scope.data = [
                {"title":"index-标题1","content":"index-内容1"},
                {"title":"index-标题2","content":"index-内容1"},
                {"title":"index-标题3","content":"index-内容1"},
                {"title":"index-标题4","content":"index-内容1"},
                {"title":"index-标题5","content":"index-内容1"},
                {"title":"index-标题6","content":"index-内容1"},
                {"title":"index-标题7","content":"index-内容1"},
                {"title":"index-标题8","content":"index-内容1"},
            ];
    }]);
app.controller("listCon",["$scope",function($scope){
            $scope.data = [
                {"title":"list-标题1","content":"list-内容1"},
                {"title":"list-标题2","content":"list-内容1"},
                {"title":"list-标题3","content":"list-内容1"},
                {"title":"list-标题4","content":"list-内容1"},
                {"title":"list-标题5","content":"list-内容1"},
                {"title":"list-标题6","content":"list-内容1"},
                {"title":"list-标题7","content":"list-内容1"},
                {"title":"list-标题8","content":"list-内容1"},
            ];
    }]);
    app.directive("listContent",[function(){
            return {
              restrict:"EAC",
              templateUrl:"template.html",
              replace:true,
              scope:{
                  title:"=forTitle",
                  content:"=forContent",
              },
            };
    }]);

})(angular);

