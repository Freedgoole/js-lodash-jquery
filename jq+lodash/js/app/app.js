var app = (function() {
  var load = function() {
    if (window.localStorage && localStorage.getItem("db") === null) {
      handlerLoadApi();
    } else {
      var dataBase = JSON.parse(localStorage.getItem("db"));
      newsApplication.handlerSuccessAPI(dataBase);
      newsApplication.clearClientDataBase();
    }
  };
  return {
    load
  };
})();

//Start program App
app.load();
