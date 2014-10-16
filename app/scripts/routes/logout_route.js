Baker.LogoutRoute = Ember.Route.extend({
  beforeModel: function() {
    if (this.controllerFor('application').get('currentUser')) {
      this.controllerFor('application').set('currentUser', '');
      localStorage.removeItem('bakerAuth');
      Baker.ref.unauth();
    }
  }
});
