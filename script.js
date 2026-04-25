// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {


    // 移动端菜单切换
    const menuToggle = document.getElementById('menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu) {
                mobileMenu.classList.toggle('hidden');
            }
        });
    }

    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // 关闭移动端菜单
                    const mobileMenu = document.getElementById('mobile-menu');
                    if (mobileMenu) {
                        mobileMenu.classList.add('hidden');
                    }
                    // 滚动到目标位置
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 滚动动画
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // 观察需要动画的元素
    document.querySelectorAll('.hover-scale').forEach(el => {
        observer.observe(el);
    });

    // 初始化页面
    initPage();
});

function initPage() {
    // 初始化其他功能
    console.log('Page initialized');
}

// 页面加载完成后执行
window.addEventListener('load', function() {
    // 添加加载动画
    document.body.classList.add('loaded');
});

// 鼠标跟随效果（可选）
let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

window.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.1;
    cursorY += (mouseY - cursorY) * 0.1;
    
    // 可以在这里添加自定义光标效果
    
    requestAnimationFrame(animateCursor);
}

// 启动鼠标跟随动画
// animateCursor();