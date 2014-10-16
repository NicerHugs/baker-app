Baker.RecipesNewRoute = Ember.Route.extend({
  beforeModel: function() {
    var currentUser = this.controllerFor('application').get('currentUser');
    if (!currentUser) {
      this.transitionTo('login');
    }
  },
  // model: function() {
  //   var userID = this.controllerFor('application').get('currentUser.id');
  //   return this.store.find('user', userID);
  // }
});
