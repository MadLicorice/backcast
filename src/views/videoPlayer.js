var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    console.log(this.model);
    this.render();
  },

  render: function() {
    console.log(this.model);
    this.$el.children().detach();
    //this.$el.html(this.template());
    this.$el.html(this.template(this.model.attributes)); 
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
