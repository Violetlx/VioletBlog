var posts=["posts/4a17b156.html","posts/undefined.html","posts/f5f9fa9b.html","posts/97a0a1c6.html","posts/8af9e237.html","posts/c68db7e6.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };