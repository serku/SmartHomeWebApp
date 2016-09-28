function PowerDirective() {
  return {
    restrict: 'E',
    templateUrl: 'directives/power.html',
    scope: {},
    link: function (scope, element) {

    }
  };
}

export default {
  name: 'powerDirective',
  fn: PowerDirective
};
