Template.registerHelper("log", function(opt){
  console.log(opt)
});
Template.registerHelper('TabularTables', TabularTables)

Template.view_table.onRendered(function(){
    Session.set("schema", "Plugins")
    window.windowType = "MeteorPluginsServer"
})

Template.view_table.helpers({
  selector: function (){
    var select = Session.get("filter_selector")
    console.log(select)
    return select ? select : null
  },
  url: function() {
    var select = Session.get("filter_selector")
    if(!select)
      select = {}

    return '/api/' + encodeURIComponent(JSON.stringify(select))
  },
  no: function() {
    var select = Session.get("filter_selector")
    if(!select)
      select = {}

    return PluginsServer.persist.Plugins.find(select).count()
  }
});

Template.view_table.events({
  'click .plugins_api': function(e, templ) {
    try {
      var type = window.parent.windowType
    }
    catch(err) {
      e.preventDefault()
      console.log('clicked api server')
      var select = Session.get("filter_selector")
      if(!select)
        select = {}
      window.parent.postMessage(
        PluginsServer.persist.Plugins.find(select).fetch(),
        '*')
    }
  }
})