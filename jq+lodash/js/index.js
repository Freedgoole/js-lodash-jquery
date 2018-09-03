var newsApplication = (function() {
  // Initialization of variables and parameters
  var news = []; //local array News Data Base
  var time_localClear = 120000; //  time clear local Data Base
  var wrapper_list = $("#nav-list");
  var wrapper_new = $("#wrapper-new");

  // copying an array with the addition of id to each element and saving to the local database
  var handlerSuccessAPI = function(data) {
    data.map(function(item, id) {
      news.push({ ...item, id });
    });
    saveClientLocalDataBase(news);
    displaySources(news);
  };

  var saveClientLocalDataBase = function(data) {
    localStorage.setItem("db", JSON.stringify(data));
  };

  var clearClientDataBase = function() {
    setTimeout(function() {
      localStorage.removeItem("db");
    }, time_localClear);
  };

  var displaySources = function(news) {
    let templateSources = templateSource({ news });
    wrapper_list.append(templateSources);
  };

  var displayNews = function(index) {
    var filter = $.grep(news, function(item) {
      return item.id == index;
    });
    var templateNEW = templateNews({ filter });
    wrapper_new.html(templateNEW);
  };

  var displayError = function(data) {
    let templateError2 = templateError();
    wrapper_new.html(templateError2);
  };

  var activeItemSources = function(element) {
    $(".active").removeClass("active");
    $(element).addClass("active");
  };

  return {
    clearClientDataBase,
    handlerSuccessAPI,
    displayNews,
    activeItemSources,
    displayError
  };
})();

$(document).on("click", ".nav-ist_item", function() {
  var index = $(this).data("index");
  newsApplication.displayNews(index);
  newsApplication.activeItemSources(this);
});
