var AppView = Backbone.View.extend({

  el: '#app',
  //videoListEntry: [],

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    // this.sample = _.sample(this.videos, 2);
    //this.ListenTo(this.videos, "change", replayCallBack)
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    //this.$el.append(this.videoList.$el);
    //this.$el.append(this.videoListEntry.$el);
    //this.$el.append(this.videoPlayer.$el);
    // this.videoList.render();
    new VideoListView({el: this.$('.list'), collection: this.videos}).render();
    new VideoPlayerView({el: this.$('.player'), collection: this.videos, model: this.videos.at(0)}).render();
    new SearchView({el: this.$('.search'), collection: this.videos}).render();
    

    return this;
  },

  template: templateURL('src/templates/app.html')

});
