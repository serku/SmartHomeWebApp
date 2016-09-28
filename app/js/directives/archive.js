function ArchiveDirective() {
  return {
    restrict: 'E',
    templateUrl: 'directives/archive.html',
    scope: {},
    link: function (scope, element) {

    }
  };
}

export default {
  name: 'archiveDirective',
  fn: ArchiveDirective
};
