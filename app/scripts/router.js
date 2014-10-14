Baker.Router.map(function(){
  this.route('login');
  this.route('logout');
  this.route('createAccount');
  this.resource('recipes', function(){
    this.route('edit' /*, {path: '/:recipe_id/edit'},*/);
    this.route('recipe'/*, {path: '/:recipe_id'},*/);
    this.route('new');
    this.route('public');
    this.route('popular');
    this.route('favorite');
  });
  this.route('pantry');
  this.route('settings'/*, {path: '/:user_id'},*/);
});
