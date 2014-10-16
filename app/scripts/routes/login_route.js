Baker.LoginRoute = Ember.Route.extend({
  beforeModel: function(){
    var self = this;
    var currentUser = this.controllerFor('application').get('currentUser');
    //if the user is already logged in, bypass the login screen
    if (currentUser){
      this.transitionTo('index');
    }
    //if the user is not logged in but has auth data on local storage
    //try to log them in
    else if (localStorage.getItem('bakerAuth')) {
      //look on local storage for the users account info
      var localAuthData = JSON.parse(localStorage.getItem('bakerAuth'));
      Baker.ref.authWithCustomToken(localAuthData.token, function(error, authData) {
        if (error === null) {
          // user authenticated with Firebase
          self.controllerFor('application').set('currentUser', self.store.find('user', authData.uid));
          self.transitionTo('index');
        } else {
          console.log("Error authenticating user:", error);
        }
      });
    }
  }
});
