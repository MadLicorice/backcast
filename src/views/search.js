var SearchView = Backbone.View.extend({

  events: {
    'click button': 'searchVids'
  },
  
  searchVids: function() {
    var query = this.$('.form-control').val().trim();
    console.log(query);
    if (query) {
      this.collection.search(query);
    }
  },
    
  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
