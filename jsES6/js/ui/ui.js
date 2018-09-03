class UI {
  constructor(config) {
    let { wrapperList, wrapperContent, titleLength } = config;
    (this.wrapperList = wrapperList),
      (this.wrapperContent = wrapperContent),
      (this.titleLength = titleLength); // character limit from title in list Item
    this.validateDate = /[A-Z]/g; // validating Date, remove words
  }

  // Display on the screen sources news
  displaySourcesNews(items) {
    const { title, source, id } = items;
    this.wrapperList.innerHTML += `
    <li class="nav-ist_item" data-index=${id}>
        <h3 class="nav-list_item-title">${source.name}</h3>
        <p class="nav-list_item-desc">
            ${title.slice(0, this.titleLength) + "..."} 
        </p>
        <div class="hover_nav-list_item">read now</div>
    </li>
    `;
  }
  // Display error
  showErrorMsg() {
    this.wrapperContent.innerHTML = `
        <div>Oooooopss!!! Reload page please</div>
    `;
  }
  displayNews(repos) {
    const { title, url, urlToImage, author, publishedAt, id } = repos;
    UI.activeItem(id);
    this.wrapperContent.innerHTML = `
          <div class="new-content">
            <time class="new-content_date">${publishedAt.replace(
              this.validateDate,
              " "
            )}</time> 
            <h3 class="new-content_title">${title}</h3>
            <p class="new-content_author">${
              author ? "Author:" + " " + author : UI.authorIncognito()
            }</p>
            <a target="_blank" href=${url} class="new-content_link">go to home page</a>
          </div>
          <div class="new-img">
            <img src=${urlToImage ? urlToImage : UI.defaultPhotoNews()} alt="">
          </div> 
      `;
  }

  // Display Default photo news if not attached DB
  static defaultPhotoNews() {
    return `img/default-img.png`;
  }

  // Display Author photo news if not attached DB
  static authorIncognito() {
    return `
        <span class="not-author">author unknown</span>
        `;
  }
  static activeItem(id) {
    document.querySelector(".active") &&
      document.querySelector(".active").classList.remove("active");
    document.querySelector(`[data-index = "${id}"]`).classList.add("active");
  }
}
