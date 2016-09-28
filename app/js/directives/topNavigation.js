function TopNavDirective() {
  return {
    restrict: 'E',
    templateUrl: 'directives/top-navigation.html',
    scope: {},
    link: function (scope, element) {

    }
  };
}

export default {
  name: 'topNavDirective',
  fn: TopNavDirective
};
