Baker.ApplicationController = Ember.Controller.extend({
  hasAccount: false,
  isLoggedIn: false,
  init: function() {
    var self = this;
    this._super();
    if (localStorage.getItem('bakerAuth')) {
      // get the authData from localStorage
      this.set('hasAccount', true);
      var authData = JSON.parse(localStorage.getItem('bakerAuth'));
      Baker.ref.authWithCustomToken(authData.token, function(error, authData) {
        if (error === null) {
          // user authenticated with Firebase
          self.set('isLoggedIn', true);
          self.transitionToRoute('index');
        } else {
          console.log("Error authenticating user:", error);
        }
      });
    }
  },
  actions: {
    logout: function() {
      this.set('isLoggedIn', false);
      localStorage.removeItem('bakerAuth');
      Baker.ref.unauth();
      this.transitionToRoute('logout');
    }
  }
});
