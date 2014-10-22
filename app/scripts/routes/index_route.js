Baker.IndexRoute = Ember.Route.extend({
  beforeModel: function(){
    var currentUser = this.controllerFor('application').get('currentUser');
    if (!currentUser) {
      this.transitionTo('login');
    }
  },
  setupController: function(controller, model) {
    var myRecipes = this.controllerFor('application')
      .get('currentUser.recipes');
    controller.set('myRecipes', myRecipes);
    controller.set('publicRecipes', this.store.find('publicRecipe'));
  }
});
