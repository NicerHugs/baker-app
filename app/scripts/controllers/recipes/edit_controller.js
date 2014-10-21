Baker.RecipesEditController = Ember.ObjectController.extend({
  recipeTypes: ["breakfast", "lunch", "dinner", "dessert"],
  timeUnits: ["mins", "hrs"],
  tempUnits: ["Farenheit", "Celcius"],


  actions: {
    saveRecipe: function() {
      this.get('ingredients').forEach(function(ingredient) {
        ingredient.save();
      });
      this.model.save();
      this.transitionToRoute('recipes.recipe', this.get('id'));
    },
    addStep: function() {
      console.log(this.get('steps.content'));
      var stepNum = this.get('steps.content').length + 1;
      var newStep = this.store.createRecord('step', {
        stepNum: stepNum,
      });
      this.get('steps').addObject(newStep);
    }
  }
});


Baker.StepEditController = Ember.ObjectController.extend({
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

Baker.IngredientEditController = Ember.ObjectController.extend({
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
