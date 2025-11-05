// Main JavaScript for Nurse Website

// ===========================
// Language Translation System
// ===========================
const translations = {
    en: {
        // Navigation
        navHome: "Home",
        navSeniorCare: "Elderly Care",
        navChildrenCare: "Children's Care",
        navTreatments: "Our Treatments",
        navServices: "Treatments",
        navPages: "Pages",
        navAbout: "About Us",
        navTeam: "Our Chiropractors",
        navGallery: "Gallery",
        navTestimonials: "Testimonials",
        navPricing: "Pricing",
        navFaq: "FAQ",
        navBlog: "Blog",
        navBlogStandard: "Blog - Standard",
        navBlogGrid: "Blog - Grid",
        navContact: "Contact",
        getInTouch: "Book Appointment",
        
        // Hero Section
        heroTitle: "Healing hands, caring hearts for all ages",
        heroSubtitle: "Expert chiropractic care for elderly and children with bone and joint issues. We treat with experience, compassion, and dedication to your health.",
        
        // Form
        formTitle: "Your healing journey starts here!",
        formName: "Name",
        formEmail: "Email",
        formPhone: "Phone Number",
        formSubject: "Concern/Issue",
        formAgree: "I agree that my submitted data is being collected and stored.",
        btnSendMessage: "Send Message",
        formYourName: "Your Name",
        formYourEmail: "Your Email",
        formYourPhone: "Your Phone",
        formYourMessage: "Describe your condition",
        
        // About Section
        aboutTitle: "Experience healing from our hearts",
        aboutDesc: "We specialize in chiropractic care for elderly patients and children facing bone and joint challenges. With years of experience and genuine compassion, we provide personalized treatment plans that restore mobility, reduce pain, and improve quality of life.",
        videoCaption: "Watch how we help patients restore their health",
        clinicName: "Vật lý trị liệu 152",
        
        // Services Section
        servicesTitle: "Our Specialized Treatments",
        servicesSubtitle: "Comprehensive chiropractic care for every age",
        service1Title: "Elderly Joint Care",
        service1Desc: "Gentle, effective treatment for arthritis, mobility issues, and age-related joint problems. We restore comfort and independence with care from our hearts.",
        service2Title: "Pediatric Chiropractic",
        service2Desc: "Specialized care for children's growing bones and joints. Safe, gentle adjustments for scoliosis, posture issues, and developmental concerns.",
        service3Title: "Spinal Alignment",
        service3Desc: "Expert spinal adjustments using proven techniques to relieve pain, improve posture, and enhance overall health for patients of all ages.",
        service4Title: "Rehabilitation Therapy",
        service4Desc: "Customized therapy programs combining adjustments, exercises, and wellness education to achieve lasting results and optimal health.",
        
        // Testimonials
        testimonialsTitle: "Stories of Healing & Hope",
        testimonialsSubtitle: "Real experiences from our patients and their families",
        testimonial1: '"My grandmother\'s arthritis pain has decreased significantly. The care here truly comes from the heart. She can now walk with confidence again!"',
        testimonial2: '"My son\'s posture improved dramatically after just a few sessions. The doctors are incredibly experienced and gentle with children."',
        testimonial3: '"After years of back pain, I finally found relief. The team\'s expertise and compassionate care made all the difference in my healing journey."',
        familyMember: "Patient",
        
        // Team Section
        teamTitle: "Our Experienced Chiropractors",
        teamSubtitle: "Healing with expertise, compassion, and heart",
        team1Role: "Chief Chiropractor - 20+ Years Experience",
        team2Role: "Pediatric Specialist",
        team3Role: "Geriatric Care Expert",
        teamGalleryTitle: "Our Clinic & Team",
        
        // Pricing Section
        pricingTitle: "Treatment Packages",
        pricingSubtitle: "Affordable healing plans designed for your health journey",
        pricingBasic: "Initial Assessment",
        pricingPremium: "Wellness Package",
        pricingDeluxe: "Family Care Plan",
        perMonth: "/session",
        mostPopular: "Most Popular",
        btnGetStarted: "Book Now",
        basicFeature1: "Comprehensive evaluation",
        basicFeature2: "Detailed health assessment",
        basicFeature3: "Personalized treatment plan",
        basicFeature4: "Initial adjustment",
        premiumFeature1: "12 treatment sessions",
        premiumFeature2: "Progress monitoring",
        premiumFeature3: "Rehabilitation exercises",
        premiumFeature4: "Nutrition guidance",
        premiumFeature5: "Priority scheduling",
        deluxeFeature1: "Care for 3 family members",
        deluxeFeature2: "Unlimited consultations",
        deluxeFeature3: "Home visit options",
        deluxeFeature4: "Wellness workshops",
        deluxeFeature5: "24/7 emergency support",
        
        // Contact Section
        contactTitle: "Start Your Healing Journey",
        contactDesc: "We care deeply about your health. Contact us to schedule a consultation or ask any questions about our chiropractic treatments.",
        contactAddress: "Address",
        contactPhone: "Phone",
        contactEmail: "Email",
        
        // Footer
        footerTagline: "Healing bones and joints with experience, compassion, and care from our hearts. Your health is our passion.",
        footerQuickLinks: "Quick Links",
        footerContactInfo: "Contact Info",
        footerCopyright: "© 2025. All Rights Reserved.",
        footerNursingCare: "Elderly Joint Care",
        footerMedicalSupport: "Pediatric Chiropractic",
        footerPersonalCare: "Spinal Alignment",
        footerActivities: "Rehabilitation"
    },
    vi: {
        // Navigation
        navHome: "Trang Chủ",
        navSeniorCare: "Chăm Sóc Người Cao Tuổi",
        navChildrenCare: "Chăm Sóc Trẻ Em",
        navTreatments: "Phương Pháp Điều Trị",
        navServices: "Điều Trị",
        navPages: "Trang",
        navAbout: "Về Chúng Tôi",
        navTeam: "Đội Ngũ Bác Sĩ",
        navGallery: "Thư Viện Ảnh",
        navTestimonials: "Đánh Giá",
        navPricing: "Bảng Giá",
        navFaq: "Câu Hỏi Thường Gặp",
        navBlog: "Tin Tức",
        navBlogStandard: "Tin Tức - Tiêu Chuẩn",
        navBlogGrid: "Tin Tức - Lưới",
        navContact: "Liên Hệ",
        getInTouch: "Đặt Lịch Hẹn",
        
        // Hero Section
        heroTitle: "Chăm sóc sức khỏe xương khớp toàn diện",
        heroSubtitle: "Phòng Vật Lý Trị Liệu 152 là đơn vị chuyên sâu trong lĩnh vực phục hồi chức năng và điều trị bằng các phương pháp vật lý trị liệu hiện đại, hướng đến mục tiêu giúp người bệnh phục hồi vận động, giảm đau và nâng cao chất lượng cuộc sống một cách bền vững. Tại đây, mọi phác đồ điều trị đều được xây dựng dựa trên các bằng chứng y học đáng tin cậy, kết hợp giữa kỹ thuật hiện đại và sự theo dõi sát sao của đội ngũ chuyên môn, nhằm đảm bảo hiệu quả và an toàn cho từng bệnh nhân.",
        
        // Form
        formTitle: "Chuyên nghiệp tận tâm vì cộng đồng!",
        formName: "Họ và Tên",
        formEmail: "Email",
        formPhone: "Số Điện Thoại",
        formSubject: "Vấn Đề/Mối Quan Tâm",
        formAgree: "Tôi đồng ý rằng dữ liệu đã gửi của tôi đang được thu thập và lưu trữ.",
        btnSendMessage: "Gửi Tin Nhắn",
        formYourName: "Tên Của Bạn",
        formYourEmail: "Email Của Bạn",
        formYourPhone: "Số Điện Thoại Của Bạn",
        formYourMessage: "Mô tả tình trạng của bạn",
        
        // About Section
        aboutTitle: "Mọi quy trình điều trị đều được xây dựng dựa trên nền tảng Y Học Thực Chứng (Evidence-Based Medicine)",
        aboutDesc: "Phòng Khám 152 hoạt động theo phương châm “Y Học Thực Chứng” – mọi phương pháp điều trị đều dựa trên bằng chứng khoa học rõ ràng, được kiểm chứng lâm sàng và phù hợp với tình trạng từng bệnh nhân. Chúng tôi tin rằng sức khỏe bền vững chỉ có được khi điều trị đúng nguyên nhân và áp dụng liệu pháp phù hợp, an toàn, cá nhân hóa.",
        videoCaption: "Xem cách chúng tôi giúp bệnh nhân phục hồi sức khỏe",
        clinicName: "Vật lý trị liệu 152",
        
        // Services Section
        servicesTitle: "Phương châm “Y Học Thực Chứng”",
        servicesSubtitle: "Giải quyết tận gốc nguyên nhân gây đau và phục hồi lâu dài, hạn chế tái phát.",
        service1Title: "Điều trị đau vai gáy – đau lưng – thoái hóa cột sống",
        service1Desc: "Áp dụng các kỹ thuật hiện đại như điện xung, siêu âm trị liệu, sóng ngắn kết hợp với bài tập chuyên biệt giúp giảm đau nhanh, phục hồi độ linh hoạt của cột sống.",
        service2Title: "Phục hồi sau tai biến, chấn thương, phẫu thuật",
        service2Desc: "Thiết kế phác đồ điều trị cá nhân hóa, kết hợp giữa vật lý trị liệu và bài tập phục hồi chức năng, giúp bệnh nhân lấy lại khả năng vận động và tự chủ trong sinh hoạt.",
        service3Title: "Điều trị tê tay, tê chân, thoát vị đĩa đệm",
        service3Desc: "Sử dụng kỹ thuật kéo giãn cột sống, trị liệu thần kinh – cơ và các bài tập phục hồi tuần hoàn, giúp giảm áp lực lên rễ thần kinh.",
        service4Title: "Trị liệu chỉnh hình – nắn cơ xương khớp",
        service4Desc: "Phù hợp cho người thường xuyên ngồi làm việc, vận động sai tư thế hoặc chơi thể thao quá sức. Giúp giảm căng cơ, điều chỉnh lệch khớp và cải thiện dáng đứng, dáng ngồi.",
        
        // Testimonials
        testimonialsTitle: "Chia sẻ từ các bệnh nhân đã điều trị tại phòng khám",
        testimonialsSubtitle: "Trải nghiệm thực tế từ bệnh nhân và gia đình của họ",
        testimonial1: '"Cơn đau viêm khớp của bà tôi đã giảm đáng kể. Sự chăm sóc ở đây thực sự đến từ trái tim. Bà giờ có thể đi lại tự tin trở lại!"',
        testimonial2: '"Tư thế của con trai tôi đã cải thiện đáng kể chỉ sau vài buổi điều trị. Các bác sĩ cực kỳ giàu kinh nghiệm và nhẹ nhàng với trẻ em."',
        testimonial3: '"Sau nhiều năm đau lưng, cuối cùng tôi đã tìm thấy sự giải thoát. Chuyên môn và sự chăm sóc tận tâm của đội ngũ đã tạo nên sự khác biệt trong hành trình chữa lành của tôi."',
        familyMember: "Bệnh Nhân",
        
        // Team Section
        teamTitle: "Đội Ngũ Bác Sĩ Giàu Kinh Nghiệm",
        teamSubtitle: "Nhiều năm kinh nghiệm trong lĩnh vực phục hồi chức năng và điều trị cơ xương khớp",
        team1Role: "Bác Sĩ Trưởng - Hơn 20 Năm Kinh Nghiệm",
        team2Role: "Chuyên Gia Nhi Khoa",
        team3Role: "Chuyên Gia Chăm Sóc Người Cao Tuổi",
        teamGalleryTitle: "Phòng Khám & Đội Ngũ Của Chúng Tôi",
        
        // Pricing Section
        pricingTitle: "Gói Điều Trị",
        pricingSubtitle: "Các gói chữa lành phải chăng được thiết kế cho hành trình sức khỏe của bạn",
        pricingBasic: "Đánh Giá Ban Đầu",
        pricingPremium: "Gói Chăm Sóc Sức Khỏe",
        pricingDeluxe: "Gói Chăm Sóc Gia Đình",
        perMonth: "/buổi",
        mostPopular: "Phổ Biến Nhất",
        btnGetStarted: "Đặt Lịch",
        basicFeature1: "Đánh giá toàn diện",
        basicFeature2: "Kiểm tra sức khỏe chi tiết",
        basicFeature3: "Kế hoạch điều trị cá nhân hóa",
        basicFeature4: "Điều chỉnh ban đầu",
        premiumFeature1: "12 buổi điều trị",
        premiumFeature2: "Theo dõi tiến độ",
        premiumFeature3: "Bài tập phục hồi chức năng",
        premiumFeature4: "Hướng dẫn dinh dưỡng",
        premiumFeature5: "Ưu tiên đặt lịch",
        deluxeFeature1: "Chăm sóc cho 3 thành viên gia đình",
        deluxeFeature2: "Tư vấn không giới hạn",
        deluxeFeature3: "Tùy chọn khám tại nhà",
        deluxeFeature4: "Hội thảo sức khỏe",
        deluxeFeature5: "Hỗ trợ khẩn cấp 24/7",
        
        // Contact Section
        contactTitle: "Bắt Đầu Hành Trình Chữa Lành",
        contactDesc: "Mục tiêu cuối cùng của chúng tôi là giúp bạn thoát khỏi cơn đau, lấy lại sự linh hoạt, khỏe mạnh và tự tin trong cuộc sống hàng ngày.",
        contactAddress: "Địa Chỉ",
        contactPhone: "Điện Thoại",
        contactEmail: "Email",
        
        // Footer
        footerTagline: "Chữa lành xương và khớp bằng kinh nghiệm, lòng trắc ẩn và sự chăm sóc từ trái tim. Sức khỏe của bạn là niềm đam mê của chúng tôi.",
        footerQuickLinks: "Liên Kết Nhanh",
        footerContactInfo: "Thông Tin Liên Hệ",
        footerCopyright: "© 2025. Tất Cả Quyền Được Bảo Lưu.",
        footerNursingCare: "Chăm Sóc Khớp Người Cao Tuổi",
        footerMedicalSupport: "Trị Liệu Xương Khớp Nhi Khoa",
        footerPersonalCare: "Chỉnh Cột Sống",
        footerActivities: "Phục Hồi Chức Năng",
        findUs: "Tìm chúng tôi trên bản đồ"
    }
};

