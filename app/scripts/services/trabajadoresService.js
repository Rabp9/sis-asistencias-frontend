'use strict';

/**
 * @ngdoc service
 * @name sisAsistenciasApp.trabajadoresService
 * @description
 * # trabajadoresService
 * Factory in the sisAsistenciasApp.
 */
angular.module('sisAsistenciasApp')
.factory('trabajadoresService', function ($resource) {
    return $resource(angular.module('sisAsistenciasApp').pathLocation + 'trabajadores/:id.json');
});