var SearchView = Backbone.View.extend({

  events: {
    'click button': 'searchVids',
    'keyup input': 'searchOnEnter'
  },
  
  searchVids: function() {
    var query = this.$('input').val();
    console.log(query);
    if (query) {
      this.collection.search(query);
    }
  },

  searchOnEnter: function(e) {
    if (e.keyCode === 13) {
      this.searchVids();
    }
  },
    
  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
