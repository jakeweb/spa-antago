(function() {
    angular.module("app", []).controller("appCtrl", appCtrl).directive("ngEnterDirective", ngEnterDirective);

    appCtrl.$inject = ['$scope'];

    function appCtrl($scope) {
        $scope.servicesCount = 0;
        $scope.services = [{
            name: "Ручное бронирование",
            count: "11",
            classColor: "progress__bar_green"
        }, {
            name: "Пакетные туры",
            count: "3",
            classColor: "progress__bar_blue"
        }, {
            name: "Отели",
            count: "1",
            classColor: "progress__bar_blue"
        }];

        // get total number
        angular.forEach($scope.services, function(value, key) {
            $scope.servicesCount += Number(value.count);
        });

        // set the width of the progressbar
        angular.forEach($scope.services, function(value, key) {
            value.progressWidth = { "width": "" + (Number(value.count) / $scope.servicesCount) * 100 + "%" };
        });

        // list of the messages
        $scope.list = [{
            message: "Привет, Верунь! ниче себе ты крутая. фотка класс!!!!",
            author: "Самуил",
            date: "13 ноября 2011"

        }, {
            message: "Привет, Верунь! ниче себе ты крутая. фотка класс!!!!",
            author: "Лилия Семёновна",
            date: "13 ноября 2011"

        }, {
            message: "Привет, Верунь! ниче себе ты крутая. фотка класс!!!!",
            author: "Лилия Семёновна",
            date: "13 ноября 2011"

        }];
        $scope.msgSend = function() {
            var date = new Date();
            var feedback = {
                message: $scope.message,
                author: $scope.author,
                date: date
            }
            $scope.list.push(feedback);
            $scope.message = '';
            $scope.author = '';
        }

    }

    function ngEnterDirective() {
        return {
            restrict: 'A',
            link: function(scope, elem, attrs) {
                elem.bind('keydown', function(event) {
                    var code = event.keyCode || event.which;
                    if (code === 13 && event.ctrlKey) {
                        event.preventDefault();
                        scope.$apply(attrs.ngEnterDirective);
                    }
                });
            }
        }
    }

})();
