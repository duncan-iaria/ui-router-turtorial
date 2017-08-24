//SERVICES
// import PeopleService from './services/people.service.js'

//=========================
// COMPONENT ROUTES
//=========================
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
        component: 'about',
        resolve: 
        {
            people: [ 'PeopleService' , ( PeopleService ) => 
            {
                PeopleService.getAllPeople()
            }]
        }
    }

    $stateProvider.state( helloState );
    $stateProvider.state( aboutState );
}

//=========================
// EXPORTS
//=========================
export default config;