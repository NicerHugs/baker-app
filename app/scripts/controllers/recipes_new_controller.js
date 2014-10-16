Baker.RecipesNewController = Ember.Controller.extend({
  needs: 'application',
  recipeType: ["breakfast", "lunch", "dinner", "dessert"],
  selectedRecipe: null,
  tempUnit: ["Farenheit", "Celcius"],
  selectedTempUnit: null,
  author: Ember.computed.alias('controllers.application.currentUser'),
  actions: {
    saveRecipe: function() {

      var workflow = Baker.NewRecipeWorkflow.create({
        attributes: {
          name: this.name,
        },
        store: this.store,
        authorID: this.get('author.id')
      });
      workflow.run();
    },
    addStep: function() {
      var stepNum = this.steps.length + 1;
      var newStep = this.store.createRecord('step', {
        stepNum: stepNum,
      });
      this.steps.addObject(newStep);
    }
  }
});

Baker.StepController = Ember.Controller.extend({
  init: function() {
    this._super();
    this.set('ingredients', []);
    var newIngredient = this.store.createRecord('ingredientFood');
    this.get('ingredients').addObject(newIngredient);
  },
  actions: {
    addIngredient: function() {
      var newIngredient = this.store.createRecord('ingredientFood');
      this.get('ingredients').addObject(newIngredient);
    }
  }
});
