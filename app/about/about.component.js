import AboutController from './about.controller.js';

const about = 
{
    template: require( './about.html' ),
    controller: AboutController,

    bindings: 
    {
        people: '<'
    }
};

export default about;