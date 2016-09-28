function TableDirective() {
  return {
    restrict: 'E',
    templateUrl: 'directives/table.html',
    scope: {},
    link: function (scope, element) {

    }
  };
}

export default {
  name: 'tableDirective',
  fn: TableDirective
};
