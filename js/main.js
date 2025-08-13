// 轮播图数据
const carouselSlides = [
    {
        image: 'images/slide1.jpg',
        title: "Hi, I'm 刘fifi",
        subtitle: "设计师 | 旅行爱好者 | 终身学习者"
    },
    {
        image: 'images/slide2.jpg',
        title: "生活瞬间",
        subtitle: "记录美好时光"
    },
    {
        image: 'images/slide3.jpg',
        title: "我的故事",
        subtitle: "在路上遇见更好的自己"
    }
];

// 轮播控制
let currentSlide = 0;
let slides;
let dots;

// 初始化轮播图
function initCarousel() {
    const container = document.querySelector('.carousel-container');
    const dotsContainer = document.querySelector('.carousel-dots');
    if (!container || !dotsContainer) return; // 无轮播元素时跳过
    
    // 创建轮播项
    carouselSlides.forEach((slide, index) => {
        const slideElement = document.createElement('div');
        slideElement.className = `carousel-slide ${index === 0 ? 'active' : ''}`;
        slideElement.style.backgroundImage = `url(${slide.image})`;
        
        slideElement.innerHTML = `
            <div class="overlay"></div>
            <div class="carousel-content">
                <h1>${slide.title}</h1>
                <p>${slide.subtitle}</p>
            </div>
        `;
        
        container.appendChild(slideElement);
        
        // 创建指示点
        const dot = document.createElement('span');
        dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    // 在元素创建完成后再获取它们
    slides = document.querySelectorAll('.carousel-slide');
    dots = document.querySelectorAll('.carousel-dot');
}

function goToSlide(n) {
    if (!slides || !dots || slides.length === 0 || dots.length === 0) return;
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    currentSlide = (n + slides.length) % slides.length;
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function prevSlide() {
    goToSlide(currentSlide - 1);
}

// 自动轮播
let autoSlideInterval;

function startAutoSlide() {
    if (!slides || !slides.length) return;
    autoSlideInterval = setInterval(nextSlide, 5000);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// 导航栏滚动效果（深色主题）
function handleScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
        navbar.style.backgroundColor = '#FFFFFF';
    }
}

// 事件监听
document.addEventListener('DOMContentLoaded', function() {
    // 若存在轮播结构再绑定
    const track = document.querySelector('.carousel-track');
    const slidesEls = Array.from(document.querySelectorAll('.carousel-slide'));
    const nextButton = document.querySelector('.carousel-btn.next');
    const prevButton = document.querySelector('.carousel-btn.prev');
    const dotsNav = document.querySelector('.carousel-dots');
    const dotsEls = Array.from(document.querySelectorAll('.dot'));

    if (track && slidesEls.length) {
        const slideWidth = slidesEls[0].getBoundingClientRect().width;
        let currentIndex = 0;

        function setInitialPosition() {
            const offset = -currentIndex * slideWidth;
            track.style.transform = `translateX(${offset}px)`;
            updateDots();
            updateSlides();
        }

        function updateDots() {
            dotsEls.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }

        function updateSlides() {
            slidesEls.forEach((slide, index) => {
                slide.classList.toggle('active', index === currentIndex);
            });
        }

        function moveToSlide(index) {
            currentIndex = index;
            const offset = -currentIndex * slideWidth;
            track.style.transform = `translateX(${offset}px)`;
            updateDots();
            updateSlides();
        }

        function nextSlideLocal() {
            if (currentIndex === slidesEls.length - 1) {
                currentIndex = 0;
            } else {
                currentIndex++;
            }
            moveToSlide(currentIndex);
        }

        function prevSlideLocal() {
            if (currentIndex === 0) {
                currentIndex = slidesEls.length - 1;
            } else {
                currentIndex--;
            }
            moveToSlide(currentIndex);
        }

        if (nextButton) nextButton.addEventListener('click', nextSlideLocal);
        if (prevButton) prevButton.addEventListener('click', prevSlideLocal);
        
        dotsEls.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                moveToSlide(index);
            });
        });

        let slideInterval = setInterval(nextSlideLocal, 5000);
        track.addEventListener('mouseenter', () => { clearInterval(slideInterval); });
        track.addEventListener('mouseleave', () => { slideInterval = setInterval(nextSlideLocal, 5000); });
        setInitialPosition();
    }

    // 滚动效果
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // 弹窗功能
    setupModals();
});

// 弹窗相关函数
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // 防止背景滚动
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // 恢复背景滚动
    }
}

function setupModals() {
    // 为所有关闭按钮添加事件监听
    const closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal');
            if (modal) {
                closeModal(modal.id);
            }
        });
    });

    // 点击弹窗外部区域关闭弹窗
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal(this.id);
            }
        });
    });

    // ESC键关闭弹窗
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const openModal = document.querySelector('.modal[style*="display: block"]');
            if (openModal) {
                closeModal(openModal.id);
            }
        }
    });
} 