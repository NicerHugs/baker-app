Baker.RecipesNewController = Ember.Controller.extend({
  needs: 'application',
  recipeType: ["breakfast", "lunch", "dinner", "dessert"],
  selectedRecipe: null,
  tempUnit: ["Farenheit", "Celcius"],
  selectedTempUnit: null,
  steps: [{ ingredients: [{}] }],
  authorName: Ember.computed.alias('controllers.application.currentUser.username'),
  author: Ember.computed.alias('controllers.application.currentUser'),
  actions: {
    saveRecipe: function() {
      var workflow = Baker.NewRecipeWorkflow.create({
        store: this.store,
        authorID: this.get('author.id')
      });
      workflow.run();
    },
    addStep: function() {
      this.steps.addObject({});
    },
    addIngredient: function() {
      console.log('you want to add another ingredient');
    }
  }
});
