angular.module('angularRepeatEvent', [])
  .directive('ngRepeatEvent', [ ->
    restrict: 'A'
    link: (scope, element, attrs) ->
      unless attrs.ngRepeatEvent
        return
      handlers = scope.$eval(attrs.ngRepeatEvent)
      if (scope.$first && handlers.start)
        handlers.start()
      if (handlers.progress)
        handlers.progress(scope.$index)
      if (scope.$last && handlers.finish)
        handlers.finish()
      return
  ])
