Baker.NewRecipeWorkflow = Ember.Object.extend({
  fetchAuthor: function() {
    var self = this;
    return this.store.find('user', this.authorID)
      .then(function(author) {
        self.set('author', author);
      });
  },

  saveIngredients: function() {
    var self = this;
    this.ingredients.forEach(function(ingredient) {
      ingredient.save();
      self.get('recipe.ingredients').addObject(ingredient);
      self.get('recipe').save();
    });
    return this.get('recipe.id');
  },

  //save ingredients to server
  //add ingredients to recipe
  //

  makeRecipe: function() {
    var config = Ember.merge({
      author: this.author,
    }, this.attributes);
    this.set('recipe', this.store.createRecord('recipe',config));
    var recipe = this.get('recipe');
    this.get('steps').forEach(function(step){
      recipe.get('steps').addObject(step);
    });
    return this.get('recipe').save();
  },

  addRecipeToAuthor: function() {
    this.get('author.recipes').addObject(this.get('recipe'));
    return this.get('author').save();
  },

  addRecipeToPublic: function() {
    if (this.get('recipe.isPublic')) {
      var publicRecipe = this.store.createRecord('publicRecipe').set('recipe', this.get('recipe'));
      return publicRecipe.save();
    }
  },

  //clear form and redirect to the recipe
  run: function() {
    return this.fetchAuthor()
      .then(this.makeRecipe.bind(this))
      .then(this.addRecipeToAuthor.bind(this))
      .then(this.addRecipeToPublic.bind(this))
      .then(this.saveIngredients.bind(this));
  }
});
