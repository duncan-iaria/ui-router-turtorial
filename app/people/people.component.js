import PeopleController from './people.controller';

//=========================
// COMPONENT
//=========================
const people = 
{
    template: require( './people.html' ),
    controller: PeopleController,
    controllerAs: 'peopleController',

    bindings:
    {
        people: '<'
    }
};

export default people;