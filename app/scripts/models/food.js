Baker.PantryFood = DS.Model.extend({
  food: DS.belongsTo('food'),
  unit: DS.belongsTo('foodUnit'),
  quantity: DS.attr('number')
});

Baker.IngredientFood = Baker.PantryFood.extend();

Baker.Food = DS.Model.extend({
  name: DS.attr('string'),
  unitType: DS.belongsTo('FoodUnit')
});

Baker.FoodUnit = DS.Model.extend({
  name: DS.attr('string'),
  unitType: DS.belongsTo('unitType')
});

Baker.UnitType = DS.Model.extend({
  foods: DS.hasMany('food', {async: true})
});
