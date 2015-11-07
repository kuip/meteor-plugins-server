HTTP.methods({
    '/api/:query': function(data) {

      var query = JSON.parse(this.params.query)
      console.log(query)
      this.setContentType('application/json')
      this.setStatusCode(200)
      return PluginsServer.persist.Plugins.find(query).fetch()
    }
  });