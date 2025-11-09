let isLiked = false;
let isReposted = false;

const likeButton = document.getElementById('like-button');
const likeCount = document.getElementById('like-count');
const repostButton = document.getElementById('repost-button');
const repostCount = document.getElementById('repost-count');

likeButton.addEventListener('click', function(e) {
  e.preventDefault();
  isLiked = !isLiked;
  
  if (isLiked) {
    likeCount.textContent = parseInt(likeCount.textContent) + 1;
    likeButton.classList.add('liked');
  } else {
    likeCount.textContent = parseInt(likeCount.textContent) - 1;
    likeButton.classList.remove('liked');
  }
});

repostButton.addEventListener('click', function(e) {
  e.preventDefault();
  isReposted = !isReposted;
  
  if (isReposted) {
    repostCount.textContent = parseInt(repostCount.textContent) + 1;
    repostButton.classList.add('reposted');
  } else {
    repostCount.textContent = parseInt(repostCount.textContent) - 1;
    repostButton.classList.remove('reposted');
  }
});
