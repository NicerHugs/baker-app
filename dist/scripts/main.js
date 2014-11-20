Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        ");
  stack1 = helpers._triageMustache.call(depth0, "currentUser.username", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("!\n      ");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n        chef!\n      ");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("Batch Maker");
  }

function program7(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "recipes.new", options) : helperMissing.call(depth0, "link-to", "recipes.new", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "settings", options) : helperMissing.call(depth0, "link-to", "settings", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "recipes", options) : helperMissing.call(depth0, "link-to", "recipes", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        <a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "logout", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"fa fa-sign-out\"></i></a>\n      ");
  return buffer;
  }
function program8(depth0,data) {
  
  
  data.buffer.push("<i class=\"fa fa-plus\"></i>");
  }

function program10(depth0,data) {
  
  
  data.buffer.push("<i class=\"fa fa-cog\"></i>");
  }

function program12(depth0,data) {
  
  
  data.buffer.push("<i class=\"fa fa-user\"></i>");
  }

function program14(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "login", options) : helperMissing.call(depth0, "link-to", "login", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      ");
  return buffer;
  }
function program15(depth0,data) {
  
  
  data.buffer.push("Log In");
  }

function program17(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    <section class=\"sidebar\">\n      <ul>\n        <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(18, program18, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "recipes", options) : helperMissing.call(depth0, "link-to", "recipes", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(20, program20, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "recipes.public", options) : helperMissing.call(depth0, "link-to", "recipes.public", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(22, program22, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "recipes.popular", options) : helperMissing.call(depth0, "link-to", "recipes.popular", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(24, program24, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "recipes.favorite", options) : helperMissing.call(depth0, "link-to", "recipes.favorite", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(26, program26, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "pantry", options) : helperMissing.call(depth0, "link-to", "pantry", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n      </ul>\n    </section><!--sidebar-->\n  ");
  return buffer;
  }
function program18(depth0,data) {
  
  
  data.buffer.push("My Recipes");
  }

function program20(depth0,data) {
  
  
  data.buffer.push("Public Recipes");
  }

function program22(depth0,data) {
  
  
  data.buffer.push("Popular Recipes");
  }

function program24(depth0,data) {
  
  
  data.buffer.push("My Favorite Recipes");
  }

