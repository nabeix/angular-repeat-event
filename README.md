angular-repeat-event
====================

AngularJS directive to handle ngRepeat start, finish and progress event.

## Usage

JavaScript
```javascript
angular.module('myApp', ['angularRepeatEvent']);

// in your controller
$scope.repeatStart = function() {
  console.log('start');
};
$scope.repeatFinish = function() {
  console.log('finish');
};
$scope.repeatProgress = function(index) {
  console.log(index);
};
```

HTML
```html
<script src="angular-repeat-event.js"></script>
<div ng-repeat="item in list"
ng-repeat-event="{start: repeatStart, finish: repeatFinish, progress: repeatProgress}">
  {{item}}
</div>
```
