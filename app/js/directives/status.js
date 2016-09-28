function StatusDirective() {
  return {
    restrict: 'E',
    templateUrl: 'directives/status.html',
    scope: {},
    link: function (scope, element) {

    }
  };
}

export default {
  name: 'statusDirective',
  fn: StatusDirective
};
