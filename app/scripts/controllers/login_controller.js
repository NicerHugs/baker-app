Baker.LoginController = Ember.Controller.extend({
  needs: 'application',
  currentUser: Ember.computed.alias('controllers.application.currentUser'),
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
          // set authdata to local storage
          localStorage.setItem('bakerAuth', JSON.stringify(authData));
          self.store.find('user', authData.uid).then(function(user) {
            self.set('currentUser', user);
            self.set('email', '');
            self.set('password', '');
            self.transitionToRoute('index');
          });
        } else {
          console.log("Error authenticating user:", error);
        }
      });
    }
  }
});

Baker.LogoutController = Baker.LoginController.extend();
