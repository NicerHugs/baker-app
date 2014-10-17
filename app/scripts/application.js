window.Baker = Ember.Application.create({
  LOG_TRANSITIONS: true  
});

Baker.ref = new Firebase("https://batchmaker.firebaseio.com");

Baker.ApplicationAdapter = DS.FirebaseAdapter.extend({
  firebase: Baker.ref
});
