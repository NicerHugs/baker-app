Baker.LoginRoute = Ember.Route.extend({
  beforeModel: function(){
    var self = this;
    var loggedIn = this.controllerFor('application').get('isLoggedIn');
    var hasAccount = this.controllerFor('application').get('hasAccount');
    var accountData = this.controllerFor('createAccount').get('accountData');
    if (loggedIn){
      this.transitionTo('index');
    }
    else if (hasAccount) {
      if (localStorage.getItem('bakerAuth')) {
        // get the authData from localStorage
        var authData = JSON.parse(localStorage.getItem('bakerAuth'));
        Baker.ref.authWithCustomToken(authData.token, function(error, authData) {
          if (error === null) {
            // user authenticated with Firebase
            self.controllerFor('application').set('isLoggedIn', true);
            self.transitionToRoute('index');
          } else {
            console.log("Error authenticating user:", error);
          }
        });
      }
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