// Current language (default to English)
let currentLang = localStorage.getItem('language') || 'en';

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    initLanguage();
    setupLanguageToggle();
});

function initLanguage() {
    setLanguage(currentLang);
}

function setupLanguageToggle() {
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', function() {
            // Toggle between languages
            currentLang = currentLang === 'en' ? 'vi' : 'en';
            setLanguage(currentLang);
            localStorage.setItem('language', currentLang);
        });
    }
}

function setLanguage(lang) {
    currentLang = lang;
    
    // Update toggle button active state
    const langOptions = document.querySelectorAll('.lang-option');
    langOptions.forEach(option => {
        if (option.dataset.lang === lang) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
    
    // Update all translated elements
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.dataset.translate;
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update placeholder texts
    const placeholders = document.querySelectorAll('[data-translate-placeholder]');
    placeholders.forEach(element => {
        const key = element.dataset.translatePlaceholder;
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
}

// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mainNav = document.getElementById('mainNav');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        mainNav.classList.toggle('active');
        document.body.style.overflow = mainNav.classList.contains('active') ? 'hidden' : '';
    });
}

// Mobile Dropdown Toggle
const menuItems = document.querySelectorAll('.has-dropdown');
menuItems.forEach(item => {
    if (window.innerWidth <= 768) {
        const link = item.querySelector('a');
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                item.classList.toggle('active');
            }
        });
    }
});

// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    mobileMenuToggle.classList.remove('active');
                    document.body.style.overflow = '';
                }
            }
        }
    });
});

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
    
    lastScroll = currentScroll;
});

// Form Submission Handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', data);
        
        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
        
        // Reset form
        this.reset();
    });
}

// All contact forms
const allForms = document.querySelectorAll('.contact-form, .hero-form');
allForms.forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        console.log('Form submitted:', data);
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for animation
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Observe cards for animation
const cards = document.querySelectorAll('.service-card, .testimonial-card, .team-member, .pricing-card');
cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
});

// Window resize handler
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        // Close mobile menu on resize to desktop
        if (window.innerWidth > 768) {
            mainNav.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    }, 250);
});

// Prevent closing menu when clicking inside dropdown
document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});

// Add active state to current page link
const currentLocation = window.location.hash;
if (currentLocation) {
    document.querySelectorAll('.nav-menu a').forEach(link => {
        if (link.getAttribute('href') === currentLocation) {
            link.style.color = 'var(--primary-color)';
        }
    });
}

// Loading animation for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease';
        
        if (img.complete) {
            img.style.opacity = '1';
        } else {
            img.addEventListener('load', function() {
                this.style.opacity = '1';
            });
        }
    });
});

// Counter animation for pricing numbers (optional enhancement)
function animateCounter(element, target, duration = 1000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start).toLocaleString();
        }
    }, 16);
}

