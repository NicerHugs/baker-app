Baker.IndexRoute = Ember.Route.extend({
  beforeModel: function(){
    var hasAccount = this.controllerFor('application').get('hasAccount');
    var loggedIn = this.controllerFor('application').get('isLoggedIn');
    if (!hasAccount) {
      this.transitionTo('createAccount');
    }
    else if (!loggedIn) {
      this.transitionTo('login');
    }
  }
});
