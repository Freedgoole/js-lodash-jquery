//Config Application
const config = {
  api: {
    client_id: "94f2167d19354c36af1ea90f71a268f7",
    url: "https://newsapi.org/v2/top-headlines?country=us&apiKey="
  },
  localStorage: {
    storage_time: 120000
  },
  ui: {
    wrapperList: document.getElementById("nav-list"),
    wrapperContent: document.querySelector(".wrapper-new"),
    defaultPhoto: "./img/default-img.png",
    titleLength: 65 // character limit from title in list Item :hover
  }
};

// Initialization of additional Classes
const ui = new UI(config.ui);
const db = new LocalStorage(config.localStorage);
const newsApi = new NewsApi(config.api);

//Head Module
let app = (function() {
  let load = function() {
    if (window.localStorage && localStorage.getItem("db") === null) {
      newsApi
        .handlerNewsApi()
        .then(data => newsApplication.dataProcessing(data.articles))
        .catch(_error => ui.showErrorMsg());
    } else {
      newsApplication.dataProcessing(db.setDBLocalStorage());
    }
    db.clearingLocalStorage();
  };
  return { load };
})();

//start render project
app.load();
