import nav from './nav';
import users from './users';

var app = require('angular').module('anredux');

app.directive('ngrUsers', users);
app.directive('ngrNav', nav);