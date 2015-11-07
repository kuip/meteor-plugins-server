PluginsServer = {}
PluginsServer.persist = {}
PluginsServer.persist.Plugins = new Mongo.Collection('plugins')
PluginsServer.groups = ['meteor', 'structural', 'The Clinician']

TabularTables = {}
Schemas = {}
Schemas.Plugins = new SimpleSchema({
    key: {
        type: String,
        label: "Key"
    },
    title: {
        type: String,
        label: "Title"
    },
    description: {
        type: String,
        label: "Description"
    },
    isRemovable: {
        type: Boolean,
        label: "Removable",
        allowedValues: [true, false]
    },
    isActive: {
        type: Boolean,
        label: "Active",
        allowedValues: [true, false]
    },
    repository: {
        type: String,
        label: "Repository"
    },
    group: {
        type: String,
        label: "Group",
        allowedValues: PluginsServer.groups
    },
    git: {
        type: String,
        label: "Git",
        optional: true
    }
});

//PluginsServer.persist.Plugins.attachSchema(PluginsServer.Schemas.Plugins)

TabularTables.Plugins = new Tabular.Table({
  name: "Plugins",
  collection: PluginsServer.persist.Plugins,
  columns: [
    {data: "key", title: "Key"},
    {data: "title", title: "Title"},
    {data: "description", title: "Description"},
    {data: "repository", title: "Repository"},
    {data: "group", title: "Group"},
  ]
});

PluginsServer.choices = [
  {key: "meteor-base", title: "Meteor Base", description: "Packages every Meteor app needs to have", isRemovable: false, isActive: true, repository: "https://github.com/meteor/meteor/tree/devel/packages/meteor-base", group: "meteor"},
  {key: "mobile-experience", title: "Mobile Experience", description: "Packages for a great mobile UX", isRemovable: false, isActive: true, repository: "https://github.com/meteor/meteor/tree/devel/packages/mobile-experience", group: "meteor"},
  {key: "mongo", title: "Mongo DB", description: "The database Meteor supports right now", isRemovable: false, isActive: true, repository: "https://github.com/meteor/meteor/tree/devel/packages/mongo", group: "meteor"},
  {key: "blaze-html-templates", title: "Blaze HTML Templates", description: "Compile .html files into Meteor Blaze views", isRemovable: false, isActive: true, repository: "https://github.com/meteor/meteor/tree/devel/packages/blaze-html-templates", group: "meteor"},
  {key: "session", title: "Session", description: "Client-side reactive dictionary for your app", isRemovable: false, isActive: true, repository: "https://github.com/meteor/meteor/tree/devel/packages/session", group: "meteor"},
  {key: "jquery", title: "Jquery", description: "Helpful client-side library", isRemovable: false, isActive: true, repository: "https://github.com/meteor/meteor/tree/devel/packages/jquery", group: "meteor"},
  {key: "tracker", title: "Tracker", description: "Meteor's client-side reactive programming library", isRemovable: false, isActive: true, repository: "https://github.com/meteor/meteor/tree/devel/packages/tracker", group: "meteor"},
  {key: "standard-minifiers", title: "Standard Minifiers", description: "JS/CSS minifiers run for production mode", isRemovable: false, isActive: true, repository: "https://github.com/meteor/meteor/tree/devel/packages/standard-minifiers", group: "meteor"},
  {key: "es5-shim", title: "ES5 Shim", description: "ECMAScript 5 compatibility for older browsers.", isRemovable: false, isActive: true, repository: "https://github.com/meteor/meteor/tree/devel/packages/es5-shim", group: "meteor"},
  {key: "ecmascript", title: "ES5", description: "Enable ECMAScript2015+ syntax in app code", isRemovable: false, isActive: true, repository: "https://github.com/meteor/meteor/tree/devel/packages/ecmascript", group: "meteor"},
  {key: "autopublish", title: "Autopublish", description: "Publish all data to the clients (for prototyping)", isRemovable: true, isActive: true, repository: "https://github.com/meteor/meteor/tree/devel/packages/autopublish", group: "meteor"},
  {key: "insecure", title: "Insecure", description: "Allow all DB writes from clients (for prototyping)", isRemovable: true, isActive: true, repository: "https://github.com/meteor/meteor/tree/devel/packages/insecure", group: "meteor"},
  {key: "underscore", title: "Underscore", description: "", isRemovable: true, isActive: false , repository: "https://github.com/meteor/meteor/tree/devel/packages/underscore", group: "meteor"},
  {key: "reactive-var", title: "Reactive Var", description: "", isRemovable: false, isActive: false , repository: "https://github.com/meteor/meteor/tree/devel/packages/reactive-var", group: "meteor"},
  {key: "aldeed:collection2", title: "Collection 2", description: "", isRemovable: true, isActive: false , repository: "https://github.com/aldeed/meteor-collection2", group: "structural"},
  {key : "audit-argument-checks", title : "Audit Argument Checks", description : "This package causes Meteor to require that all arguments passed to methods and publish functions are checked.", isRemovable : true, isActive : false, repository : "https://github.com/meteor/meteor/tree/devel/packages/audit-argument-checks", group: "meteor"},
  {key: "accounts-ui", title: "Accounts UI", description: "A turn-key user interface for Meteor Accounts.", isRemovable: true, isActive: false , repository: "https://github.com/meteor/meteor/tree/devel/packages/accounts-ui", group: "meteor"},
  {key: "coffeescript", title: "Coffeescript", description: "CoffeeScript is a little language that compiles into JavaScript. It provides a simple syntax without lots of braces and parentheses. The code compiles one-to-one into the equivalent JS, and there is no interpretation at runtime.", isRemovable: true, isActive: false , repository: "https://github.com/meteor/meteor/tree/devel/packages/coffeescript", group: "meteor"},
  {key: "markdown", title: "Markdown", description: "This package lets you use Markdown in your templates.", isRemovable: true, isActive: false , repository: "https://github.com/meteor/meteor/tree/devel/packages/markdown", group: "meteor"}
]