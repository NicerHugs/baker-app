Baker.IndexRoute = Ember.Route.extend({
  beforeModel: function(){
    var currentUser = this.controllerFor('application').get('currentUser');
    if (!currentUser) {
      this.transitionTo('login');
    }
  },
  setupController: function(controller, model) {
    // controller.set('myRecipes', []);
    var myRecipes = this.controllerFor('application')
      .get('currentUser.recipes');
    myRecipes.then(function() {
      controller.set('myRecipes', myRecipes.slice(0, 4));
    });

    var publicRecipes = this.store.find('publicRecipe', 'all').then(function(collection){
      return collection.get('recipes');
    });
    publicRecipes.then(function(recipes) {
      controller.set('publicRecipes', recipes.slice(0, 5));
    });
  }
});
