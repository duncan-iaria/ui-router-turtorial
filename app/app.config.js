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
            people: [ 'PeopleService', ( PeopleService ) => 
            {
                return PeopleService.getAllPeople();
            }]
        }
    }

    const personState =
    {
        name: 'person',
        url: '/person/{personId}',
        component: 'person',
        resolve:
        {
            person: [ 'PeopleService', '$transition$', ( PeopleService, $transition$ ) =>
            {
                return PeopleService.getPerson( $transition$.params().personId );
            }]
        }
    }

    $stateProvider.state( helloState );
    $stateProvider.state( aboutState );
    $stateProvider.state( peopleState );
    $stateProvider.state( personState );
}

//=========================
// EXPORTS
//=========================
export default config;