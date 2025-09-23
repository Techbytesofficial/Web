/**
 * TECHBYTE PORTFOLIO - MAIN APPLICATION SCRIPT
 * Professional portfolio website with advanced interactions
 * Author: TechByte Development Team
 * Version: 2.1.0 (Final)
 */

'use strict';

// ==========================================================================
// APPLICATION DATA
// ==========================================================================

const APP_DATA = {
    company: {
        name: "TechByte",
        tagline: "Innovating Tomorrow's Technology",
        description: "We are a leading digital innovation company specializing in cutting-edge web development, AI solutions, and digital transformation. Our team of experts combines technical excellence with creative vision to deliver solutions that drive business growth.",
        stats: {
            projectsCompleted: "20+",
            clientsSatisfied: "50+",
            yearsExperience: "2+",
            teamMembers: "4+"
        }
    },
    services: [
        {
            title: "Web Development",
            description: "Full-stack web applications built with modern frameworks and best practices for scalability and performance.",
            technologies: ["React", "Next.js", "Node.js", "Python"],
            icon: "code"
        },
        {
            title: "Mobile App Development",
            description: "Native and cross-platform mobile applications for iOS and Android with seamless user experiences.",
            technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
            icon: "mobile"
        },
        {
            title: "AI & Machine Learning",
            description: "Custom AI solutions, predictive analytics, and intelligent automation to drive business innovation.",
            technologies: ["TensorFlow", "PyTorch", "OpenAI", "Computer Vision"],
            icon: "brain"
        },
        {
            title: "Cloud Solutions",
            description: "Scalable cloud architecture and infrastructure on AWS, Azure, and GCP for enterprise applications.",
            technologies: ["AWS", "Azure", "Docker", "Kubernetes"],
            icon: "cloud"
        },
        {
            title: "UI/UX Design",
            description: "User-centered design that creates intuitive and engaging experiences across all platforms.",
            technologies: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
            icon: "design"
        },
        {
            title: "Digital Transformation",
            description: "End-to-end digital transformation strategies for enterprise clients seeking competitive advantage.",
            technologies: ["Strategy", "Process Optimization", "Integration", "Analytics"],
            icon: "transform"
        }
    ],
    projects: [
        {
            id: 1,
            name: "E-Learning Platform",
            title: "Interactive Online Learning Hub",
            description: "Comprehensive online learning system with video courses, interactive quizzes, and student progress tracking.",
            technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
            duration: "1.5 months",
            features: ["Video Streaming", "Quiz System", "Progress Tracking"],
            image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop&crop=center",
            category: "Education",
            teamSize: "5 developers",
            testimonial: "This platform transformed our training programs and boosted student engagement significantly.",
            client: "FutureLearn Inc.",
            status: "Completed",
            results: ["30% increase in course completion rates", "95% user satisfaction", "20,000+ active learners"]
        },
        {
            id: 2,
            name: "Food Delivery App",
            title: "Instant Food Delivery Service",
            description: "Mobile application for food delivery service with restaurant listings, order tracking, and integrated payment system.",
            technologies: ["React Native", "Firebase", "Stripe", "Google Maps"],
            duration: "2 months",
            features: ["Restaurant Search", "Order Tracking", "Payment Gateway"],
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop&crop=center",
            category: "Mobile App",
            teamSize: "7 developers",
            testimonial: "The best delivery app we've partnered with! Our online orders have doubled since we joined.",
            client: "GourmetGo",
            status: "Completed",
            results: ["50,000+ downloads in the first six months", "Average delivery time reduced to 25 mins", "4.7/5 app store rating"]
        },
        {
            id: 3,
            name: "Task Management System",
            title: "Collaborative Project Hub",
            description: "Project management tool for teams with task assignment, deadline tracking, and collaborative features.",
            technologies: ["Vue.js", "Express.js", "PostgreSQL", "JWT"],
            duration: "2 months",
            features: ["Task Assignment", "Team Collaboration", "File Sharing"],
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center",
            category: "Productivity",
            teamSize: "4 developers",
            testimonial: "Our team's productivity has skyrocketed since we started using this tool for project management.",
            client: "SyncFlow",
            status: "Completed",
            results: ["40% increase in on-time task completion", "Reduced project planning time by 50%", "Used by over 100 active teams"]
        },
        {
            id: 4,
            name: "E-commerce Website",
            title: "Online Retail Marketplace",
            description: "Complete online shopping platform with product catalog, shopping cart, and admin management panel.",
            technologies: ["Next.js", "Django", "MySQL", "PayPal API"],
            duration: "2 months",
            features: ["Product Catalog", "Shopping Cart", "Admin Panel"],
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center",
            category: "E-commerce",
            teamSize: "8 developers",
            testimonial: "A seamless and powerful platform that helped us grow our online sales by 200% in the first year.",
            client: "Marketplace Co.",
            status: "Completed",
            results: ["200% year-over-year sales growth", "50% increase in customer conversion rate", "Processed over $1M in transactions"]
        },
        {
            id: 5,
            name: "Portfolio Website Builder",
            title: "Creative Portfolio Creator",
            description: "Drag-and-drop website builder specifically designed for creating professional portfolio websites.",
            technologies: ["Angular", "Python Flask", "SQLite", "Bootstrap"],
            duration: "1 month",
            features: ["Drag & Drop", "Template Library", "SEO Optimization"],
            image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop&crop=center",
            category: "Web Tool",
            teamSize: "6 developers",
            testimonial: "I created a stunning portfolio in just a few minutes with zero coding. Highly recommended for all creatives!",
            client: "CreativeFolio",
            status: "Completed",
            results: ["10,000+ professional portfolios created", "98% customer satisfaction score", "Top-rated portfolio builder on tech review sites"]
        },
        {
            id: 6,
            name: "Real-time Chat Application",
            title: "Instant Messaging Platform",
            description: "Instant messaging application with group chats, file sharing, and real-time notifications.",
            technologies: ["React", "Socket.io", "Node.js", "Redis"],
            duration: "1.5 months",
            features: ["Real-time Messaging", "Group Chats", "File Sharing"],
            image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop&crop=center",
            category: "Communication",
            teamSize: "5 developers",
            testimonial: "Fast, reliable, and the file sharing feature is a game-changer for our team's daily communication.",
            client: "ConnectSphere",
            status: "Completed",
            results: ["500,000+ daily active users", "Sub-100ms message delivery latency", "Maintained 99.99% uptime"]
        }
    ],
    team: [
        { name: "Mohammed Sameer", role: "CEO & Co-Founder", description: "Visionary leader with 12+ years in tech innovation and digital transformation.", expertise: ["Strategic Planning", "Digital Transformation", "Team Leadership"], color: "teal" },
        { name: "Abdul Haseeb", role: "CTO & Technical Lead", description: "Full-stack architect specializing in scalable solutions and emerging technologies.", expertise: ["System Architecture", "AI/ML", "Cloud Computing"], color: "purple" },
        { name: "Syed Hannan", role: "Head of Design", description: "Creative director focused on user-centered design and brand experiences.", expertise: ["UI/UX Design", "Brand Strategy", "User Research"], color: "blue" },
        { name: "Suresh Kumar", role: "Lead Developer", description: "Senior developer with expertise in modern web technologies and mobile apps.", expertise: ["React/Next.js", "Mobile Development", "DevOps"], color: "green" }
    ],
    testimonials: [
        { quote: "TechByte delivered exceptional results that transformed our business operations. Their expertise in AI and web development is unmatched.", name: "David Thompson", company: "Innovation Corp", role: "Chief Technology Officer" },
        { quote: "Working with TechByte was seamless. They understood our vision perfectly and delivered a solution that exceeded all expectations.", name: "Lisa Wang", company: "StartupFlow", role: "CEO" },
        { quote: "The level of professionalism and technical expertise at TechByte is outstanding. They're our go-to partner for all digital projects.", name: "Robert Garcia", company: "Enterprise Solutions Ltd", role: "Head of Digital" }
    ],
    faqs: [
        { question: "What is the typical timeline for a project?", answer: "Project timelines vary depending on complexity and scope. A standard website typically takes 4-8 weeks, while complex applications can take 3-6 months. We provide detailed timelines after our initial consultation and requirements analysis." },
        { question: "How much does a project cost?", answer: "We offer custom quotes based on your specific requirements, project scope, and timeline. Our pricing is competitive and transparent. Contact us for a free consultation and detailed estimate tailored to your needs." },
        { question: "Do you provide ongoing support and maintenance?", answer: "Yes! We offer comprehensive support and maintenance packages to ensure your solution remains secure, updated, and performing optimally. This includes regular updates, security monitoring, performance optimization, and feature enhancements." },
        { question: "What technologies do you specialize in?", answer: "We specialize in modern web frameworks (React, Next.js, Vue.js), mobile development (React Native, Flutter), AI/ML technologies, cloud platforms (AWS, Azure, GCP), and emerging technologies like AR/VR and IoT." },
        { question: "Can you help with digital transformation initiatives?", answer: "Absolutely! We have extensive experience helping organizations modernize their technology stack, streamline processes, and implement digital solutions that drive growth and efficiency. We work closely with your team to ensure smooth transitions." }
    ]
};