// ===========================
// Image Carousel
// ===========================
class Carousel {
    constructor(containerSelector) {
        this.container = document.querySelector(containerSelector);
        if (!this.container) return;
        
        this.slides = this.container.querySelectorAll('.carousel-slide');
        this.dots = this.container.querySelectorAll('.dot');
        this.prevBtn = this.container.querySelector('.carousel-prev');
        this.nextBtn = this.container.querySelector('.carousel-next');
        
        this.currentSlide = 0;
        this.autoPlayInterval = null;
        this.autoPlayDelay = 4000; // 4 seconds
        
        this.init();
    }
    
    init() {
        // Add event listeners
        this.prevBtn?.addEventListener('click', () => this.prev());
        this.nextBtn?.addEventListener('click', () => this.next());
        
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });
        
        // Start autoplay
        this.startAutoPlay();
        
        // Pause on hover
        this.container.addEventListener('mouseenter', () => this.stopAutoPlay());
        this.container.addEventListener('mouseleave', () => this.startAutoPlay());
        
        // Handle touch swipe on mobile
        this.handleTouchSwipe();
    }
    
    goToSlide(index) {
        // Remove active class from current slide and dot
        this.slides[this.currentSlide]?.classList.remove('active');
        this.dots[this.currentSlide]?.classList.remove('active');
        
        // Update current slide
        this.currentSlide = index;
        
        // Add active class to new slide and dot
        this.slides[this.currentSlide]?.classList.add('active');
        this.dots[this.currentSlide]?.classList.add('active');
    }
    
    next() {
        const nextSlide = (this.currentSlide + 1) % this.slides.length;
        this.goToSlide(nextSlide);
    }
    
    prev() {
        const prevSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.goToSlide(prevSlide);
    }
    
    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => this.next(), this.autoPlayDelay);
    }
    
    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }
    
    handleTouchSwipe() {
        let touchStartX = 0;
        let touchEndX = 0;
        
        this.container.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        this.container.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
        });
        
        const handleSwipe = () => {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    this.next(); // Swipe left
                } else {
                    this.prev(); // Swipe right
                }
            }
        };
        
        this.handleSwipe = handleSwipe;
    }
}

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    new Carousel('.carousel-container');
    
    // Initialize Services Cards Carousel
    const servicesCarousel = new ServicesCardsCarousel('.cards-carousel-container');
});

