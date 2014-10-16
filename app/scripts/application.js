window.Baker = Ember.Application.create();

Baker.ref = new Firebase("https://batchmaker.firebaseio.com");

Baker.ApplicationAdapter = DS.FirebaseAdapter.extend({
  firebase: Baker.ref
});