// ==========================================================================
// UTILITY FUNCTIONS
// ==========================================================================
const Utils = {
    debounce(func, wait, immediate) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                timeout = null;
                if (!immediate) func(...args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func(...args);
        };
    },
    throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },
    isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },
    smoothScrollTo(targetId, offset = 80) {
        const target = document.getElementById(targetId.replace('#', ''));
        if (!target) return;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    },
    validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    },
    generateId() {
        return Math.random().toString(36).substr(2, 9);
    },
    getInitials(name) {
        return name.split(' ').map(word => word.charAt(0).toUpperCase()).join('');
    }
};

// ==========================================================================
// MODULES
// ==========================================================================
const LoadingScreen = {
    init() {
        this.loadingElement = document.getElementById('loading-screen');
        this.startTime = Date.now();
        this.minLoadTime = 1500;
        if (document.readyState === 'complete') {
            this.hide();
        } else {
            window.addEventListener('load', () => this.hide());
        }
    },
    hide() {
        const elapsedTime = Date.now() - this.startTime;
        const remainingTime = Math.max(0, this.minLoadTime - elapsedTime);
        setTimeout(() => {
            if (this.loadingElement) {
                this.loadingElement.classList.add('hidden');
                setTimeout(() => {
                    if (this.loadingElement && this.loadingElement.parentNode) {
                        this.loadingElement.parentNode.removeChild(this.loadingElement);
                    }
                }, 300);
            }
        }, remainingTime);
    }
};

