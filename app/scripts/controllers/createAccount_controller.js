Baker.CreateAccountController = Ember.Controller.extend({
  needs: 'application',
  isLoggedIn: Ember.computed.alias('controllers.application.isLoggedIn'),
  actions: {
    createUser: function() {
      var self = this;
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
          // create the user on server for data persistence. must first
          // login to get and set the id
          Baker.ref.authWithPassword({email:email, password: password},
            function(error, authData){
            var id = authData.uid;
            var user = self.store.createRecord('user', {
              id: id,
              username: username,
              email: email
            });
            localStorage.setItem('bakerAuth', JSON.stringify(authData));
            user.save();
            self.set('username', '');
            self.set('email', '');
            self.set('password', '');
            self.transitionToRoute('login');
          });
          // now that user is stored with id matching login id, log out
          Baker.ref.unauth();
        // user not created
        } else {
          console.log("Error creating user:", error);
        }
      });
    }
  }
});
