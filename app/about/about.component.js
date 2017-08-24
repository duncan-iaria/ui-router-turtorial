const about = 
{
    template: "<h3>What's this all about?</h3><button ng-click='$ctrl.toggleGreeting()'>press button</button>",

    controller: function()
    {
        this.greeting = 'hello',

        this.toggleGreeting = function()
        {
            console.log( "about what?" );
        }
    }
};

export default about;