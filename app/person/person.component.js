import PersonController from './person.controller';

//=========================
// COMPONENT
//=========================
const person = 
{
    template: require( './person.html' ),
    controller: PersonController,
    controllerAs: 'personController',

    bindings:
    {
        person: '<'
    }
};

//=========================
// EXPORTS
//=========================
export default person;