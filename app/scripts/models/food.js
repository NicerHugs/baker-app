Baker.PantryFood = DS.Model.extend({
  food: DS.belongsTo('food'),
  quantity: DS.attr('number')
});

Baker.IngredientFood = Baker.PantryFood.extend();

Baker.Food = DS.Model.extend({
  name: DS.attr('string'),
  unit: DS.attr('string')
});
