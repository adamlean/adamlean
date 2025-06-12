"use strict";

document.addEventListener('DOMContentLoaded', function () {
  fetch('../data/articles.json').then(function (response) {
    return response.json();
  }).then(function (data) {
    var container = document.getElementById('posts-container');
    data.forEach(function (post) {
      var postEl = document.createElement('div');
      postEl.classList.add('post');
      postEl.innerHTML = "\n          <h2>".concat(post.title, "</h2>\n          <p><strong>").concat(post.date, "</strong> | ").concat(post.tags.join(', '), "</p>\n          <p>").concat(post.excerpt, "</p>\n          <hr>\n        ");
      container.appendChild(postEl);
    });
  })["catch"](function (error) {
    console.error('Ошибка при загрузке постов:', error);
  });
});