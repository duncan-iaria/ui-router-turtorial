import angular from 'angular';
import uiRouter from 'angular-ui-router';
import config from './app.module';
import hello from './hello/hello.component.js';

// console.log( hello );

const app = angular.module( 'app', [ uiRouter ] );

// //add the hello module
app.component( 'hello', hello );

app.config( config );