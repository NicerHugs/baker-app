Baker.RecipesIndexRoute = Ember.Route.extend({
  beforeModel: function(){
    var currentUser = this.controllerFor('application').get('currentUser');
    if (!currentUser){
      this.transitionTo('login');
    }
  },
  model: function(){
    return this.controllerFor('application').get('currentUser.recipes');
  }
});
