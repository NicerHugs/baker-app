Baker.LoginController = Ember.Controller.extend({
  needs: 'application',
  isLoggedIn: Ember.computed.alias('controllers.application.isLoggedIn'),
  hasAccount: Ember.computed.alias('controllers.application.hasAccount'),
  actions: {
    logIn: function() {
      var self = this;
      var user = {
        email: this.get('email'),
        password: this.get('password')
      };
      Baker.ref.authWithPassword(user, function(error, authData) {
        if (error === null) {
          // user authenticated with Firebase
          //set authdata to local storage
          localStorage.setItem('bakerAuth', JSON.stringify(authData));
          self.set('isLoggedIn', true);
          self.set('hasAccount', true);
          self.set('email', '');
          self.set('password', '');
          self.transitionToRoute('index');
        } else {
          console.log("Error authenticating user:", error);
        }
      });
    }
  }
});

Baker.LogoutController = Baker.LoginController.extend();
