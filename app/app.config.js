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
        component: 'about'
    }

    $stateProvider.state( helloState );
    $stateProvider.state( aboutState );
}

//=========================
// EXPORTS
//=========================
export default config;