var handlerLoadApi = function() {
  var _url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=";
  var _key = "94f2167d19354c36af1ea90f71a268f7";
  $.ajax({
    type: "GET",
    url: _url + _key,
    success: function(data) {
      newsApplication.handlerSuccessAPI(data.articles);
    },
    error: function(data) {
      newsApplication.displayError(data);
    }
  });
};