const ScrollProgress = {
    init() {
        this.progressBar = document.getElementById('scroll-progress');
        if (!this.progressBar) return;
        const updateProgress = Utils.throttle(() => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / scrollHeight) * 100;
            this.progressBar.style.width = `${Math.min(100, Math.max(0, scrollPercent))}%`;
        }, 10);
        window.addEventListener('scroll', updateProgress);
        updateProgress();
    }
};

const ThreeDBackground = {
    init() {
        this.canvas = document.getElementById('hero-canvas');
        if (!this.canvas || !window.THREE) return;
        try {
            this.setupScene();
            this.createObjects();
            this.setupLights();
            this.setupEventListeners();
            this.animate();
        } catch (error) {
            console.warn('3D background initialization failed:', error);
            this.fallbackBackground();
        }
    },
    setupScene() {
        this.scene = new THREE.Scene();
        this.clock = new THREE.Clock();
        this.mouse = { x: 0, y: 0 };
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.z = 5;
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            alpha: true,
            antialias: false
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    },
    createObjects() {
        const geometry = new THREE.TorusKnotGeometry(1.2, 0.4, 64, 16);
        const material = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.1, metalness: 0.9, transparent: true, opacity: 0.8 });
        this.mainObject = new THREE.Mesh(geometry, material);
        this.scene.add(this.mainObject);
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = window.innerWidth < 768 ? 2000 : 3000;
        const posArray = new Float32Array(particlesCount * 3);
        for (let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 15;
        }
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        const particlesMaterial = new THREE.PointsMaterial({ size: 0.005, color: 0xffffff });
        this.particles = new THREE.Points(particlesGeometry, particlesMaterial);
        this.scene.add(this.particles);
    },
    setupLights() {
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
        this.scene.add(ambientLight);
        const pointLight1 = new THREE.PointLight(0x2dd4bf, 1.5, 100);
        pointLight1.position.set(5, 5, 5);
        this.scene.add(pointLight1);
        const pointLight2 = new THREE.PointLight(0xa78bfa, 1, 100);
        pointLight2.position.set(-5, -5, 2);
        this.scene.add(pointLight2);
    },
    setupEventListeners() {
        const handleMouseMove = Utils.throttle((event) => { this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1; this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1; }, 16);
        document.addEventListener('mousemove', handleMouseMove);
        const handleResize = Utils.debounce(() => { if (!this.camera || !this.renderer) return; this.camera.aspect = window.innerWidth / window.innerHeight; this.camera.updateProjectionMatrix(); this.renderer.setSize(window.innerWidth, window.innerHeight); }, 250);
        window.addEventListener('resize', handleResize);
        const handleScroll = Utils.throttle(() => { const scrollY = window.pageYOffset; if (this.mainObject && scrollY > 0) { this.mainObject.position.y = scrollY * 0.002; } }, 16);
        window.addEventListener('scroll', handleScroll);
    },
    animate() {
        if (!this.scene || !this.camera || !this.renderer) return;
        const animateFrame = () => {
            requestAnimationFrame(animateFrame);
            if (!this.mainObject || !this.particles || !this.camera) return;
            const elapsedTime = this.clock.getElapsedTime();
            if (window.pageYOffset === 0) {
                this.mainObject.position.y = Math.sin(elapsedTime * 0.5) * 0.2;
            }
            this.mainObject.rotation.x += 0.001;
            this.mainObject.rotation.y += 0.002;
            this.camera.position.x += (this.mouse.x * 0.5 - this.camera.position.x) * 0.02;
            this.camera.position.y += (this.mouse.y * 0.5 - this.camera.position.y) * 0.02;
            this.camera.lookAt(this.scene.position);
            this.particles.rotation.y += 0.0002;
            this.renderer.render(this.scene, this.camera);
        };
        animateFrame();
    },
    fallbackBackground() {
        if (this.canvas) {
            this.canvas.style.background = 'radial-gradient(circle, rgba(45,212,191,0.1) 0%, rgba(0,0,0,0) 70%)';
        }
    }
};

