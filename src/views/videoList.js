var VideoListView = Backbone.View.extend({
 

  //$el: this.template,
  //collection of videos then calls videoListEntry View
  initialize: function () {
    // this.collection.each(function(videoModel) {
    //   this.videoEntry = new VideoListEntryView({$el: '.video-list', model: videoModel});
    //this.$el.append('<div class="video-list">' + videoEntry.render() + '</div>');
    //});
    //this.listenTo(this.collection, 'sync', this.render);
    // this.render();
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function() {
    
    this.$el.children().detach();
    this.$el.html(this.template());

    this.$('.video-list').append(
      this.collection.map(function(videoModel) {
        return new VideoListEntryView({model: videoModel}).render().el;
      })
    );


    // return this;
    // this.$el.children().detach();
    // this.$el.html(this.template());
    // //this.$el.append(this.videoListEntry);
    // console.log(this.$el);
    
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});