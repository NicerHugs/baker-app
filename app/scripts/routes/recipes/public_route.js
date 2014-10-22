Baker.RecipesPublicRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('publicRecipe', 'all');
  }
});
