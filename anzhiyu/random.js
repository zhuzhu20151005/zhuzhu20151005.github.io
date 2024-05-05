var posts=["2024/05/03/博客首页/","2024/05/04/运动打卡/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };