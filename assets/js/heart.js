let heartIcon2 = document.getElementById('heart3');
let isHeartFull2 = false;

function toggleHeart() {
  if (isHeartFull2) {
    // 如果愛心是實心的，切換為空心
    heartIcon2.classList.remove('text-danger');
    isHeartFull2 = false;
  } else {
    // 如果愛心是空心的，切換為實心
    heartIcon2.classList.add('text-danger');
    isHeartFull2 = true;
  }
}