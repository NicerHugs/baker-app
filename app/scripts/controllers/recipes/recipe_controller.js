Baker.RecipesRecipeController = Ember.ObjectController.extend({
  actions: {
    editRecipe: function() {
      this.transitionToRoute("recipes.edit");
    }
  }
});
