export default class AboutController
{
    constructor()
    {
        console.log( 'hey i was built, about' );

        this.greeting = "what's this about!";
    }
    
    toggleGreeting()
    {
        console.log( this.greeting );
    }
}