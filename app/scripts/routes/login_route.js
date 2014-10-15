Baker.LoginRoute = Ember.Route.extend({
  beforeModel: function(){
    var self = this;
    var loggedIn = this.controllerFor('application').get('isLoggedIn');
    var hasAccount = this.controllerFor('application').get('hasAccount');
    var accountData = this.controllerFor('createAccount').get('accountData');
    //if the user is already logged in, bypass the login screen
    if (loggedIn){
      this.transitionTo('index');
    }
    //if the user is not logged in but appears to have an account
    //try to log them in
    else if (hasAccount) {
      //look on local storage for the users account info
      if (localStorage.getItem('bakerAuth')) {
        var authData = JSON.parse(localStorage.getItem('bakerAuth'));
        Baker.ref.authWithCustomToken(authData.token, function(error, authData) {
          if (error === null) {
            // user authenticated with Firebase
            self.controllerFor('application').set('isLoggedIn', true);
            self.transitionTo('index');
          } else {
            console.log("Error authenticating user:", error);
          }
        });
      }
      //if they don't have local storage data look on the create account
      //controller to see if they have just made a new account
      else if (accountData) {
        Baker.ref.authWithPassword({
          email: accountData.email,
          password: accountData.password
        }, function(error, authData) {
          if (error === null) {
            // user authenticated with Firebase
            self.controllerFor('application').set('isLoggedIn', true);
            self.transitionTo('index');
          } else {
            console.log("Error authenticating user:", error);
          }
        });
      }
    }
  }
});
