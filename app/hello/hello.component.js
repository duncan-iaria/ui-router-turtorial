const hello = 
{
    template: '<h3>hello</h3><button ng-click="$ctrl.toggleGreeting()">press button</button>',

    controller: function()
    {
        this.greeting = 'hello',

        this.toggleGreeting = function()
        {
            console.log( "hey" );
        }
    }
};

export default hello;