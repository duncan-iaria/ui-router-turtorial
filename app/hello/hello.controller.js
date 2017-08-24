export default class HelloController
{
    constructor()
    {
        console.log( 'hey i was built' );

        this.greeting = "hello my man!";
    }
    
    toggleGreeting()
    {
        console.log( this.greeting );
    }
}