// ===========================
// Services Cards Carousel
// ===========================
class ServicesCardsCarousel {
    constructor(containerSelector) {
        this.container = document.querySelector(containerSelector);
        if (!this.container) return;
        
        this.cards = this.container.querySelectorAll('.service-card');
        this.dots = this.container.querySelectorAll('.cards-dots .dot');
        this.prevBtn = this.container.querySelector('.cards-prev');
        this.nextBtn = this.container.querySelector('.cards-next');
        
        this.currentCard = 0;
        this.autoPlayInterval = null;
        this.autoPlayDelay = 5000; // 5 seconds
        
        this.init();
    }
    
    init() {
        // Add event listeners
        this.prevBtn?.addEventListener('click', () => this.prev());
        this.nextBtn?.addEventListener('click', () => this.next());
        
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToCard(index));
        });
        
        // Start autoplay
        this.startAutoPlay();
        
        // Pause on hover
        this.container.addEventListener('mouseenter', () => this.stopAutoPlay());
        this.container.addEventListener('mouseleave', () => this.startAutoPlay());
    }
    
    goToCard(index) {
        // Remove active class from current card and dot
        this.cards[this.currentCard]?.classList.remove('active');
        this.dots[this.currentCard]?.classList.remove('active');
        
        // Update current card
        this.currentCard = index;
        
        // Add active class to new card and dot
        this.cards[this.currentCard]?.classList.add('active');
        this.dots[this.currentCard]?.classList.add('active');
    }
    
    next() {
        const nextCard = (this.currentCard + 1) % this.cards.length;
        this.goToCard(nextCard);
    }
    
    prev() {
        const prevCard = (this.currentCard - 1 + this.cards.length) % this.cards.length;
        this.goToCard(prevCard);
    }
    
    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => this.next(), this.autoPlayDelay);
    }
    
    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }
}

// Initialize counters when they come into view
const priceAmounts = document.querySelectorAll('.amount');
const priceObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
            const target = parseInt(entry.target.textContent.replace(/,/g, ''));
            animateCounter(entry.target, target);
        }
    });
}, { threshold: 0.5 });

priceAmounts.forEach(amount => {
    priceObserver.observe(amount);
});

console.log('Nurse Care Website Loaded Successfully!');
