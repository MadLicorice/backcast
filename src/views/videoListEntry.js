var VideoListEntryView = Backbone.View.extend({

  events: {
    'click .video-list-entry-title': 'handleClick'
  },
  
  handleClick: function () {
    this.model.select();
  },

  initialize: function() {
    // this.on('click', function() {
      
    // });
    //console.log(this.model.attributes);
    //console.log('videoListEntry this ', this.$el);
    // this.$el.find('.media-object').html(this.model.attributes.snippet.thumbnails.high.url);
    // this.$el.find('.video-list-entry-title').html(this.model.attributes.snippet.thumbnails.title);
    // this.$el.find('.video-list-entry-detail').html(this.model.attributes.snippet.description);
    //console.log('videoListEntry this after mods ', this.$el);

    // this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));  
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});