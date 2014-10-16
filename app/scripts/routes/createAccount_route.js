Baker.CreateAccountRoute = Ember.Route.extend({
  beforeModel: function(){
    var loggedIn = this.controllerFor('application').get('isLoggedIn');
    if (loggedIn){
      this.transitionTo('index');
    }
  }
});