const Navigation = {
    init() {
        this.setupSmoothScrolling();
        this.setupMobileMenu();
    },
    setupSmoothScrolling() {
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[href^="#"]');
            if (!link) return;
            const targetId = link.getAttribute('href');
            if (targetId === '#') return;
            e.preventDefault();
            const targetElementId = targetId.substring(1);
            const target = document.getElementById(targetElementId);
            if (target) {
                const headerHeight = 80;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    },
    setupMobileMenu() {
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        const navMenu = document.getElementById('nav-menu');
        const navLinks = document.querySelectorAll('.nav-link');
        if (!mobileToggle || !navMenu) return;
        const closeMenu = () => {
            navMenu.classList.remove('active');
            mobileToggle.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('no-scroll');
          };

          const openMenu = () => {
            navMenu.classList.add('active');
            mobileToggle.setAttribute('aria-expanded', 'true');
            document.body.classList.add('no-scroll');
          };
        mobileToggle.addEventListener('click', (e) => {
            e.preventDefault();
            const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
            if (isExpanded) {
                closeMenu();
            } else {
                openMenu();
            }
        });
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    closeMenu();
                }
            });
        });
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 768 && navMenu.classList.contains('active') && !navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
                closeMenu();
            }
        });
    }
};

const ServicesManager = {
    init() { this.populateServices(); },
    getServiceIcon(iconType) { const icons = { code: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l-4 4-4-4M6 16l-4-4 4-4"></path>', mobile: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>', brain: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>', cloud: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"></path>', design: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3V1m0 20v-2m4-8h6a2 2 0 012 2v6a2 2 0 01-2 2h-6"></path>', transform: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>' }; return icons[iconType] || icons.code; },
    populateServices() { const servicesGrid = document.getElementById('services-grid'); if (!servicesGrid) return; servicesGrid.innerHTML = APP_DATA.services.map((service, index) => `<article class="service-card" data-aos="fade-up" data-aos-delay="${100 * (index + 1)}"><div class="service-icon"><svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">${this.getServiceIcon(service.icon)}</svg></div><h3 class="service-title">${service.title}</h3><p class="service-description">${service.description}</p><div class="service-technologies">${service.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}</div></article>`).join(''); }
};

const PortfolioManager = {
    init() { this.populatePortfolio(); },
    populatePortfolio() { const portfolioGrid = document.getElementById('portfolio-grid'); if (!portfolioGrid) return; portfolioGrid.innerHTML = APP_DATA.projects.map((project, index) => `<article class="project-card" data-aos="fade-up" data-aos-delay="${100 * (index + 1)}"><div class="project-image" style="background-image: url('${project.image}')"><span class="project-category">${project.category}</span></div><div class="project-content"><div class="project-header"><h3 class="project-title">${project.name}</h3><h4 class="project-subtitle">${project.title}</h4><p class="project-description">${project.description}</p></div><div class="project-meta"><div class="project-meta-item"><div class="project-meta-label">Duration</div><div class="project-meta-value">${project.duration}</div></div><div class="project-meta-item"><div class="project-meta-label">Team Size</div><div class="project-meta-value">${project.teamSize}</div></div></div><div class="project-technologies">${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}</div><div class="project-testimonial"><p class="project-testimonial-quote">"${project.testimonial}"</p><p class="project-testimonial-author">— ${project.client}</p></div><div class="project-actions"><button class="btn btn--primary btn--sm project-details-btn" data-project-id="${project.id}">View Details</button><button class="btn btn--outline btn--sm project-case-study-btn" data-project-id="${project.id}">Case Study</button></div></div></article>`).join(''); this.bindProjectEvents(); },
    bindProjectEvents() { document.addEventListener('click', (e) => { if (e.target.classList.contains('project-details-btn')) { const projectId = parseInt(e.target.getAttribute('data-project-id')); this.showProjectDetails(projectId); } if (e.target.classList.contains('project-case-study-btn')) { const projectId = parseInt(e.target.getAttribute('data-project-id')); this.showCaseStudy(projectId); } }); },
    showProjectDetails(projectId) { const project = APP_DATA.projects.find(p => p.id === projectId); if (!project) return; const details = `\n${project.name} - ${project.title}\n\n📋 PROJECT OVERVIEW:\n${project.description}\n\n✨ KEY FEATURES:\n${project.features.map(feature => `• ${feature}`).join('\n')}\n\n📊 RESULTS ACHIEVED:\n${project.results.map(result => `• ${result}`).join('\n')}\n\n🛠️ TECHNOLOGIES USED:\n${project.technologies.join(', ')}\n\n⏱️ Duration: ${project.duration}\n👥 Team Size: ${project.teamSize}\n📱 Category: ${project.category}\n    `; alert(details); },
    showCaseStudy(projectId) { const project = APP_DATA.projects.find(p => p.id === projectId); if (!project) return; const caseStudy = `\n📚 CASE STUDY: ${project.name}\n\n🎯 THE CHALLENGE:\nOur client needed a comprehensive ${project.category.toLowerCase()} solution to address their growing business needs and improve operational efficiency.\n\n💡 OUR SOLUTION:\n${project.description}\n\n🔧 IMPLEMENTATION:\nWe used cutting-edge technologies including ${project.technologies.slice(0, 3).join(', ')} to build a scalable and robust platform.\n\n📈 MEASURABLE RESULTS:\n${project.results.map(result => `✅ ${result}`).join('\n')}\n\n💬 CLIENT FEEDBACK:\n"${project.testimonial}" - ${project.client}\n\n📊 PROJECT STATS:\n• Duration: ${project.duration}\n• Team Size: ${project.teamSize}\n• Status: ${project.status}\n    `; alert(caseStudy); }
};

const TeamManager = {
    init() { this.populateTeam(); },
    populateTeam() { const teamGrid = document.getElementById('team-grid'); if (!teamGrid) return; teamGrid.innerHTML = APP_DATA.team.map((member, index) => `<article class="team-card" data-aos="fade-up" data-aos-delay="${100 * (index + 1)}"><div class="team-avatar team-avatar--${member.color}">${Utils.getInitials(member.name)}</div><h3 class="team-name">${member.name}</h3><p class="team-role">${member.role}</p><p class="team-description">${member.description}</p><div class="team-expertise">${member.expertise.map(skill => `<span class="expertise-tag">${skill}</span>`).join('')}</div></article>`).join(''); }
};

const TestimonialsSlider = {
    init() { this.currentIndex = 0; this.container = document.getElementById('testimonials-container'); this.dotsContainer = document.getElementById('testimonials-dots'); this.prevButton = document.querySelector('.testimonial-prev'); this.nextButton = document.querySelector('.testimonial-next'); if (!this.container) return; this.populateTestimonials(); this.createDots(); this.bindEvents(); this.startAutoplay(); },
    populateTestimonials() { this.container.innerHTML = APP_DATA.testimonials.map(testimonial => `<div class="testimonial-item"><p class="testimonial-quote">"${testimonial.quote}"</p><p class="testimonial-author">${testimonial.name}</p><p class="testimonial-company">${testimonial.company}</p><p class="testimonial-role">${testimonial.role}</p></div>`).join(''); },
    createDots() { if (!this.dotsContainer) return; this.dotsContainer.innerHTML = APP_DATA.testimonials.map((_, index) => `<button class="testimonial-dot ${index === 0 ? 'active' : ''}" data-index="${index}" aria-label="Go to testimonial ${index + 1}"></button>`).join(''); },
    bindEvents() { if (this.prevButton) { this.prevButton.addEventListener('click', () => this.goToPrevious()); } if (this.nextButton) { this.nextButton.addEventListener('click', () => this.goToNext()); } if (this.dotsContainer) { this.dotsContainer.addEventListener('click', (e) => { const dot = e.target.closest('.testimonial-dot'); if (dot) { const index = parseInt(dot.dataset.index); this.goToSlide(index); } }); } let touchStartX = 0; let touchEndX = 0; this.container.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].screenX; }, { passive: true }); this.container.addEventListener('touchend', (e) => { touchEndX = e.changedTouches[0].screenX; this.handleSwipe(touchStartX, touchEndX); }, { passive: true }); const slider = this.container.closest('.testimonials-slider'); if (slider) { slider.addEventListener('mouseenter', () => this.stopAutoplay()); slider.addEventListener('mouseleave', () => this.startAutoplay()); } },
    handleSwipe(startX, endX) { const threshold = 50; const diff = startX - endX; if (Math.abs(diff) > threshold) { if (diff > 0) { this.goToNext(); } else { this.goToPrevious(); } } },
    goToSlide(index) { this.currentIndex = index; this.updateSlider(); this.updateDots(); },
    goToNext() { this.currentIndex = (this.currentIndex + 1) % APP_DATA.testimonials.length; this.updateSlider(); this.updateDots(); },
    goToPrevious() { this.currentIndex = this.currentIndex === 0 ? APP_DATA.testimonials.length - 1 : this.currentIndex - 1; this.updateSlider(); this.updateDots(); },
    updateSlider() { const offset = -this.currentIndex * 100; this.container.style.transform = `translateX(${offset}%)`; },
    updateDots() { if (!this.dotsContainer) return; const dots = this.dotsContainer.querySelectorAll('.testimonial-dot'); dots.forEach((dot, index) => { dot.classList.toggle('active', index === this.currentIndex); }); },
    startAutoplay() { this.stopAutoplay(); this.autoplayInterval = setInterval(() => { this.goToNext(); }, 5000); },
    stopAutoplay() { if (this.autoplayInterval) { clearInterval(this.autoplayInterval); this.autoplayInterval = null; } }
};

