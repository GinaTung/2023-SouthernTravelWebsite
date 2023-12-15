// auth.js
const userName =document.querySelector(".userName");
const userId = localStorage.getItem('userId');

// 函數用於在頁面載入時檢查登入狀態
function checkLoggedInStatus() {
    if (userId) {
        // 登入狀態存在，你可以在這裡執行相應的操作
        console.log('已登入，用戶 ID：', userId);

        // 檢查是否存在 .userName 類別的元素
        const userName = document.querySelector(".userName");
        if (userName) {
            userName.innerText = `用戶 ID：${userId}`;
        } 
    }
}

// 在頁面載入時檢查登入狀態
document.addEventListener('DOMContentLoaded', checkLoggedInStatus);




