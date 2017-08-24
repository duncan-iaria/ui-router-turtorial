import angular from 'angular';
import uiRouter from 'angular-ui-router';
import config from './app.config';
import hello from './hello/hello.component.js';
import about from './about/about.component.js';

const app = angular.module( 'app', [ uiRouter ] );

//=========================
// REGISTER MODULES
//=========================
app.component( 'hello', hello );
app.component( 'about', about );

//=========================
// REGISTER ROUTES
//=========================
app.config( config );