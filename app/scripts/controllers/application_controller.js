Baker.ApplicationController = Ember.Controller.extend({
  currentUser: '',
  init: function() {
    var self = this;
    this._super();
    if (localStorage.getItem('bakerAuth')) {
      // get the authData from localStorage
      var localAuthData = JSON.parse(localStorage.getItem('bakerAuth'));
      Baker.ref.authWithCustomToken(localAuthData.token, function(error, authData) {
        if (error === null) {
          // user authenticated with Firebase
          self.store.find('user', authData.uid).then(function(user) {
            self.set('currentUser', user);
            self.transitionToRoute('index');
          });
        } else {
          console.log("Error authenticating user:", error);
        }
      });
    }
  },
  actions: {
    logout: function() {
      this.set('currentUser', '');
      localStorage.removeItem('bakerAuth');
      Baker.ref.unauth();
      this.transitionToRoute('logout');
    }
  }
});
