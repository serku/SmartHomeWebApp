function jsonCheckCtrl($http) {
  'ngInject';

  const vm = this;
  vm.title = 'AngularJS, Gulp, and Browserify! Written with keyboards and love!';
  vm.number = 1234;

  $http.get('/json/test.json').then(function successCallback(response) {
    console.log(response);

  }, function errorCallback(error) {
    console.log(error);
  });

}

export default {
  name: 'jsonCheckCtrl',
  fn: jsonCheckCtrl
};
