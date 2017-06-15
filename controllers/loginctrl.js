 angular.module('challenge1', [])
    .controller('loginctrl', ['$scope', '$state', function($scope, $state) {
        $scope.obj = {};
        $scope.setInits = function() {
            $scope.finalObj = JSON.parse(localStorage.getItem('logdetails'));
        }
        $scope.signup = function(valid) {
            if (valid) {
                if($scope.obj.password===$scope.obj.confirmpassword){
                localStorage.setItem('logdetails', JSON.stringify($scope.obj));
                $state.go('success');
           }else{
       alert("Passwords mismatch")
       }
            } else {
                $scope.submitted = true;
            }
        }
        $scope.clear = function(obj) {

            $('#email').val("");
            $('#password').val("")
            $('#confirmpassword').val("")
            $('#firstname').val("")
            $('#lastname').val("")
            $('#dob').val("")
        }
    }])
    .directive('ngConfirmClick', [
        function() {
            return {
                link: function(scope, element, attr) {
                    var msg = attr.ngConfirmClick || "Are you sure?";
                    var clickAction = attr.confirmedClick;
                    element.bind('click', function(event) {
                        if (window.confirm(msg)) {
                            scope.$eval(clickAction)
                        }
                    });
                }
            };
        }
    ])