function program26(depth0,data) {
  
  
  data.buffer.push("My Pantry");
  }

  data.buffer.push("<div class=\"baker\">\n  <header>\n    <span>The kitchen is yours,\n      ");
  stack1 = helpers['if'].call(depth0, "currentUser", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </span>\n    <h1>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n    <nav>\n      ");
  stack1 = helpers['if'].call(depth0, "currentUser", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(14, program14, data),fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </nav>\n  </header>\n  ");
  stack1 = helpers['if'].call(depth0, "currentUser", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div><!--baker-->\n");
  return buffer;
  
});
Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\n      view all<i class=\"fa fa-angle-right\"></i>\n    ");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n      <li class=\"add-new\">\n        <i class=\"fa fa-plus\"></i>Add Recipe\n      </li>\n    ");
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n      ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "recipes.recipe", "id", options) : helperMissing.call(depth0, "link-to", "recipes.recipe", "id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <li>\n          <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("imgURL")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n          <h4>");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\n        </li>\n      ");
  return buffer;
  }

  data.buffer.push("<main class=\"index\">\n\n  <div class=\"heading\">\n    <h2>My Recipes</h2><div class=\"line\"></div>\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("view-all")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "recipes", options) : helperMissing.call(depth0, "link-to", "recipes", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n  <ul class=\"block-list\">\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "recipes.new", options) : helperMissing.call(depth0, "link-to", "recipes.new", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  stack1 = helpers.each.call(depth0, "myRecipes", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </ul>\n\n  <div class=\"heading\">\n    <h2>Public Recipes</h2><div class=\"line\"></div>\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("view-all")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "recipes.public", options) : helperMissing.call(depth0, "link-to", "recipes.public", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n  <ul class=\"block-list\">\n    ");
  stack1 = helpers.each.call(depth0, "publicRecipes", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </ul>\n\n  <div class=\"heading\">\n    <h2>Popular Recipes</h2><div class=\"line\"></div>\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("view-all")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "recipes.popular", options) : helperMissing.call(depth0, "link-to", "recipes.popular", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n  <ul class=\"block-list\">\n    <li></li>\n    <li></li>\n    <li></li>\n    <li></li>\n    <li></li>\n  </ul>\n\n  <div class=\"heading\">\n    <h2>My Favorite Recipes</h2><div class=\"line\"></div>\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("view-all")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "recipes.favorite", options) : helperMissing.call(depth0, "link-to", "recipes.favorite", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n  <ul class=\"block-list\">\n    <li></li>\n    <li></li>\n    <li></li>\n    <li></li>\n    <li></li>\n  </ul>\n\n  <div class=\"heading\">\n    <h2>My Pantry</h2><div class=\"line\"></div>\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("view-all")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "pantry", options) : helperMissing.call(depth0, "link-to", "pantry", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n  <ul class=\"block-list\">\n    <li></li>\n    <li></li>\n    <li></li>\n    <li></li>\n    <li></li>\n  </ul>\n</main>\n");
  return buffer;
  
});
Ember.TEMPLATES["login"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("Create an account");
  }

  data.buffer.push("<main class=\"login\">\n  <h2>Welcome to Batch Maker!</h2>\n  <form>\n    <h3>Please log in</h3>\n    <label name=\"email\">Email:</label>\n      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("email"),
    'placeholder': ("email"),
    'name': ("email"),
    'value': ("email")
  },hashTypes:{'type': "STRING",'placeholder': "STRING",'name': "STRING",'value': "ID"},hashContexts:{'type': depth0,'placeholder': depth0,'name': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n    <label name=\"password\">Password:</label>\n      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("password"),
    'placeholder': ("password"),
    'name': ("password"),
    'value': ("password")
  },hashTypes:{'type': "STRING",'placeholder': "STRING",'name': "STRING",'value': "ID"},hashContexts:{'type': depth0,'placeholder': depth0,'name': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n    <input type=\"submit\" value=\"log in\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "logIn", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n\n    <p>New here?</p>\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "createAccount", options) : helperMissing.call(depth0, "link-to", "createAccount", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </form>\n\n\n</main>\n");
  return buffer;
  
});
Ember.TEMPLATES["createAccount"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("Log in");
  }

  data.buffer.push("<main class=\"create-account\">\n  <h2>Welcome to Batch Maker!</h2>\n  <form>\n    <h3>Please create an account</h3>\n    <label name=\"username\">Username:</label>\n      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'placeholder': ("username"),
    'name': ("username"),
    'value': ("username")
  },hashTypes:{'type': "STRING",'placeholder': "STRING",'name': "STRING",'value': "ID"},hashContexts:{'type': depth0,'placeholder': depth0,'name': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n    <label name=\"email\">Email:</label>\n      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("email"),
    'placeholder': ("email"),
    'name': ("email"),
    'value': ("email")
  },hashTypes:{'type': "STRING",'placeholder': "STRING",'name': "STRING",'value': "ID"},hashContexts:{'type': depth0,'placeholder': depth0,'name': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n    <label name=\"password\">Password:</label>\n      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("password"),
    'placeholder': ("password"),
    'name': ("password"),
    'value': ("password")
  },hashTypes:{'type': "STRING",'placeholder': "STRING",'name': "STRING",'value': "ID"},hashContexts:{'type': depth0,'placeholder': depth0,'name': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("password"),
    'placeholder': ("verify password"),
    'name': ("verifyPassword"),
    'value': ("verifyPassword")
  },hashTypes:{'type': "STRING",'placeholder': "STRING",'name': "STRING",'value': "ID"},hashContexts:{'type': depth0,'placeholder': depth0,'name': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n    <input type=\"submit\" value=\"create account\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "createUser", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n\n    <p>Already have an account?</p>\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "login", options) : helperMissing.call(depth0, "link-to", "login", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </form>\n\n\n</main>\n");
  return buffer;
  
});
Ember.TEMPLATES["logout"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("Create an account");
  }

  data.buffer.push("<main class=\"logout\">\n  <h2>You have successfully logged out!</h2>\n  <form>\n    <h3>Please log in</h3>\n    <label name=\"email\">Email:</label>\n      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("email"),
    'placeholder': ("email"),
    'name': ("email"),
    'value': ("email")
  },hashTypes:{'type': "STRING",'placeholder': "STRING",'name': "STRING",'value': "ID"},hashContexts:{'type': depth0,'placeholder': depth0,'name': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n    <label name=\"password\">Password:</label>\n      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("password"),
    'placeholder': ("password"),
    'name': ("password"),
    'value': ("password")
  },hashTypes:{'type': "STRING",'placeholder': "STRING",'name': "STRING",'value': "ID"},hashContexts:{'type': depth0,'placeholder': depth0,'name': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n    <input type=\"submit\" value=\"log in\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "logIn", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n\n    <p>New here?</p>\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "createAccount", options) : helperMissing.call(depth0, "link-to", "createAccount", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </form>\n\n\n</main>\n");
  return buffer;
  
});
Ember.TEMPLATES["recipes"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("<main class=\"recipes\">\n  ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</main>\n");
  return buffer;
  
});
Ember.TEMPLATES["recipes/recipe"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n      <li>\n        <div class=\"quantity\">");
  stack1 = helpers._triageMustache.call(depth0, "quantity", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "unit.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n        <div class=\"ingredient\">");
  stack1 = helpers._triageMustache.call(depth0, "food.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n      </li>\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <li>\n          <div class=\"heading\">\n            <h2>Step ");
  stack1 = helpers._triageMustache.call(depth0, "stepNum", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h2><div class=\"line\"></div>\n          </div>\n          <div class=\"step-description\">\n            <p>");
  stack1 = helpers._triageMustache.call(depth0, "description", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n          </div>\n          <div class=\"ingredient-table\">\n            ");
  stack1 = helpers.each.call(depth0, "ingredients", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </div>\n        </li>\n      ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n              <div class=\"quantity\">\n                ");
  stack1 = helpers._triageMustache.call(depth0, "quantity", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "unit.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n              </div>\n              <div class=\"ingredient\">\n                ");
  stack1 = helpers._triageMustache.call(depth0, "food.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n              </div>\n            ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    <section class=\"edit\">\n      ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "recipes.edit", "id", options) : helperMissing.call(depth0, "link-to", "recipes.edit", "id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </section>\n  ");
  return buffer;
  }
