export default class PeopleService
{
    constructor( $http )
    {
        console.log( `call me when you need me` );
        this.$http = $http;
    }

    getPerson( tId )
    {
        
    }

    getAllPeople()
    {
        return this.$http.get( 'data/people.json', { cache: true } ).then( this.sendResponse );
    }

    sendResponse( tData )
    {
        // console.log( JSON.stringify( tData, null, 2 ) );
        return tData;
    }
}