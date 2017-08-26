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
    }

    const peopleState =
    {
        name: 'people',
        url: '/people',
        component: 'people',
        resolve: 
        {
            people: [ 'PeopleService' , ( PeopleService ) => 
            {
                return PeopleService.getAllPeople()
            }]
        }
    }

    $stateProvider.state( helloState );
    $stateProvider.state( aboutState );
    $stateProvider.state( peopleState );
}

//=========================
// EXPORTS
//=========================
export default config;