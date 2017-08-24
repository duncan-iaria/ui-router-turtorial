// import uiRouter from 'angular-ui-router';

// const app = angular.module( 'app', [ uiRouter ] );

// app.config( function( $stateProvider )
// {
//     const helloState = {
//         name: 'hello',
//         url: '/hello',
//         template: '<h3>Hello World</h3>'
//     }

//     const aboutState = {
//         name: 'about',
//         url: '/about',
//         template: '<h3>About The World</h3>'
//     }

//     $stateProvider.state( helloState );
//     $stateProvider.state( aboutState );
// });

function config( $stateProvider )
{
    const helloState = 
    {
        name: 'hello',
        url: '/hello',
        component: 'hello',
    }

    const aboutState =
    {
        name: 'about',
        url: '/about',
        template: '<h3>About The World</h3>'
    }

    $stateProvider.state( helloState );
    $stateProvider.state( aboutState );
}

export default config;