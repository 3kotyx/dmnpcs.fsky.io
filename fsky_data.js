$('body').terminal({
    login: function() {
        this.echo('USER: [NONE]');
        this.echo('PASS: [NONE]');
        this.echo('Invalid login - defaulting to user: Guest');
    },
    checkstatus: function(dmnpc_name) {
        if (dmnpc_name == "higuy") {
            this.echo('The DMNPC ' + dmnpc_name + " has been deleted. ")
            this.echo(`Current Status: Dead`)
            this.echo(`Reason of deletion: Appeared broken - repeated the phrase "hi"`)
        }
        else if (dmnpc_name == "cstrike") {
            this.echo('The DMNPC ' + dmnpc_name + " has been deleted. ")
            this.echo(`Current Status: Dead`)
            this.echo(`Reason of deletion: Used ingame firearm against Guard AI.`)
        }
        else {
            this.echo(`The DMNPC with name "` + dmnpc_name + `" doesn't appear to be registered in client storage cache... Attempting data pull...`)
            this.echo(`Running commands: get s.interlope.pull:27015`)
            this.echo(`Please reload page to see results.`)
        }
        
    },

    help: function() {
        this.echo(`List Of Commands: "checkstatus <DMNPC>", "help", "login"`);

    },
    
}, {
    greetings: 'Sucessfully connected to FSKY terminal!'
});