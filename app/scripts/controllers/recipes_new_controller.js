Baker.RecipesNewController = Ember.Controller.extend({
  needs: 'application',
  timeUnit: ["mins", "hrs"],
  recipeType: ["breakfast", "lunch", "dinner", "dessert"],
  selectedRecipe: null,
  tempUnit: ["Farenheit", "Celcius"],
  selectedTempUnit: null,
  author: Ember.computed.alias('controllers.application.currentUser'),
  ingredients: [],
  steps: [],
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
      var stepNum = this.get('steps').length + 1;
      var newStep = this.store.createRecord('step', {
        stepNum: stepNum,
      });
      this.get('steps').addObject(newStep);
    }
  }
});

Baker.StepController = Ember.ObjectController.extend({
  isEditing: true,
  actions: {
    addIngredient: function() {
      var newIngredient = this.store.createRecord('ingredientFood');
      this.get('ingredients').addObject(newIngredient);
    },
    saveStep: function() {
      this.set('isEditing', false);
      this.get('parentController.steps').addObject(this.get('model'));
    },
    editStep: function() {
      this.set('isEditing', true);
    }
  }
});

Baker.IngredientController = Ember.ObjectController.extend({
  init: function() {
    var self = this;
    this._super();
    Ember.RSVP.Promise.all([this.store.find('foodUnit')])
      .then(function(data){
        var foodUnits = data[0];
        self.set('foodUnits', foodUnits);
    });
  },
  isEditing: true,
  foodUnit: 'each',
  foods: [],
  listOfIngredients: function() {
    var self=this;
    var foodUnit = this.get('foodUnit');
    var store = this.store;
    store.find('foodUnit', foodUnit)
      .then(function(foodUnit) {
        store.find('unitType', foodUnit.get('unitType.id'))
          .then(function(foodUnitType) {
            self.set('foods', foodUnitType.get('foods'));
          });
    });
  }.property('foodUnit'),
  actions: {
    editIngredient: function() {
      this.set('isEditing', true);
    },
    saveIngredient: function() {
      var self = this;
      this.set('isEditing', false);
      this.store.find('foodUnit', this.get('foodUnit')).then(function(unit){
        self.set('unit', unit);
      });
      this.store.find('food', this.get('name')).then(function(food){
        self.set('food', food);
      });
      this.get('parentController.parentController.ingredients').addObject(this.get('model'));
    },
    deleteIngredient: function() {
      var ingredient = this.get('model');
      this.get('parentController.ingredients').removeObject(ingredient);
      this.get('parentController.parentController.ingredients')
        .removeObject(ingredient);
      ingredient.deleteRecord();
    },
  }
});








//
