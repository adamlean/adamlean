fetch('../data/articles.json')
  .then(res => res.json())
  .then(posts => {
    const container = document.getElementById('posts');
    posts.forEach(post => {
      container.innerHTML += `
        <div class="post">
          <h2><a href="${post.url}">${post.title}</a></h2>
          <p>${post.date} | ${post.tags}</p>
          <p>${post.excerpt}</p>
        </div>
      `;
    });
  });
