export default class PersonController
{
    constructor()
    {
        console.log( 'person was built' );

        this.greeting = "hello my person!";
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