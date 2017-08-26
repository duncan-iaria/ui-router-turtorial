export default class PeopleController
{
    constructor()
    {
        console.log( 'people was built' );

        this.greeting = "hello my people!";
    }
    
    toggleGreeting()
    {
        console.log( this.greeting );
    }

    checkPeople()
    {
        console.log( this );
    }
}