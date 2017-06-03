var searchYouTube = ({key, query, max = 10}, callback) => {
  // options parameter 
    // most likely takes in the search query
  // callback is a function
    // passes on the search Query into the getRequest

  $.get('https://www.googleapis.com/youtube/v3/search',
    {
      part: 'snippet',
      key: key,
      q: query,
      maxResults: max,
      type: 'video',
      videoEmbeddable: 'true',
    }
  )
  
  .done(({items}) => {
    if (callback) {
      callback(items);
    }
  });

  // var youtubeUrl = 'https://www.googleapis.com/youtube/v3/search';

  // $.ajax({
  //   url: youtubeUrl,
  //   data: search,
  //   success: callback,
  //   dataType: null

  // });

};

window.searchYouTube = searchYouTube;