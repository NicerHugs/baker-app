Baker.Recipe = DS.Model.extend({
  author: DS.belongsTo('user'),
  name: DS.attr('string'),
  isPrivate: DS.attr('boolean'),
  yield: DS.attr('number'),
  yieldUnit: DS.attr('string'),
  recipeType: DS.attr('string'),
  imgURL: DS.attr('string'),
  prepTime: DS.attr('number'),
  prepTimeUnit: DS.attr('string'),
  cookTime: DS.attr('number'),
  cookTimeUnit: DS.attr('string'),
  cookTemp: DS.attr('number'),
  cookTempUnit: DS.attr('string'),
  ingredients: DS.hasMany('ingredientFood'),
  steps: DS.hasMany('step', {embedded: true}),
  notes: DS.attr('string')
});

Baker.Step = DS.Model.extend({
  stepNum: DS.attr('number'),
  description: DS.attr('string'),
  ingredients: DS.hasMany('ingredientFood')
});
