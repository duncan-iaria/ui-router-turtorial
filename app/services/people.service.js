export default class PeopleService
{
    constructor( $http )
    {
        console.log( `call me when you need me` );
        this.$http = $http;
    }

    getPerson( tId )
    {
        //return all people then find one (passing collection of what was found)
        return this.getAllPeople().then( findPerson );

        //pass in a collect of people from all people
        function findPerson( tPeople )
        {
            //console.log( tPeople );
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
        return this.$http.get( 'data/people.json', { cache: true } ).then( this.sendResponse );
    }

    sendResponse( tData )
    {
        // console.log( JSON.stringify( tData, null, 2 ) );
        return tData.data;
    }
}