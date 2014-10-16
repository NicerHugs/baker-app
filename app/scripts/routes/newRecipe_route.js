Baker.RecipesNewRoute = Ember.Route.extend({
  setupController: function(controller, model) {
    this._super(controller, model);
    var initialStep = this.store.createRecord('step', {
      stepNum: 1,
    });
    controller.set('steps', [ initialStep ]);
  },
  beforeModel: function() {
    var currentUser = this.controllerFor('application').get('currentUser');
    if (!currentUser) {
      this.transitionTo('login');
    }
  }
});
