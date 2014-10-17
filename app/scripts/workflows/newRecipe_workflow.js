Baker.NewRecipeWorkflow = Ember.Object.extend({
  fetchAuthor: function() {
    var self = this;
    return this.store.find('user', this.authorID)
      .then(function(author) {
        self.set('author', author);
      });
  },

  saveIngredients: function() {
    this.ingredients.forEach(function(ingredient) {
      ingredient.save();
    });
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

  //clear form and redirect to the recipe
  run: function() {
    return this.fetchAuthor()
      .then(this.makeRecipe.bind(this))
      .then(this.addRecipeToAuthor.bind(this))
      .then(this.saveIngredients.bind(this))
      .then(console.log('finished'));
  }
});
