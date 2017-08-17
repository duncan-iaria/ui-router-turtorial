import angular from 'angular';
import uiRouter from 'angular-ui-router';
import config from './app.module'

const app = angular.module( 'app', [ uiRouter ] );

app.config( config );