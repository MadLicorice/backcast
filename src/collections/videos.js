var Videos = Backbone.Collection.extend({

  model: Video,
  url: 'https://www.googleapis.com/youtube/v3/search',

  search: function(query) {
    this.fetch({
      data: {
        part: 'snippet',
        key: 'AIzaSyAuN9zBf-8imzpIv3ASkR5kZ4iPvrefEKw',
        q: query,
        maxResults: 5,
        type: 'video', 
        videoEmbeddable: 'true'
      }
    });
  },

  parse: function(response) {
    return response.items;
  }
});