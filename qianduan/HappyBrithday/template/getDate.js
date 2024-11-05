// 获取当前年份
const currentYear = new Date().getFullYear();

// 设置生日日期（月从0开始计数，所以7代表8月）
const birthday = new Date(2024, 0, 16); // 注意：月份是从0开始计数的，所以7是8月

function updateCountdown() {
    const now = new Date();
    const difference = birthday - now;

    // 计算剩余的天数、小时数、分钟数和秒数
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    // 更新倒计时显示
    document.getElementById("days").textContent = days.toString().padStart(2, "0") + "天";
    document.getElementById("hours").textContent = hours.toString().padStart(2, "0") + "小时";
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0") + "分钟";
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0") + "秒";
}

// 每秒更新一次倒计时
setInterval(updateCountdown, 1000);


// 添加点击事件监听器
document.querySelector('.letter').addEventListener('click', function() {
    const daysElement = document.getElementById('days');
    const days = parseInt(daysElement.innerText, 10);
    if (days <= 0) {
        // 跳转到另一个HTML页面
        window.location.href = 'template/main.html'; 
    } else {
        // 显示弹窗提示
        alert('神秘力量导致抽不出来');
    }
});