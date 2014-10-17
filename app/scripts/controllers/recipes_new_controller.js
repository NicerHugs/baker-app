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
      // var prevStepID = this.steps[this.get('steps').length-1].id;
      // this.store.find('step', prevStepID)
      //   .then(function(step) {
      //     step.set('description', self.get('description'));
      // });
      var stepNum = this.get('steps').length + 1;
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
  isAdded: false,
  isEditing: true,
  foodUnit: 'each',
  foods: [],
  populateIngredients: function() {
    var self=this;
    var foodUnit = this.get('foodUnit');
    var store = this.store;
    store.find('foodUnit', foodUnit)
      .then(function(foodUnit) {
        store.find('unitType', foodUnit.get('unitType.id'))
          .then(function(foodUnitType) {
            self.set('foods', foodUnitType.get('foods'));
            console.log(self.get('foods'));
          });
    });
  }.property('foodUnit'),
  actions: {
    editIngredient: function() {
      this.set('isEditing', true);
    },
    saveIngredient: function() {
      this.set('isEditing', false);
      this.set('quantity', this.get('amount'));
    },
    deleteIngredient: function() {
      var ingredient = this.get('model');
      this.get('parentController').get('ingredients').removeObject(ingredient);
      this.get('parentController').get('parentController')
        .get('ingredients').removeObject(ingredient);
      ingredient.deleteRecord();
    },
    addIngredient: function() {
      var self = this;
      var ingredient = this.get('model');
      this.set('isAdded', true);
      this.set('isEditing', false);
      ingredient.set('quantity', this.get('amount'));
      this.store.find('foodUnit', this.get('foodUnit'))
        .then(function(model) {
          ingredient.set('unit', model);
          self.set('foodUnitName', model.get('name'));
        });
      //store the current ingredient model on the step's ingredients
      this.get('parentController').get('ingredients')
        .addObject(ingredient);
      //store the current ingredient model on the recipe controller's ingredients
      this.get('parentController').get('parentController')
        .get('ingredients').addObject(ingredient);
      var newIngredient = this.store.createRecord('ingredientFood');
      this.get('parentController').get('ingredients').addObject(newIngredient);
    }
  }
});








//
