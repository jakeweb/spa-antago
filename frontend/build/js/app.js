(function() {
    angular.module("app", []).controller("appCtrl", appCtrl).service("appService", appService).directive("ngEnterDirective", ngEnterDirective);

    appCtrl.$inject = ['$scope', 'appService'];
    appService.$inject = ['$rootScope'];

    function appCtrl($scope, appService) {
        $scope.services = appService.services;
        $scope.list = appService.list;
        $scope.servicesCount = appService.servicesCount;

        $scope.msgSend = function() {
            appService.msgSend($scope.author, $scope.message);
            $scope.message = '';
        }
    }

    function appService($rootScope) {

        var self = this;
        self.servicesCount = 0;
        // comments list
        self.list = [{
            message: "Привет, Верунь! ниче себе ты крутая. фотка класс!!!!",
            author: "Самуил",
            date: "13 ноября 2011"

        }, {
            message: "Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?",
            author: "Лилия Семёновна",
            date: "14 ноября 2011"

        }, {
            message: "Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?",
            author: "Лилия Семёновна",
            date: "13 ноября 2011"

        }];
        // services list
        self.services = [{
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

        self.msgSend = function(author, message) {
            var date = new Date();
            var feedback = {
                message: message,
                author: author,
                date: date
            }
            self.list.push(feedback);
        }

        // get total number services
        angular.forEach(self.services, function(value, key) {
            self.servicesCount += Number(value.count);
            console.log(self.servicesCount);
        });

        // set the width of the progressbar
        angular.forEach(self.services, function(value, key) {
            value.progressWidth = { "width": "" + (Number(value.count) / self.servicesCount) * 100 + "%" };
        });
    }

    function ngEnterDirective() {
        return {
            restrict: 'A',
            link: function(scope, elem, attrs) {
                elem.bind('keydown', function(event) {
                    var code = event.keyCode || event.which;
                    if (scope.author && scope.message) {
                        if (code === 13 && event.ctrlKey) {
                            event.preventDefault();
                            scope.$apply(attrs.ngEnterDirective);
                        }
                    }

                });
            }
        }
    }

})();
