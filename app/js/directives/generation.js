function GenerationDirective() {
  return {
    restrict: 'E',
    templateUrl: 'directives/generation.html',
    scope: {},
    link: function (scope, element) {

    }
  };
}

export default {
  name: 'generationDirective',
  fn: GenerationDirective
};