const FAQ = {
    init() { this.populateFAQ(); this.bindEvents(); },
    populateFAQ() { const faqContainer = document.getElementById('faq-list'); if (!faqContainer) return; faqContainer.innerHTML = APP_DATA.faqs.map((faq, index) => `<div class="faq-item" data-aos="fade-up" data-aos-delay="${100 * (index + 1)}"><button class="faq-question" aria-expanded="false" aria-controls="faq-answer-${index}"><span>${faq.question}</span><svg class="faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button><div class="faq-answer" id="faq-answer-${index}" aria-hidden="true"><div class="faq-answer-content">${faq.answer}</div></div></div>`).join(''); },
    bindEvents() { document.addEventListener('click', (e) => { const question = e.target.closest('.faq-question'); if (!question) return; e.preventDefault(); const answer = question.nextElementSibling; const icon = question.querySelector('.faq-icon'); const isExpanded = question.getAttribute('aria-expanded') === 'true'; document.querySelectorAll('.faq-question').forEach(q => { if (q !== question) { q.setAttribute('aria-expanded', 'false'); q.nextElementSibling.classList.remove('active'); q.nextElementSibling.setAttribute('aria-hidden', 'true'); q.querySelector('.faq-icon').style.transform = 'rotate(0deg)'; } }); question.setAttribute('aria-expanded', !isExpanded); answer.setAttribute('aria-hidden', isExpanded); answer.classList.toggle('active'); icon.style.transform = isExpanded ? 'rotate(0deg)' : 'rotate(180deg)'; }); }
};

