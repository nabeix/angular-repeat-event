(function() {
  angular.module('angularRepeatEvent', []).directive('ngRepeatEvent', [
    function() {
      return {
        restrict: 'A',
        link: function(scope, element, attrs) {
          var handlers;
          if (!attrs.ngRepeatEvent) {
            return;
          }
          handlers = scope.$eval(attrs.ngRepeatEvent);
          if (scope.$first && handlers.start) {
            handlers.start();
          }
          if (handlers.progress) {
            handlers.progress(scope.$index);
          }
          if (scope.$last && handlers.finish) {
            handlers.finish();
          }
        }
      };
    }
  ]);

}).call(this);
