var searchYouTube = (options, callback) => {
  // options parameter 
    // most likely takes in the search query
  // callback is a function
    // passes on the search Query into the getRequest

  
};

window.searchYouTube = searchYouTube;

// buildApiRequest('GET',


  var youtubeUrl = 'https://www.googleapis.com/youtube/v3/search';

  $.ajax({
    url: youtubeUrl,
    data: options,
    success: callback,
    dataType: null

  });

search: function(query) {
  var options = this.fetch( {
    var options: {
      part: 'snippet',
      key: window.YOUTUBE_API_KEY,
      q: query,
      max: 5,
      type: 'video',
      videoEmbeddable: 'true',
  }
});
  
//   }) 
// }