Baker.CreateAccountController = Ember.ArrayController.extend({
  needs: 'application',
  isLoggedIn: Ember.computed.alias('controllers.application.isLoggedIn'),
  hasAccount: Ember.computed.alias('controllers.application.hasAccount'),
  accountData: {},
  actions: {
    createUser: function() {
      var self = this;
      var store = this.store;
      var username = this.get('username');
      var email = this.get('email');
      var password = this.get('password');
      //create the user in firebase for auth/security
      Baker.ref.createUser({
        email : email,
        password : password
      }, function(error) {
        // user created w/o error
        if (error === null) {
          // user authenticated with Firebase
          // create the user on server for data persistence
          var user = store.createRecord('user', {
            username: username,
            email: email
          });
          user.save().then(function(){
          });
          self.set('hasAccount', true);
          self.set('accountData', {email: email, password: password});
          self.transitionToRoute('login');
        // user not created
        } else {
          console.log("Error creating user:", error);
        }
      });
    }
  }
});
