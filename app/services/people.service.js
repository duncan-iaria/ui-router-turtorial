export default class PeopleService
{
    constructor( $http )
    {
        //cache the injected service (required with class syntax)
        this.$http = $http;
    }

    getPerson( tId )
    {
        //return all people then find one (passing collection of what was found)
        return this.getAllPeople().then( findPerson );

        //pass in a collect of people from all people
        function findPerson( tPeople )
        {
            //find function of an array, looks based on expression
            return tPeople.find( personMatchesParam );
        }

        //find expression
        function personMatchesParam( person )
        {
            return person.id === tId;
        }
    }

    getAllPeople()
    {
        //get all people from the people json then send a response (which returns the data)
        return this.$http.get( 'data/people.json', { cache: true } ).then( this.sendResponse );
    }

    sendResponse( tData )
    {
        return tData.data;
    }
}