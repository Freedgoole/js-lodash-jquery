let newsApplication = (function() {
  let arrNewSource = [];

  // copying an array with the addition of id to each element and saving to the local database
  let dataProcessing = data => {
    data.map((item, id) => {
      arrNewSource.push({
        ...item,
        id,
        dateView: new Date()
      });
    });
    // Saving database to localStore user
    db.getDBLocalStorage(arrNewSource);
    renderSourcesNews(arrNewSource);
  };

  let renderSourcesNews = data => {
    //DisplaySources Items Sources
    data.map(item => ui.displaySourcesNews(item));
    let item = document.querySelectorAll(".nav-ist_item");
    // init event and display news
    item.forEach(item =>
      item.addEventListener("click", () =>
        renderBodyNews(item.dataset.index, data)
      )
    );
  };

  //Display Body News
  let renderBodyNews = (id, arr) => {
    let news = arr.filter(item => item.id == id);
    news.map(item => ui.displayNews(item));
  };
  return { dataProcessing };
})();
