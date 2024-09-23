var posts=["posts/4a17b156.html","posts/621998ca.html","posts/545a6120.html","posts/6ed5eebe.html","posts/c68db7e6.html","posts/cd988ed5.html","posts/8af9e237.html","posts/6b830637.html","posts/97a0a1c6.html","posts/5d06cb2d.html","posts/f5f9fa9b.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };