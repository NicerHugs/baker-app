window.Baker = Ember.Application.create();

Baker.ref = new Firebase("https://batchmaker.firebaseio.com");

Baker.ApplicationAdapter = DS.FirebaseAdapter.extend({
  firebase: Baker.ref
});

// Baker.Users.FIXTURES = {
//   user_id_1: {
//     username: 'NicerHugs',
//     email: 'text@example.com',
//     recipes: {
//       recipe_id_1: true,
//       recipe_id_2: true
//     },
//     pantry: {
//       pantry_food_id_1: true
//     }
//   }
// };
//
// Baker.Recipes.FIXTURES = {
//   recipe_id_1: {
//   name: 'Yummy cookies!',
//   author: user_id_1,
//   yield: {
//     amount: 12,
//     label: 'cookies'
//   },
//   type: 'dessert',
//   url: 'imgurl.com',
//   prepTime: {
//     amount: 15,
//     unit: 'mins'
//   },
//   cookTime: {
//     amount: 15,
//     unit: 'mins'
//   },
//   cookTemp: {
//     temp: 350,
//     unit: 'farenheit'
//   },
//   ingredients: {
//     ingredient_food_id_1: true,
//     ingredient_food_id_2: true
//   },
//   steps: {
//     step_1: {
//      ingredients: {
//        ingredient_food_id_2: true
//      },
//      description: 'step description'
//     },
//     step_2: {
//      ingredients: {
//        ingredient_food_id_1: true
//      },
//      description: 'step description'
//     }
//   },
//   notes: 'notes'
//   }
// };
//
// Baker.Foods.FIXTURES = {
//   food_id_1: {
//     name: 'flour',
//     unit: 'oz.'
//   },
//   food_id_2: {
//     name: 'eggs',
//     unit: null
//   }
// };
//
// Baker.IngredientFoods.FIXTURES = {
//   ingredient_food_id_1: {
//     food: food_id_1,
//     quantity: 12
//   },
//   ingredient_food_id_2: {
//     food: food_id_2,
//     quantity: 6
//   }
// };
//
// Baker.PantryFoods.FIXTURES = {
//   pantry_food_id_1: {
//     food: food_id_2,
//     quantity: 6
//   },
//   pantry_food_id_2: {
//     food: food_id_1,
//     quantity: 12
//   }
// };
