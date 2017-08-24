//CORE
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import config from './app.config';

//COMPONENTS
import hello from './hello/hello.component.js';
import about from './about/about.component.js';

//SERVICES
import PeopleService from './services/people.service.js'

const app = angular.module( 'app', [ uiRouter ] );

//=========================
// REGISTER MODULES
//=========================
app.component( 'hello', hello );
app.component( 'about', about );
app.service( 'PeopleService', PeopleService );

//=========================
// REGISTER ROUTES
//=========================
app.config( config );