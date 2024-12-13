// 滚动图片部分
const carousel = document.querySelector('.carousel');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

// 更新滚动和导航点
function updateCarousel() {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

// 圆点点击事件
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
    });
});






// 添加滚动触发的淡入效果
const uiItems = document.querySelectorAll('.ui-item');

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;

    uiItems.forEach((item) => {
        const itemTop = item.getBoundingClientRect().top;

        if (itemTop < windowHeight * 0.8) {
            item.style.opacity = 1;
            item.style.transform = 'translateY(0)';
        } else {
            item.style.opacity = 0;
            item.style.transform = 'translateY(20px)';
        }
    });
});






// 获取所有的 UI 图片和按钮
const uiImages = document.querySelectorAll('.ui-image');
const leftButton = document.querySelector('.nav-button.left');
const rightButton = document.querySelector('.nav-button.right');

let isAnimating = false;

// 更新 UI 显示逻辑
function updateUI(index) {
    if (isAnimating) return; // 如果正在动画中，直接返回

    console.log(`Switching to index: ${index}`);
    isAnimating = true; // 锁定动画

    uiImages.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });

    setTimeout(() => {
        isAnimating = false; // 解锁
    }, 300); // 动画持续时间
}

// 左侧按钮点击逻辑
leftButton.addEventListener('click', () => {
    if (isAnimating) return;
    currentIndex = (currentIndex - 1 + uiImages.length) % uiImages.length;
    updateUI(currentIndex);
});

// 右侧按钮点击逻辑
rightButton.addEventListener('click', () => {
    if (isAnimating) return;
    currentIndex = (currentIndex + 1) % uiImages.length;
    updateUI(currentIndex);
});





// 家居场景部分
const hotspots = document.querySelectorAll('.hotspot'); // 获取所有热区
let dynamicImage = null; // 用于动态插入的图片

hotspots.forEach((hotspot) => {
    // 鼠标进入热区
    hotspot.addEventListener('mouseenter', (event) => {
        const imageUrl = event.target.dataset.image; // 获取图片 URL
        if (imageUrl) {
            dynamicImage = document.createElement('img'); // 创建 img 元素
            dynamicImage.src = imageUrl; // 设置图片来源
            dynamicImage.classList.add('dynamic-image'); // 添加样式
            document.body.appendChild(dynamicImage); // 添加到 body 中
        }
    });

    // 鼠标移动时更新图片位置
    hotspot.addEventListener('mousemove', (event) => {
        if (dynamicImage) {
            dynamicImage.style.left = `${event.pageX + 10}px`; // 图片位置右偏移
            dynamicImage.style.top = `${event.pageY + 10}px`; // 图片位置下偏移
        }
    });

    // 鼠标离开热区
    hotspot.addEventListener('mouseleave', () => {
        if (dynamicImage) {
            dynamicImage.remove(); // 从 DOM 中移除图片
            dynamicImage = null; // 清空引用
        }
    });
});




// 播放音频逻辑
document.querySelectorAll('.hotspot').forEach(hotspot => {
    hotspot.addEventListener('click', () => {
        const audioSrc = hotspot.dataset.audio;
        const audio = new Audio(audioSrc);
        audio.play();
    });
});




document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.horizontal-gallery'); // 父容器
    const galleryContainer = document.querySelector('.gallery-container'); // 子容器

    let isDragging = false;
    let startX = 0;
    let scrollLeft = 0;

    gallery.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX - gallery.offsetLeft;
        scrollLeft = gallery.scrollLeft;
        gallery.style.cursor = 'grabbing'; // 鼠标样式
    });

    gallery.addEventListener('mouseleave', () => {
        isDragging = false;
        gallery.style.cursor = 'grab';
    });

    gallery.addEventListener('mouseup', () => {
        isDragging = false;
        gallery.style.cursor = 'grab';
    });

    gallery.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - gallery.offsetLeft;
        const walk = (x - startX) * 2; // 调整滑动速度
        gallery.scrollLeft = scrollLeft - walk;
    });
});

