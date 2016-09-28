function BalanceDirective() {
  return {
    restrict: 'E',
    templateUrl: 'directives/balance.html',
    scope: {},
    link: function (scope, element) {

    }
  };
}

export default {
  name: 'balanceDirective',
  fn: BalanceDirective
};
