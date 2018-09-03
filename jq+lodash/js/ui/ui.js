//Template Source
let templateSource = _.template(
  "<% _.forEach(news, function(item) { %>" +
    "<li class='nav-ist_item' data-index='<%- item.id %>'>" +
    "<h3 class='nav-list_item-title'><%- item.source.name %></h3>" +
    "<p class='nav-list_item-desc'><%- item.title %></p>" +
    "<div class='hover_nav-list_item'>read now</div>" +
    "</li>" +
    "<% }); %>"
);

//Template display News
let templateNews = _.template(
  "<% _.forEach(filter, function(item) { %>" +
    "<div class='new-content'>" +
    "<time class='new-content_date'>'<%- item.publishedAt%></time>" +
    "<h3 class='new-content_title'><%- item.title %></h3>" +
    "<p class='new-content_author'><%- item.author%></p>" +
    "<a target='_blank' href='<%- item.url%>' class='new-content_link'>go to home page</a>" +
    "</div>" +
    "<div class='new-img'>" +
    "<img src='<%- item.urlToImage%>' alt=''>" +
    "</div>" +
    "<% }); %>"
);

//Template display Error
let templateError = _.template("Opss reload pls....");
