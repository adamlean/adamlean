document.addEventListener('DOMContentLoaded', function () {
  fetch('../data/articles.json')
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById('posts-container');

      data.forEach(post => {
        const postEl = document.createElement('div');
        postEl.classList.add('post');

        postEl.innerHTML = `
          <h2>${post.title}</h2>
          <p><strong>${post.date}</strong> | ${post.tags.join(', ')}</p>
          <p>${post.excerpt}</p>
          <hr>
        `;

        container.appendChild(postEl);
      });
    })
    .catch(error => {
      console.error('Ошибка при загрузке постов:', error);
    });
});
