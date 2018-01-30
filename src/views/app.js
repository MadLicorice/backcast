var AppView = Backbone.View.extend({

  el: '#app',
  //videoListEntry: [],

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.videoList = new VideoListView({collection: this.videos});
    // this.sample = _.sample(this.videos, 2);
    console.log(this.videos.models[0]);
    this.videoPlayer = new VideoPlayerView( {model: this.videos.models[0]}); //_.sample(list, [n]) 
    
    // this.videoList.collection.each(function(videoModel) {
    //   var videoEntry = new VideoListEntryView({$el: '.video-list', model: videoModel});
    //   //this.videoListEntry.push(videoEntry);
    // });
    //this.videoEntry = new VideoListEntryView({collection: this.videos});
    //this.videoListl.$el
    //this.videoListEntry = new VideoListEntryView();
    // _.bindAll(this, 'render');
    //this.model.on('change', this.render);
    //this.model.on('destroy', this.remove);
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    //this.$el.append(this.videoList.$el);
    //this.$el.append(this.videoListEntry.$el);
    //this.$el.append(this.videoPlayer.$el);
    // this.videoList.render();
    new VideoListView({el: this.$('.list'), collection: this.videos}).render();
    new VideoPlayerView({el: this.$('.player'), model: this.videos.models[0]}).render().$el;
    

    return this;
  },

  template: templateURL('src/templates/app.html')

});
