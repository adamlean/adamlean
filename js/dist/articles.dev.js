"use strict";

fetch('../data/articles.json').then(function (res) {
  return res.json();
}).then(function (posts) {
  var container = document.getElementById('posts');
  posts.forEach(function (post) {
    container.innerHTML += "\n        <div class=\"post\">\n          <h2><a href=\"".concat(post.url, "\">").concat(post.title, "</a></h2>\n          <p>").concat(post.date, " | ").concat(post.tags, "</p>\n          <p>").concat(post.excerpt, "</p>\n        </div>\n      ");
  });
});