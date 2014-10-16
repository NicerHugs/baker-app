Baker.RecipesNewController = Ember.Controller.extend({
  needs: 'application',
  timeUnit: ["mins", "hrs"],
  recipeType: ["breakfast", "lunch", "dinner", "dessert"],
  selectedRecipe: null,
  tempUnit: ["Farenheit", "Celcius"],
  selectedTempUnit: null,
  author: Ember.computed.alias('controllers.application.currentUser'),
  ingredients: [],
  isPublic: false,
  actions: {
    saveRecipe: function() {

      var workflow = Baker.NewRecipeWorkflow.create({
        attributes: {
          name: this.name,
          isPublic: this.get('isPublic'),
          recipeType: this.get('selectedRecipeType'),
          prepTime: this.get('prepTime'),
          prepTimeUnit: this.get('selectedPrepTimeUnit'),
          cookTime: this.get('cookTime'),
          cookTimeUnit: this.get('selectedCookTimeUnit'),
          cookTemp: this.get('cookTemp'),
          cookTempUnit: this.get('selectedCookTempUnit'),
          yield: this.get('yield'),
          yieldUnit: this.get('yieldUnit'),
          notes: this.get('notes')
        },
        ingredients: this.get('ingredients'),
        steps: this.get('steps'),
        store: this.get('store'),
        authorID: this.get('author.id')
      });
      workflow.run();
    },
    addStep: function() {
      var stepNum = this.steps.length + 1;
      var newStep = this.store.createRecord('step', {
        stepNum: stepNum,
      });
      this.get('steps').addObject(newStep);
    }
  }
});

Baker.StepController = Ember.ObjectController.extend({
  init: function() {
    this._super();
    this.set('ingredients', []);
    var newIngredient = this.store.createRecord('ingredientFood');
    this.get('ingredients').addObject(newIngredient);
    this.get('parentController').get('ingredients').addObject(newIngredient);
  },
});

Baker.IngredientController = Ember.ObjectController.extend({
  actions: {
    addIngredient: function() {
      this.get('model').set('quantity', this.get('amount'));
      //store the current ingredient model on the step's ingredients
      this.get('parentController').get('ingredients')
        .addObject(this.get('model'));
      //store the current ingredient model on the recipe controller's ingredients
      this.get('parentController').get('parentController')
        .get('ingredients').addObject(this.get('model'));
      var newIngredient = this.store.createRecord('ingredientFood');
      this.get('parentController').get('ingredients').addObject(newIngredient);
    }
  }
});







//