const ContactForm = {
    init() { this.form = document.getElementById('contact-form'); this.submitButton = document.getElementById('submit-button'); this.successMessage = document.getElementById('form-success'); if (!this.form) return; emailjs.init('SxA0xnPCGJIEBi7Cw'); this.bindEvents(); },
    bindEvents() { this.form.addEventListener('submit', (e) => { e.preventDefault(); this.handleSubmit(); }); const inputs = this.form.querySelectorAll('.form-control'); inputs.forEach(input => { input.addEventListener('blur', () => this.validateField(input)); input.addEventListener('input', () => this.clearFieldError(input)); }); },
    validateField(field) { const value = field.value.trim(); const fieldName = field.name; const errorElement = document.getElementById(`${fieldName}-error`); let isValid = true; let errorMessage = ''; this.clearFieldError(field); switch (fieldName) { case 'name': if (!value) { errorMessage = 'Name is required'; isValid = false; } else if (value.length < 2) { errorMessage = 'Name must be at least 2 characters'; isValid = false; } break; case 'email': if (!value) { errorMessage = 'Email is required'; isValid = false; } else if (!Utils.validateEmail(value)) { errorMessage = 'Please enter a valid email address'; isValid = false; } break; case 'service': if (!value) { errorMessage = 'Please select a service'; isValid = false; } break; case 'message': if (!value) { errorMessage = 'Message is required'; isValid = false; } else if (value.length < 10) { errorMessage = 'Message must be at least 10 characters'; isValid = false; } break; } if (!isValid && errorElement) { errorElement.textContent = errorMessage; field.classList.add('error'); } return isValid; },
    clearFieldError(field) { const errorElement = document.getElementById(`${field.name}-error`); if (errorElement) { errorElement.textContent = ''; } field.classList.remove('error'); },
    async handleSubmit() { const fields = this.form.querySelectorAll('.form-control'); let isFormValid = true; fields.forEach(field => { if (!this.validateField(field)) { isFormValid = false; } }); if (!isFormValid) { const firstError = this.form.querySelector('.form-control.error'); if (firstError) { firstError.scrollIntoView({ behavior: 'smooth', block: 'center' }); firstError.focus(); } return; } this.setLoadingState(true); try { await emailjs.sendForm('service_zq6bma1', 'template_uau0tmg', this.form); this.showSuccess(); this.form.reset(); } catch (error) { console.error('FAILED TO SEND EMAIL...', error); this.showError('Failed to send message. Please try again.'); } finally { this.setLoadingState(false); } },
    setLoadingState(isLoading) { const buttonText = this.submitButton.querySelector('.button-text'); const buttonLoading = this.submitButton.querySelector('.button-loading'); if (isLoading) { buttonText.classList.add('hidden'); buttonLoading.classList.remove('hidden'); this.submitButton.disabled = true; } else { buttonText.classList.remove('hidden'); buttonLoading.classList.add('hidden'); this.submitButton.disabled = false; } },
    showSuccess() { if (this.successMessage) { this.successMessage.classList.remove('hidden'); this.successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' }); setTimeout(() => { this.successMessage.classList.add('hidden'); }, 8000); } },
    showError(message) { const errorDiv = document.createElement('div'); errorDiv.className = 'form-error'; errorDiv.style.textAlign = 'center'; errorDiv.style.marginTop = '16px'; errorDiv.style.padding = '12px'; errorDiv.style.backgroundColor = 'rgba(var(--color-error-rgb), 0.1)'; errorDiv.style.borderRadius = '8px'; errorDiv.textContent = message; this.form.appendChild(errorDiv); errorDiv.scrollIntoView({ behavior: 'smooth', block: 'center' }); setTimeout(() => { if (errorDiv.parentNode) { errorDiv.parentNode.removeChild(errorDiv); } }, 5000); },
};

const ChatWidget = {
    init() { this.bubble = document.getElementById('chat-bubble'); this.window = document.getElementById('chat-window'); this.closeButton = document.getElementById('close-chat'); this.input = document.getElementById('chat-input'); this.sendButton = document.getElementById('chat-send'); this.messages = document.getElementById('chat-messages'); if (!this.bubble || !this.window) return; this.bindEvents(); },
    bindEvents() { this.bubble.addEventListener('click', (e) => { e.preventDefault(); this.window.classList.toggle('active'); if (this.window.classList.contains('active')) { setTimeout(() => this.input?.focus(), 100); } }); if (this.closeButton) { this.closeButton.addEventListener('click', (e) => { e.preventDefault(); this.window.classList.remove('active'); }); } if (this.sendButton) { this.sendButton.addEventListener('click', () => this.sendMessage()); } if (this.input) { this.input.addEventListener('keypress', (e) => { if (e.key === 'Enter') { e.preventDefault(); this.sendMessage(); } }); } document.addEventListener('click', (e) => { if (!this.window.contains(e.target) && !this.bubble.contains(e.target)) { this.window.classList.remove('active'); } }); },
    sendMessage() { if (!this.input) return; const message = this.input.value.trim(); if (!message) return; this.addMessage(message, 'user'); this.input.value = ''; setTimeout(() => { const responses = ["Thanks for reaching out! I'd be happy to help you learn more about our services. What specific area are you interested in?", "Great question! Let me connect you with one of our specialists who can provide detailed information about your project.", "I appreciate your interest in TechByte. Our team would love to discuss how we can help transform your business. Would you like to schedule a consultation?", "Thanks for contacting us! We specialize in cutting-edge solutions and would be excited to explore how we can help achieve your goals."]; const randomResponse = responses[Math.floor(Math.random() * responses.length)]; this.addMessage(randomResponse, 'bot'); }, 1000 + Math.random() * 2000); },
    addMessage(text, sender) { if (!this.messages) return; const messageDiv = document.createElement('div'); messageDiv.className = `chat-message chat-message--${sender}`; const bubbleDiv = document.createElement('div'); bubbleDiv.className = 'chat-bubble'; bubbleDiv.textContent = text; messageDiv.appendChild(bubbleDiv); this.messages.appendChild(messageDiv); this.messages.scrollTop = this.messages.scrollHeight; }
};

const ScrollToTop = {
    init() { this.button = document.getElementById('scroll-to-top'); if (!this.button) return; this.bindEvents(); this.handleScroll(); },
    bindEvents() { this.button.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); }); const handleScroll = Utils.throttle(() => this.handleScroll(), 100); window.addEventListener('scroll', handleScroll); },
    handleScroll() { const scrollTop = window.pageYOffset || document.documentElement.scrollTop; if (scrollTop > 500) { this.button.classList.add('visible'); } else { this.button.classList.remove('visible'); } }
};

