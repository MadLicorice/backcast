var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    //console.log(this.collection);
    //this.model = this.collection.models[0];
    // this.listenTo(this.collection, 'sync', function() {
    //   this.model = this.collection.models[0];
      
    //   //this.render();
    // });
    this.listenTo(this.collection, 'select', this.handleSelect);
  },

  handleSelect: function(selected) {
    this.model = selected;
    this.render();
  },

  render: function() {
    if (this.model) {
      this.$el.html(this.template(this.model.attributes));
    }
    //this.$el.html(this.template());
    //this.model = this.collection.at(0);
    //Problem is here.
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
