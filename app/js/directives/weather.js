function WeatherDirective() {
  return {
    restrict: 'E',
    templateUrl: 'directives/weather.html',
    scope: {},
    link: function (scope, element) {

    }
  };
}

export default {
  name: 'weatherDirective',
  fn: WeatherDirective
};