const LogoScroller = {
    init() { const scrollers = document.querySelectorAll('.scroller'); if (!scrollers.length) return; if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) { scrollers.forEach(scroller => { scroller.setAttribute("data-animated", true); }); } }
};

const PerformanceMonitor = {
    init() { if (!window.performance) return; window.addEventListener('load', () => { setTimeout(() => { const loadTime = performance.now(); console.log(`TechByte page loaded in ${loadTime.toFixed(2)}ms`); }, 0); }); }
};

const AccessibilityEnhancements = {
    init() { this.setupKeyboardNavigation(); this.setupFocusManagement(); },
    setupKeyboardNavigation() { const skipLinks = document.querySelectorAll('a[href^="#"]'); skipLinks.forEach(link => { link.addEventListener('click', (e) => { const targetId = link.getAttribute('href').substring(1); const target = document.getElementById(targetId); if (target) { target.setAttribute('tabindex', '-1'); target.focus(); } }); }); },
    setupFocusManagement() { const mobileMenu = document.getElementById('nav-menu'); const focusableElements = mobileMenu?.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])'); if (focusableElements && focusableElements.length > 0) { const firstElement = focusableElements[0]; const lastElement = focusableElements[focusableElements.length - 1]; mobileMenu.addEventListener('keydown', (e) => { if (!mobileMenu.classList.contains('active')) return; if (e.key === 'Tab') { if (e.shiftKey) { if (document.activeElement === firstElement) { e.preventDefault(); lastElement.focus(); } } else { if (document.activeElement === lastElement) { e.preventDefault(); firstElement.focus(); } } } if (e.key === 'Escape') { const mobileToggle = document.querySelector('.mobile-menu-toggle'); mobileMenu.classList.remove('active'); mobileToggle?.setAttribute('aria-expanded', 'false'); document.body.style.overflow = ''; mobileToggle?.focus(); } }); } }
};

