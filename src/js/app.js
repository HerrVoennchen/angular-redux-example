

require('bootstrap/dist/css/bootstrap.css');
require('bootstrap/dist/css/bootstrap-theme.css');
require('../css/app.css');

require('font-awesome/css/font-awesome.css');


require('jquery');
require('angular-route');
require('angular-animate');
require('angular-ui-bootstrap');
require('angular-ui-router');
require('notie');
require('ng-redux');

import angular from 'angular';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

var app = angular.module('anredux', ['ui.router', 'ngRoute', 'ngAnimate', 'ui.bootstrap', 'ngRedux']);

require('./services');
require('./components');

app.config(function($routeProvider, $ngReduxProvider) {
	$routeProvider.when('/home', {
		templateUrl: 'container/home.html'
	})
	.otherwise({
		redirectTo: '/home',
	});

	$ngReduxProvider.createStoreWith(rootReducer, [thunk, createLogger()]);
});

app.filter('yesNo', function() {
	return function(input) {
		return input ? 'yes' : 'no';
	};
});