function program7(depth0,data) {
  
  
  data.buffer.push("Edit this recipe");
  }

  data.buffer.push("<div class=\"recipe\">\n  <header>\n    <h2>");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h2>\n    <p>by ");
  stack1 = helpers._triageMustache.call(depth0, "author.username", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n    <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("imgURL")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n  </header>\n  <section class=\"details\">\n    <div class=\"recipe-type\">\n      <label>Recipe Type</label>\n      <span>");
  stack1 = helpers._triageMustache.call(depth0, "recipeType", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n    </div>\n    <div class=\"prep-time\">\n      <label>Prep Time</label>\n      <span>");
  stack1 = helpers._triageMustache.call(depth0, "prepTime", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  stack1 = helpers._triageMustache.call(depth0, "prepTimeUnit", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n    </div>\n    <div class=\"cook-time\">\n      <label>Cook Time</label>\n      <span>");
  stack1 = helpers._triageMustache.call(depth0, "cookTime", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  stack1 = helpers._triageMustache.call(depth0, "cookTimeUnit", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n    </div>\n    <div class=\"cook-temp\">\n      <label>Cook Temp</label>\n      <span>");
  stack1 = helpers._triageMustache.call(depth0, "cookTemp", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("&deg;");
  stack1 = helpers._triageMustache.call(depth0, "cookTempUnit", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n    </div>\n  </section><!--details-->\n  <ul class=\"ingredients\">\n    <li class=\"heading\">\n      ");
  stack1 = helpers._triageMustache.call(depth0, "yieldCount", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "yieldUnit", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      <button><i class=\"fa fa-pencil\"></i> Adjust</button>\n    </li>\n    ");
  stack1 = helpers.each.call(depth0, "ingredients", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      <div class=\"quantity\"></div>\n      <div class=\"ingredient\"></div>\n    </li>\n  </ul><!--ingredients-->\n  <section class=\"instructions\">\n    <ul>\n      ");
  stack1 = helpers.each.call(depth0, "steps", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </ul>\n  </section><!--instructions-->\n  <section class=\"notes\">\n    <h2>Personal Notes</h2>\n    <div class=\"line\"></div>\n    <p>");
  stack1 = helpers._triageMustache.call(depth0, "notes", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n  </section><!--notes-->\n  ");
  stack1 = helpers['if'].call(depth0, "isAuthor", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div><!--recipe-->\n");
  return buffer;
  
});
Ember.TEMPLATES["recipes/new"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n          <img class=\"temp-img-thumb\"");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("imgURL")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("/>\n          <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addPic", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"img-thumb-overlay\">\n            <i class=\"fa fa-plus\"></i>Change Photo\n          </button>\n        ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n          <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addPic", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"fa fa-plus\"></i>Add Photo</button>\n        ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n          <h3>Step ");
  stack1 = helpers._triageMustache.call(depth0, "stepNum", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h3>\n          ");
  stack1 = helpers.each.call(depth0, "ingredients", {hash:{
    'itemController': ("ingredient")
  },hashTypes:{'itemController': "STRING"},hashContexts:{'itemController': depth0},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addIngredient", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">add an ingredient</button>\n          ");
  stack1 = helpers['if'].call(depth0, "isEditing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(13, program13, data),fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n              <div class=\"step-qs\">\n                  ");
  stack1 = helpers['if'].call(depth0, "isEditing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                  <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteIngredient", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">delete</button>\n              </div><!--step-qs-->\n          ");
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'placeholder': ("Amount"),
    'value': ("amount")
  },hashTypes:{'type': "STRING",'placeholder': "STRING",'value': "ID"},hashContexts:{'type': depth0,'placeholder': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "ingredientForm", options) : helperMissing.call(depth0, "partial", "ingredientForm", options))));
  data.buffer.push("\n                    <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveIngredient", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">save</button>\n                  ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                    <span>");
  stack1 = helpers._triageMustache.call(depth0, "quantity", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n                    <span>");
  stack1 = helpers._triageMustache.call(depth0, "unit.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n                    <span>");
  stack1 = helpers._triageMustache.call(depth0, "food.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n                    <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editIngredient", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">edit</button>\n                  ");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n            ");
  data.buffer.push(escapeExpression((helper = helpers.textarea || (depth0 && depth0.textarea),options={hash:{
    'placeholder': ("What directions go with this step?"),
    'value': ("description")
  },hashTypes:{'placeholder': "STRING",'value': "ID"},hashContexts:{'placeholder': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\n              <input type=\"submit\" value=\"Save this step\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveStep", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n          ");
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            <p>\n              ");
  stack1 = helpers._triageMustache.call(depth0, "description", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n              <input type=\"submit\" value=\"Edit this step\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editStep", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n            </p>\n          ");
  return buffer;
  }

  data.buffer.push("  <form class=\"new\">\n    <section class=\"basic\">\n      <h2>Basic Info</h2>\n      <div class=\"line\"></div>\n      <div class=\"pic-button-container\">\n        ");
  stack1 = helpers['if'].call(depth0, "imgURL", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </div>\n\n      <div class=\"basic-qs\">\n        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'placeholder': ("Recipe Name"),
    'value': ("name")
  },hashTypes:{'type': "STRING",'placeholder': "STRING",'value': "ID"},hashContexts:{'type': depth0,'placeholder': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'placeholder': ("By"),
    'value': ("author.username"),
    'disabled': ("true")
  },hashTypes:{'type': "STRING",'placeholder': "STRING",'value': "ID",'disabled': "STRING"},hashContexts:{'type': depth0,'placeholder': depth0,'value': depth0,'disabled': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("checkbox"),
    'checked': ("isPublic"),
    'name': ("is-public")
  },hashTypes:{'type': "STRING",'checked': "ID",'name': "STRING"},hashContexts:{'type': depth0,'checked': depth0,'name': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n          <label name=\"is-public\">Make it public</label>\n      </div><!--basic-qs-->\n\n      <div class=\"cooking-qs\">\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'content': ("recipeType"),
    'value': ("selectedRecipeType"),
    'prompt': ("Recipe Type")
  },hashTypes:{'content': "ID",'value': "ID",'prompt': "STRING"},hashContexts:{'content': depth0,'value': depth0,'prompt': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'placeholder': ("Prep Time"),
    'value': ("prepTime")
  },hashTypes:{'type': "STRING",'placeholder': "STRING",'value': "ID"},hashContexts:{'type': depth0,'placeholder': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'content': ("timeUnit"),
    'value': ("selectedPrepTimeUnit")
  },hashTypes:{'content': "ID",'value': "ID"},hashContexts:{'content': depth0,'value': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'placeholder': ("Cook Time"),
    'value': ("cookTime")
  },hashTypes:{'type': "STRING",'placeholder': "STRING",'value': "ID"},hashContexts:{'type': depth0,'placeholder': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'content': ("timeUnit"),
    'value': ("selectedCookTimeUnit")
  },hashTypes:{'content': "ID",'value': "ID"},hashContexts:{'content': depth0,'value': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'placeholder': ("Cook Temp"),
    'value': ("cookTemp")
  },hashTypes:{'type': "STRING",'placeholder': "STRING",'value': "ID"},hashContexts:{'type': depth0,'placeholder': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'content': ("tempUnit"),
    'value': ("selectedTempUnit")
  },hashTypes:{'content': "ID",'value': "ID"},hashContexts:{'content': depth0,'value': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n      </div><!--cooking-qs-->\n\n      <div class=\"yield-qs\">\n        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("yieldCount"),
    'placeholder': ("yield count")
  },hashTypes:{'type': "STRING",'value': "ID",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("yieldUnit"),
    'placeholder': ("cookies, loaves, etc")
  },hashTypes:{'type': "STRING",'value': "ID",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n      </div><!--yield-qs-->\n\n    </section><!--basic info-->\n\n    <section class=\"steps\">\n      <h2>Steps</h2>\n      <div class=\"line\"></div>\n\n        <div class=\"step\">\n          ");
  stack1 = helpers.each.call(depth0, "steps", {hash:{
    'itemController': ("step")
  },hashTypes:{'itemController': "STRING"},hashContexts:{'itemController': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        </div>\n\n      <input type=\"submit\" value=\"Add a step\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addStep", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n\n    </section><!-- steps-->\n\n    <section class=\"notes\">\n      <h2>Personal Notes</h2>\n      <div class=\"line\"></div>\n      ");
  data.buffer.push(escapeExpression((helper = helpers.textarea || (depth0 && depth0.textarea),options={hash:{
    'value': ("notes")
  },hashTypes:{'value': "ID"},hashContexts:{'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\n    </section><!-- notes-->\n\n    <input type=\"submit\" value=\"Save this Recipe!\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveRecipe", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n  </form>\n");
  return buffer;
  
});
Ember.TEMPLATES["recipes/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\n    <li class=\"add-new\"><i class=\"fa fa-plus\"></i>Add Recipe</li>\n  ");
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "recipes.recipe", "id", options) : helperMissing.call(depth0, "link-to", "recipes.recipe", "id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n      <li>\n        <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("imgURL")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n        <h4>");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\n      </li>\n    ");
  return buffer;
  }

  data.buffer.push("<div class=\"heading\">\n  <h2>My Recipes</h2><div class=\"line\"></div>\n</div>\n<ul class=\"block-list\">\n  ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "recipes.new", options) : helperMissing.call(depth0, "link-to", "recipes.new", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  ");
  stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</ul>\n");
  return buffer;
  
});
Ember.TEMPLATES["recipes/public"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "recipes.recipe", "id", options) : helperMissing.call(depth0, "link-to", "recipes.recipe", "id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n      <li>\n        <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("imgURL")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n        <h4>");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\n      </li>\n    ");
  return buffer;
  }

  data.buffer.push("<div class=\"heading\">\n  <h2>Public Recipes</h2><div class=\"line\"></div>\n</div>\n<ul class=\"block-list\">\n  ");
  stack1 = helpers.each.call(depth0, "recipes", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</ul>\n");
  return buffer;
  
});
Ember.TEMPLATES["recipes/edit"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n        <img class=\"temp-img-thumb\"");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("imgURL")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("/>\n        <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addPic", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"img-thumb-overlay\">\n          <i class=\"fa fa-plus\"></i>Change Photo\n        </button>\n      ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n        <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addPic", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"fa fa-plus\"></i>Add Photo</button>\n      ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <h3>Step ");
  stack1 = helpers._triageMustache.call(depth0, "stepNum", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h3>\n        ");
  stack1 = helpers.each.call(depth0, "ingredients", {hash:{
    'itemController': ("ingredientEdit")
  },hashTypes:{'itemController': "STRING"},hashContexts:{'itemController': depth0},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addIngredient", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">add an ingredient</button>\n        ");
  stack1 = helpers['if'].call(depth0, "isEditing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(13, program13, data),fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      ");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            <div class=\"step-qs\">\n                ");
  stack1 = helpers['if'].call(depth0, "isEditing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteIngredient", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">delete</button>\n            </div><!--step-qs-->\n        ");
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                  ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'placeholder': ("Amount"),
    'value': ("quantity")
  },hashTypes:{'type': "STRING",'placeholder': "STRING",'value': "ID"},hashContexts:{'type': depth0,'placeholder': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                  ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "ingredientForm", options) : helperMissing.call(depth0, "partial", "ingredientForm", options))));
  data.buffer.push("\n                  <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveIngredient", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">save</button>\n                ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                  <span>");
  stack1 = helpers._triageMustache.call(depth0, "quantity", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n                  <span>");
  stack1 = helpers._triageMustache.call(depth0, "unit.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n                  <span>");
  stack1 = helpers._triageMustache.call(depth0, "food.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n                  <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editIngredient", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">edit</button>\n                ");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n          ");
  data.buffer.push(escapeExpression((helper = helpers.textarea || (depth0 && depth0.textarea),options={hash:{
    'placeholder': ("What directions go with this step?"),
    'value': ("description")
  },hashTypes:{'placeholder': "STRING",'value': "ID"},hashContexts:{'placeholder': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\n            <input type=\"submit\" value=\"Save this step\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveStep", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n        ");
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n          <p>\n            ");
  stack1 = helpers._triageMustache.call(depth0, "description", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            <input type=\"submit\" value=\"Edit this step\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editStep", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n          </p>\n        ");
  return buffer;
  }

  data.buffer.push("<form class=\"new\">\n  <section class=\"basic\">\n    <h2>Basic Info</h2>\n    <div class=\"line\"></div>\n    <div class=\"pic-button-container\">\n      ");
  stack1 = helpers['if'].call(depth0, "imgURL", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n\n    <div class=\"basic-qs\">\n      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'placeholder': ("Recipe Name"),
    'value': ("name")
  },hashTypes:{'type': "STRING",'placeholder': "STRING",'value': "ID"},hashContexts:{'type': depth0,'placeholder': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'placeholder': ("By"),
    'value': ("author.username"),
    'disabled': ("true")
  },hashTypes:{'type': "STRING",'placeholder': "STRING",'value': "ID",'disabled': "STRING"},hashContexts:{'type': depth0,'placeholder': depth0,'value': depth0,'disabled': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("checkbox"),
    'checked': ("isPublic"),
    'name': ("is-public")
  },hashTypes:{'type': "STRING",'checked': "ID",'name': "STRING"},hashContexts:{'type': depth0,'checked': depth0,'name': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        <label name=\"is-public\">Make it public</label>\n    </div><!--basic-qs-->\n\n    <div class=\"cooking-qs\">\n      ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'content': ("recipeTypes"),
    'value': ("recipeType"),
    'prompt': ("Recipe Type")
  },hashTypes:{'content': "ID",'value': "ID",'prompt': "STRING"},hashContexts:{'content': depth0,'value': depth0,'prompt': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'placeholder': ("Prep Time"),
    'value': ("prepTime")
  },hashTypes:{'type': "STRING",'placeholder': "STRING",'value': "ID"},hashContexts:{'type': depth0,'placeholder': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n      ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'content': ("timeUnits"),
    'value': ("prepTimeUnit")
  },hashTypes:{'content': "ID",'value': "ID"},hashContexts:{'content': depth0,'value': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'placeholder': ("Cook Time"),
    'value': ("cookTime")
  },hashTypes:{'type': "STRING",'placeholder': "STRING",'value': "ID"},hashContexts:{'type': depth0,'placeholder': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n      ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'content': ("timeUnits"),
    'value': ("scookTimeUnit")
  },hashTypes:{'content': "ID",'value': "ID"},hashContexts:{'content': depth0,'value': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'placeholder': ("Cook Temp"),
    'value': ("cookTemp")
  },hashTypes:{'type': "STRING",'placeholder': "STRING",'value': "ID"},hashContexts:{'type': depth0,'placeholder': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n      ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'content': ("tempUnits"),
    'value': ("tempUnit")
  },hashTypes:{'content': "ID",'value': "ID"},hashContexts:{'content': depth0,'value': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    </div><!--cooking-qs-->\n\n    <div class=\"yield-qs\">\n      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("yieldCount"),
    'placeholder': ("yield count")
  },hashTypes:{'type': "STRING",'value': "ID",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("yieldUnit"),
    'placeholder': ("cookies, loaves, etc")
  },hashTypes:{'type': "STRING",'value': "ID",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n    </div><!--yield-qs-->\n\n  </section><!--basic info-->\n\n  <section class=\"steps\">\n    <h2>Steps</h2>\n    <div class=\"line\"></div>\n\n      <div class=\"step\">\n        ");
  stack1 = helpers.each.call(depth0, "steps", {hash:{
    'itemController': ("stepEdit")
  },hashTypes:{'itemController': "STRING"},hashContexts:{'itemController': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n      </div>\n\n    <input type=\"submit\" value=\"Add a step\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addStep", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n\n  </section><!-- steps-->\n\n  <section class=\"notes\">\n    <h2>Personal Notes</h2>\n    <div class=\"line\"></div>\n    ");
  data.buffer.push(escapeExpression((helper = helpers.textarea || (depth0 && depth0.textarea),options={hash:{
    'value': ("notes")
  },hashTypes:{'value': "ID"},hashContexts:{'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\n  </section><!-- notes-->\n\n  <input type=\"submit\" value=\"Save this Recipe!\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveRecipe", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n</form>\n");
  return buffer;
  
});
Ember.TEMPLATES["_ingredientForm"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'content': ("foodUnits"),
    'optionValuePath': ("content.id"),
    'optionLabelPath': ("content.name"),
    'prompt': ("Unit"),
    'action': ("listOfIngredients"),
    'value': ("foodUnit")
  },hashTypes:{'content': "ID",'optionValuePath': "STRING",'optionLabelPath': "STRING",'prompt': "STRING",'action': "ID",'value': "ID"},hashContexts:{'content': depth0,'optionValuePath': depth0,'optionLabelPath': depth0,'prompt': depth0,'action': depth0,'value': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'content': ("foods"),
    'optionValuePath': ("content.id"),
    'optionLabelPath': ("content.name"),
    'prompt': ("Ingredient"),
    'value': ("name")
  },hashTypes:{'content': "ID",'optionValuePath': "STRING",'optionLabelPath': "STRING",'prompt': "STRING",'value': "ID"},hashContexts:{'content': depth0,'optionValuePath': depth0,'optionLabelPath': depth0,'prompt': depth0,'value': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n");
  return buffer;
  
});
window.Baker = Ember.Application.create({
  LOG_TRANSITIONS: true  
});

Baker.ref = new Firebase("https://batchmaker.firebaseio.com");

Baker.ApplicationAdapter = DS.FirebaseAdapter.extend({
  firebase: Baker.ref
});

Baker.Router.map(function(){
  this.route('login');
  this.route('logout');
  this.route('createAccount');
  this.resource('recipes', function(){
    this.route('edit', {path: '/:recipe_id/edit'});
    this.route('recipe', {path: '/:recipe_id'});
    this.route('new');
    this.route('public');
    this.route('popular');
    this.route('favorite');
  });
  this.route('pantry');
  this.route('settings'/*, {path: '/:user_id'},*/);
});

Baker.LoginRoute = Ember.Route.extend({
  beforeModel: function(){
    var self = this;
    var currentUser = this.controllerFor('application').get('currentUser');
    //if the user is already logged in, bypass the login screen
    if (currentUser){
      this.transitionTo('index');
    }
    //if the user is not logged in but has auth data on local storage
    //try to log them in
    else if (localStorage.getItem('bakerAuth')) {
      //look on local storage for the users account info
      var localAuthData = JSON.parse(localStorage.getItem('bakerAuth'));
      Baker.ref.authWithCustomToken(localAuthData.token, function(error, authData) {
        if (error === null) {
          // user authenticated with Firebase
          self.store.find('user', authData.uid).then(function(user) {
            self.controllerFor('application').set('currentUser', user);
            self.transitionTo('index');
          });
        } else {
          console.log("Error authenticating user:", error);
        }
      });
    }
  },
  setupController: function(controller, model) {
    this._super(controller, model);
  }
});

Baker.IndexRoute = Ember.Route.extend({
  beforeModel: function(){
    var currentUser = this.controllerFor('application').get('currentUser');
    if (!currentUser) {
      this.transitionTo('login');
    }
  },
  setupController: function(controller, model) {
    // controller.set('myRecipes', []);
    var myRecipes = this.controllerFor('application')
      .get('currentUser.recipes');
    myRecipes.then(function() {
      controller.set('myRecipes', myRecipes.slice(-4));
    });

    var publicRecipes = this.store.find('publicRecipe', 'all').then(function(collection){
      return collection.get('recipes');
    });
    publicRecipes.then(function(recipes) {
      controller.set('publicRecipes', recipes.slice(-5));
    });
  }
});

Baker.RecipesIndexRoute = Ember.Route.extend({
  beforeModel: function(){
    var currentUser = this.controllerFor('application').get('currentUser');
    if (!currentUser){
      this.transitionTo('login');
    }
  },
  model: function(){
    return this.controllerFor('application').get('currentUser.recipes');
  }
});

Baker.RecipesPublicRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('publicRecipe', 'all');
  }
});


Baker.CreateAccountRoute = Ember.Route.extend({
  beforeModel: function(){
    var loggedIn = this.controllerFor('application').get('isLoggedIn');
    if (loggedIn){
      this.transitionTo('index');
    }
  }
});

Baker.LogoutRoute = Ember.Route.extend({
  beforeModel: function() {
    if (this.controllerFor('application').get('currentUser')) {
      this.controllerFor('application').set('currentUser', '');
      localStorage.removeItem('bakerAuth');
      Baker.ref.unauth();
    }
  }
});

Baker.RecipesNewRoute = Ember.Route.extend({
  beforeModel: function() {
    var currentUser = this.controllerFor('application').get('currentUser');
    if (!currentUser) {
      this.transitionTo('login');
    }
  }
});

Baker.ApplicationController = Ember.Controller.extend({
  currentUser: '',
  init: function() {
    var self = this;
    this._super();
    if (localStorage.getItem('bakerAuth')) {
      // get the authData from localStorage
      var localAuthData = JSON.parse(localStorage.getItem('bakerAuth'));
      Baker.ref.authWithCustomToken(localAuthData.token, function(error, authData) {
        if (error === null) {
          // user authenticated with Firebase
          self.store.find('user', authData.uid).then(function(user) {
            self.set('currentUser', user);
            self.transitionToRoute('index');
          });
        } else {
          console.log("Error authenticating user:", error);
        }
      });
    }
  },
  actions: {
    logout: function() {
      this.set('currentUser', '');
      localStorage.removeItem('bakerAuth');
      Baker.ref.unauth();
      this.transitionToRoute('logout');
    }
  }
});

Baker.LoginController = Ember.Controller.extend({
  needs: 'application',
  currentUser: Ember.computed.alias('controllers.application.currentUser'),
  actions: {
    logIn: function() {
      var self = this;
      var user = {
        email: this.get('email'),
        password: this.get('password')
      };
      Baker.ref.authWithPassword(user, function(error, authData) {
        if (error === null) {
          // user authenticated with Firebase
          // set authdata to local storage
          localStorage.setItem('bakerAuth', JSON.stringify(authData));
          self.store.find('user', authData.uid).then(function(user) {
            self.set('currentUser', user);
            self.set('email', '');
            self.set('password', '');
            self.transitionToRoute('index');
          });
        } else {
          console.log("Error authenticating user:", error);
        }
      });
    }
  }
});

Baker.LogoutController = Baker.LoginController.extend();

Baker.IndexController = Ember.Controller.extend({

});

Baker.RecipesController = Ember.ArrayController.extend({
  recipeSelected: true
});

Baker.RecipesRecipeController = Ember.ObjectController.extend({
  needs: 'application',
  currentUser: Ember.computed.alias('controllers.application.currentUser'),
  isAuthor: function(){
    if (this.get('currentUser.id') === this.get('author.id')) {
      return true;
    }
    else
      return false;
  }.property('currentUser'),
  actions: {
    editRecipe: function() {
      this.transitionToRoute("recipes.edit");
    }
  }
});

Baker.RecipesEditController = Ember.ObjectController.extend({
  recipeTypes: ["breakfast", "lunch", "dinner", "dessert"],
  timeUnits: ["mins", "hrs"],
  tempUnits: ["Farenheit", "Celcius"],


  actions: {
    addPic: function() {
      var self = this;
      filepicker.setKey("A2XfJXxUSw61YLa6JvOkgz");

      filepicker.pickAndStore({},{},function(Blobs){
        self.set('imgURL', Blobs[0].url);
      });
    },
    saveRecipe: function() {
      this.get('ingredients').forEach(function(ingredient) {
        ingredient.save();
      });
      this.model.save();
      this.transitionToRoute('recipes.recipe', this.get('id'));
    },
    addStep: function() {
      console.log(this.get('steps.content'));
      var stepNum = this.get('steps.content').length + 1;
      var newStep = this.store.createRecord('step', {
        stepNum: stepNum,
      });
      this.get('steps').addObject(newStep);
    }
  }
});


Baker.StepEditController = Ember.ObjectController.extend({
  isEditing: true,
  actions: {
    addIngredient: function() {
      var newIngredient = this.store.createRecord('ingredientFood');
      this.get('ingredients').addObject(newIngredient);
    },
    saveStep: function() {
      this.set('isEditing', false);
      this.get('parentController.steps').addObject(this.get('model'));
    },
    editStep: function() {
      this.set('isEditing', true);
    }
  }
});

Baker.IngredientEditController = Ember.ObjectController.extend({
  init: function() {
    var self = this;
    this._super();
    Ember.RSVP.Promise.all([this.store.find('foodUnit')])
      .then(function(data){
        var foodUnits = data[0];
        self.set('foodUnits', foodUnits);
    });
  },
  isEditing: true,
  foodUnit: 'each',
  foods: [],
  listOfIngredients: function() {
    var self=this;
    var foodUnit = this.get('foodUnit');
    var store = this.store;
    store.find('foodUnit', foodUnit)
      .then(function(foodUnit) {
        store.find('unitType', foodUnit.get('unitType.id'))
          .then(function(foodUnitType) {
            self.set('foods', foodUnitType.get('foods'));
          });
    });
  }.property('foodUnit'),
  actions: {
    editIngredient: function() {
      this.set('isEditing', true);
    },
    saveIngredient: function() {
      var self = this;
      this.set('isEditing', false);
      this.store.find('foodUnit', this.get('foodUnit')).then(function(unit){
        self.set('unit', unit);
      });
      this.store.find('food', this.get('name')).then(function(food){
        self.set('food', food);
      });
      this.get('parentController.parentController.ingredients').addObject(this.get('model'));
    },
    deleteIngredient: function() {
      var ingredient = this.get('model');
      this.get('parentController.ingredients').removeObject(ingredient);
      this.get('parentController.parentController.ingredients')
        .removeObject(ingredient);
      ingredient.deleteRecord();
    },
  }
});








//

Baker.RecipesIndexController = Ember.ArrayController.extend({
  needs: ['application'],

});

Baker.CreateAccountController = Ember.Controller.extend({
  needs: 'application',
  isLoggedIn: Ember.computed.alias('controllers.application.isLoggedIn'),
  actions: {
    createUser: function() {
      var self = this;
      var username = this.get('username');
      var email = this.get('email');
      var password = this.get('password');
      //create the user in firebase for auth/security
      Baker.ref.createUser({
        email : email,
        password : password
      }, function(error) {
        // user created w/o error
        if (error === null) {
          // user authenticated with Firebase
          // create the user on server for data persistence. must first
          // login to get and set the id
          Baker.ref.authWithPassword({email:email, password: password},
            function(error, authData){
            var id = authData.uid;
            var user = self.store.createRecord('user', {
              id: id,
              username: username,
              email: email
            });
            localStorage.setItem('bakerAuth', JSON.stringify(authData));
            user.save();
            self.set('username', '');
            self.set('email', '');
            self.set('password', '');
            self.transitionToRoute('login');
          });
          // now that user is stored with id matching login id, log out
          Baker.ref.unauth();
        // user not created
        } else {
          console.log("Error creating user:", error);
        }
      });
    }
  }
});

Baker.RecipesNewController = Ember.Controller.extend({
  needs: 'application',
  timeUnit: ["mins", "hrs"],
  recipeType: ["breakfast", "lunch", "dinner", "dessert"],
  selectedRecipe: null,
  tempUnit: ["Farenheit", "Celcius"],
  selectedTempUnit: "Farenheit",
  author: Ember.computed.alias('controllers.application.currentUser'),
  ingredients: [],
  steps: [],
  isPublic: false,
  imgURL: '',
  actions: {
    addPic: function() {
      var self = this;
      filepicker.setKey("A2XfJXxUSw61YLa6JvOkgz");

      filepicker.pickAndStore({},{},function(Blobs){
        self.set('imgURL', Blobs[0].url);
      });
    },
    saveRecipe: function() {
      var self=this;
      var workflow = Baker.NewRecipeWorkflow.create({
        attributes: {
          name: this.name,
          isPublic: this.get('isPublic'),
          recipeType: this.get('selectedRecipeType'),
          prepTime: this.get('prepTime'),
          prepTimeUnit: this.get('selectedPrepTimeUnit'),
          cookTime: this.get('cookTime'),
          cookTimeUnit: this.get('selectedCookTimeUnit'),
          cookTemp: this.get('cookTemp'),
          cookTempUnit: this.get('selectedCookTempUnit'),
          yield: this.get('yield'),
          yieldUnit: this.get('yieldUnit'),
          notes: this.get('notes'),
          imgURL: this.get('imgURL')
        },
        ingredients: this.get('ingredients'),
        steps: this.get('steps'),
        store: this.get('store'),
        authorID: this.get('author.id')
      });
      workflow.run().then(function(id) {
        self.transitionToRoute('recipes.recipe', id);
      });
    },
    addStep: function() {
      var stepNum = this.get('steps').length + 1;
      var newStep = this.store.createRecord('step', {
        stepNum: stepNum,
      });
      this.get('steps').addObject(newStep);
    }
  }
});

Baker.StepController = Ember.ObjectController.extend({
  isEditing: true,
  actions: {
    addIngredient: function() {
      var newIngredient = this.store.createRecord('ingredientFood');
      this.get('ingredients').addObject(newIngredient);
    },
    saveStep: function() {
      this.set('isEditing', false);
      this.get('parentController.steps').addObject(this.get('model'));
    },
    editStep: function() {
      this.set('isEditing', true);
    }
  }
});

Baker.IngredientController = Ember.ObjectController.extend({
  init: function() {
    var self = this;
    this._super();
    Ember.RSVP.Promise.all([this.store.find('foodUnit')])
      .then(function(data){
        var foodUnits = data[0];
        self.set('foodUnits', foodUnits);
    });
  },
  isEditing: true,
  foodUnit: 'each',
  foods: [],
  listOfIngredients: function() {
    var self=this;
    var foodUnit = this.get('foodUnit');
    var store = this.store;
    store.find('foodUnit', foodUnit)
      .then(function(foodUnit) {
        store.find('unitType', foodUnit.get('unitType.id'))
          .then(function(foodUnitType) {
            self.set('foods', foodUnitType.get('foods'));
          });
    });
  }.property('foodUnit'),
  actions: {
    editIngredient: function() {
      this.set('isEditing', true);
    },
    saveIngredient: function() {
      var self = this;
      this.set('isEditing', false);
      this.store.find('foodUnit', this.get('foodUnit')).then(function(unit){
        self.set('unit', unit);
      });
      this.store.find('food', this.get('name')).then(function(food){
        self.set('food', food);
      });
      console.log(this.get('model'));
      this.get('parentController.parentController.ingredients').addObject(this.get('model'));
    },
    deleteIngredient: function() {
      var ingredient = this.get('model');
      this.get('parentController.ingredients').removeObject(ingredient);
      this.get('parentController.parentController.ingredients')
        .removeObject(ingredient);
      ingredient.deleteRecord();
    },
  }
});








//

Baker.User = DS.Model.extend({
  username: DS.attr('string'),
  email: DS.attr('string'),
  recipes: DS.hasMany('recipe', {async: true}),
  pantry: DS.hasMany('pantry_food', {embedded: true})
});

Baker.Recipe = DS.Model.extend({
  author: DS.belongsTo('user'),
  name: DS.attr('string'),
  isPublic: DS.attr('boolean'),
  yieldCount: DS.attr('number'),
  yieldUnit: DS.attr('string'),
  recipeType: DS.attr('string'),
  imgURL: DS.attr('string'),
  prepTime: DS.attr('number'),
  prepTimeUnit: DS.attr('string'),
  cookTime: DS.attr('number'),
  cookTimeUnit: DS.attr('string'),
  cookTemp: DS.attr('number'),
  cookTempUnit: DS.attr('string'),
  ingredients: DS.hasMany('ingredientFood', {async: true}),
  steps: DS.hasMany('step', {embedded: true}),
  notes: DS.attr('string')
});

Baker.Step = DS.Model.extend({
  stepNum: DS.attr('number'),
  description: DS.attr('string'),
  ingredients: DS.hasMany('ingredientFood', {async: true})
});

Baker.PublicRecipe = DS.Model.extend({
  recipes: DS.hasMany('recipe', {async: true})
});

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

Baker.NewRecipeWorkflow = Ember.Object.extend({
  fetchAuthor: function() {
    var self = this;
    return this.store.find('user', this.authorID)
      .then(function(author) {
        self.set('author', author);
      });
  },

  saveIngredients: function() {
    var self = this;
    this.ingredients.forEach(function(ingredient) {
      ingredient.save();
      self.get('recipe.ingredients').addObject(ingredient);
      self.get('recipe').save();
    });
    return this.get('recipe.id');
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

  addRecipeToPublic: function() {
    var self = this;
    if (this.get('recipe.isPublic')) {
      var publicRecipe = this.store.find('publicRecipe', 'all')
        .then(function(collection) {
          collection.get('recipes').addObject(self.get('recipe'));
          return publicRecipe.save;
      });
    }
  },

  //clear form and redirect to the recipe
  run: function() {
    return this.fetchAuthor()
      .then(this.makeRecipe.bind(this))
      .then(this.addRecipeToAuthor.bind(this))
      .then(this.addRecipeToPublic.bind(this))
      .then(this.saveIngredients.bind(this));
  }
});