// ==========================================================================
// APPLICATION INITIALIZATION
// ==========================================================================
class TechByteApp {
    constructor() {
        this.modules = [
            LoadingScreen,
            ScrollProgress,
            Navigation,
            ServicesManager,
            PortfolioManager,
            TeamManager,
            TestimonialsSlider,
            FAQ,
            ContactForm,
            ChatWidget,
            ScrollToTop,
            LogoScroller,
            PerformanceMonitor,
            AccessibilityEnhancements
        ];
    }

    init() {
        console.log('Initializing TechByte App...');

        if (window.AOS) {
            AOS.init({
                duration: 800,
                once: true,
                offset: 100,
                disable: function() {
                    return window.innerWidth < 768;
                }
            });
        }

        if (window.innerWidth > 768) {
            this.modules.push(ThreeDBackground);
        } else {
            const canvas = document.getElementById('hero-canvas');
            if (canvas) canvas.style.display = 'none';
        }

        this.modules.forEach(module => {
            try {
                if (module && typeof module.init === 'function') {
                    const moduleName = 'object'
                    console.log(`Initializing ${moduleName}...`);
                    module.init();
                }
            } catch (error) {
                const moduleName = 'object'
                console.warn(`Failed to initialize ${moduleName}:`, error);
            }
        });

        this.setupErrorHandling();
        console.log('TechByte App initialized successfully');
    }

    setupErrorHandling() {
        window.addEventListener('error', (e) => {
            console.error('JavaScript error:', e.error);
        });
        window.addEventListener('unhandledrejection', (e) => {
            console.error('Unhandled promise rejection:', e.reason);
        });
    }
}

// ==========================================================================
// APPLICATION STARTUP
// ==========================================================================
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        const app = new TechByteApp();
        app.init();
    });
} else {
    const app = new TechByteApp();
    app.init();
}

window.TechByteApp = TechByteApp;
window.PortfolioManager = PortfolioManager;