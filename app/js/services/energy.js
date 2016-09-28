function EnergyService($http, $q, envService, $rootScope) {
  'ngInject';
  return {
    getTestData: getTestData
  }

  function getTestData() {
    var deferred = $q.defer();
    $http({
      url: 'someUrl',
      method: 'GET'
    }).then(function successCallback(response) {
      deferred.resolve(response.data);
    }, function errorCallback(response) {
      deferred.reject(response);
    });
    return deferred.promise;
  }
}

export default {
  name: 'EnergyService',
  fn: EnergyService
};
