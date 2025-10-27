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
        heroTitle: "Bàn tay chữa lành, trái tim yêu thương cho mọi lứa tuổi",
        heroSubtitle: "Chăm sóc trị liệu xương khớp chuyên nghiệp cho người cao tuổi và trẻ em gặp vấn đề về xương và khớp. Chúng tôi điều trị bằng kinh nghiệm, lòng trắc ẩn và sự tận tâm với sức khỏe của bạn.",
        
        // Form
        formTitle: "Hành trình chữa lành của bạn bắt đầu từ đây!",
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
        aboutTitle: "Trải nghiệm sự chữa lành từ trái tim chúng tôi",
        aboutDesc: "Chúng tôi chuyên về chăm sóc trị liệu xương khớp cho bệnh nhân cao tuổi và trẻ em đối mặt với các thách thức về xương và khớp. Với nhiều năm kinh nghiệm và lòng trắc ẩn chân thành, chúng tôi cung cấp các kế hoạch điều trị cá nhân hóa giúp phục hồi khả năng vận động, giảm đau và cải thiện chất lượng cuộc sống.",
        videoCaption: "Xem cách chúng tôi giúp bệnh nhân phục hồi sức khỏe",
        clinicName: "Vật lý trị liệu 152",
        
        // Services Section
        servicesTitle: "Phương Pháp Điều Trị Chuyên Khoa",
        servicesSubtitle: "Chăm sóc trị liệu xương khớp toàn diện cho mọi lứa tuổi",
        service1Title: "Chăm Sóc Khớp Người Cao Tuổi",
        service1Desc: "Điều trị nhẹ nhàng, hiệu quả cho viêm khớp, vấn đề vận động và các vấn đề khớp liên quan đến tuổi tác. Chúng tôi phục hồi sự thoải mái và độc lập với sự chăm sóc từ trái tim.",
        service2Title: "Trị Liệu Xương Khớp Nhi Khoa",
        service2Desc: "Chăm sóc chuyên khoa cho xương và khớp đang phát triển của trẻ em. Điều chỉnh an toàn, nhẹ nhàng cho vẹo cột sống, vấn đề tư thế và các vấn đề phát triển.",
        service3Title: "Chỉnh Cột Sống",
        service3Desc: "Điều chỉnh cột sống chuyên nghiệp sử dụng các kỹ thuật đã được chứng minh để giảm đau, cải thiện tư thế và nâng cao sức khỏe tổng thể cho bệnh nhân ở mọi lứa tuổi.",
        service4Title: "Trị Liệu Phục Hồi Chức Năng",
        service4Desc: "Chương trình trị liệu tùy chỉnh kết hợp điều chỉnh, bài tập và giáo dục sức khỏe để đạt được kết quả lâu dài và sức khỏe tối ưu.",
        
        // Testimonials
        testimonialsTitle: "Câu Chuyện Chữa Lành & Hy Vọng",
        testimonialsSubtitle: "Trải nghiệm thực tế từ bệnh nhân và gia đình của họ",
        testimonial1: '"Cơn đau viêm khớp của bà tôi đã giảm đáng kể. Sự chăm sóc ở đây thực sự đến từ trái tim. Bà giờ có thể đi lại tự tin trở lại!"',
        testimonial2: '"Tư thế của con trai tôi đã cải thiện đáng kể chỉ sau vài buổi điều trị. Các bác sĩ cực kỳ giàu kinh nghiệm và nhẹ nhàng với trẻ em."',
        testimonial3: '"Sau nhiều năm đau lưng, cuối cùng tôi đã tìm thấy sự giải thoát. Chuyên môn và sự chăm sóc tận tâm của đội ngũ đã tạo nên sự khác biệt trong hành trình chữa lành của tôi."',
        familyMember: "Bệnh Nhân",
        
        // Team Section
        teamTitle: "Đội Ngũ Bác Sĩ Giàu Kinh Nghiệm",
        teamSubtitle: "Chữa lành bằng chuyên môn, lòng trắc ẩn và trái tim",
        team1Role: "Bác Sĩ Trưởng - Hơn 20 Năm Kinh Nghiệm",
        team2Role: "Chuyên Gia Nhi Khoa",
        team3Role: "Chuyên Gia Chăm Sóc Người Cao Tuổi",
        
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
        contactDesc: "Chúng tôi quan tâm sâu sắc đến sức khỏe của bạn. Liên hệ với chúng tôi để đặt lịch tư vấn hoặc đặt bất kỳ câu hỏi nào về các phương pháp điều trị xương khớp.",
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
        footerActivities: "Phục Hồi Chức Năng"
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
