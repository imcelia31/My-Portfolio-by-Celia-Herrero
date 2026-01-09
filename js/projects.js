// Projects Data
const projectsData = {
    books: [
        {
            id: 'mounstruodehumo',
            title: 'The Smoke Monster',
            description: 'The Smoke Monster is a children’s book that tackles the war in Palestine with a delicate and emotional perspective. Through the eyes of a young girl, the story shows how many families are forced to leave everything behind. To survive the harshness of reality, the protagonist creates a dystopian world filled with fantasy characters an imaginary escape that allows her to evade and protect herself from what she is experiencing.',
            images: [
                'assets/content/books/mounstruodehumo/libro1.jpg',
                'assets/content/books/mounstruodehumo/libro2.png',
                'assets/content/books/mounstruodehumo/libro3.png'
            ]
        },
        {
            id: 'miqueridahijahilde',
            title: 'My Dear Daughter Hildegart',
            description: 'For this project, I illustrated a biography with a symbolic and artistic approach, making it more visual and appealing to a young audience not usually familiar with this type of text.',
            images: [
                'assets/content/books/miqueridahijahilde/mq1.png',
                'assets/content/books/miqueridahijahilde/mq2.jpg',
                'assets/content/books/miqueridahijahilde/mq3.jpg'
            ]
        },
        {
            id: 'esteeseldiariodeunachicanormal',
            title: 'This is the Diary of a Normal Girl',
            description: 'This project is a fanzine where, through photos from my childhood, I explore the social pressures on beauty that women face today.',
            images: [
                'assets/content/books/esteeseldiariodeunachicanormal/09.png',
                'assets/content/books/esteeseldiariodeunachicanormal/ttttt.png',
                'assets/content/books/esteeseldiariodeunachicanormal/ultpag.png'
            ]
        }
    ],
    branding: [
        {
            id: 'forma',
            title: 'Forma',
            description: 'Forma is a brand created alongside a classmate for a design university affiliated with Oxford, based in Madrid. The goal of the project was to build a fresh and disruptive visual identity, moving away from traditional industry codes to capture the attention of a young audience interested in design.',
            images: [
                'assets/content/branding/forma/mockupcarteles.png',
                'assets/content/branding/forma/billboardtexto.png',
                'assets/content/branding/forma/revista.png'
            ]
        },
        {
            id: 'nightsphere',
            title: 'NightSphere',
            description: 'During the creation of this design idea, I collaborated with a classmate on the brand image of a metal band with a "cute" concept. We designed an angular typography typical of metal but with pastel colors and adorable elements to contrast. The result was a unique visual identity that harmoniously combined the dark and tender aspects.',
            images: [
                'assets/content/branding/NightSphere/disco.jpg',
                'assets/content/branding/NightSphere/cami+.jpg',
                'assets/content/branding/NightSphere/IMG_1018.jpg'
            ]
        },
        {
            id: 'olympics',
            title: 'Olympics Concept',
            description: 'Olympics is a digital sub-brand concept for the Olympic Games created to keep the brand alive outside of competition periods. The project connects future and history by focusing on athletes, key figures who broke boundaries and changed sports.',
            images: [
                'assets/content/branding/olympics/olympicslogo.png',
                'assets/content/branding/olympics/olympicsbolt.png',
                'assets/content/branding/olympics/olympicsweb.png'
            ]
        }
    ],
    stuff: [
        {
            id: 'newyorker',
            title: 'New Yorker Cover',
            description: 'This is a cover proposal for The New Yorker dedicated to the death of John Lennon, marking the void he left in the music world.',
            images: [
                'assets/content/stuff/newyorker.png'
            ]
        },
        {
            id: 'lineadeltiempo',
            title: 'Timeline',
            description: 'This timeline addresses the decline of the hippie movement, directly linking it to the fateful murders of the Manson family and showing how both events are connected.',
            images: [
                'assets/content/stuff/lineadeltiempo.jpg'
            ]
        },
        {
            id: 'cartelrandom',
            title: 'Poster Design',
            description: 'This is a poster that is part of a collection centered on the pillars of design, this one being dedicated to typography.',
            images: [
                'assets/content/stuff/cartelrandomlaverdad.jpg'
            ]
        }
    ],
    illustrations: [
        {
            id: 'chicacuervo',
            title: 'Crow Girl',
            description: '16/12/2024',
            images: [
                'assets/content/illustrations/chicacuervo.png'
            ]
        },
        {
            id: 'ninabosque',
            title: 'Forest Girl',
            description: '12/12/2024',
            images: [
                'assets/content/illustrations/niñabosque.jpg'
            ]
        },
        {
            id: 'ninaspueblo',
            title: 'Girls of the Village',
            description: '09/06/2025',
            images: [
                'assets/content/illustrations/niñaspueblo.jpg'
            ]
        }
    ]
};



// Current state
let currentCategory = null;
let currentProjectIndex = 0;
let currentImageIndex = 0;

// DOM Elements
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const projectModal = document.getElementById('project-modal');
const modalCategoryTitle = document.getElementById('modal-category-title');
const carouselImage = document.getElementById('carousel-image');
const carouselProjectTitle = document.getElementById('carousel-project-title');
const carouselProjectDesc = document.getElementById('carousel-project-desc');
const carouselDots = document.getElementById('carousel-dots');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initLightbox();
    initProjectFolders();
    initModal();
    initAboutAnimation();
});

// Lightbox functionality
let zoomLevel = 1;
let panX = 0;
let panY = 0;
let isDragging = false;
let startX, startY;

function initLightbox() {
    const lightboxContainer = document.querySelector('.lightbox-container');
    const zoomInBtn = document.querySelector('.zoom-in');
    const zoomOutBtn = document.querySelector('.zoom-out');
    const zoomResetBtn = document.querySelector('.zoom-reset');

    // Click on papers to open lightbox
    document.querySelectorAll('.paper[data-full]').forEach(paper => {
        paper.addEventListener('click', (e) => {
            e.stopPropagation();
            const fullImg = paper.getAttribute('data-full');
            if (fullImg) {
                lightboxImg.src = fullImg;
                resetZoom();
                lightbox.classList.add('active');
            }
        });
    });

    // Zoom controls
    zoomInBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        zoomIn();
    });

    zoomOutBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        zoomOut();
    });

    zoomResetBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        resetZoom();
    });

    // Mouse wheel zoom
    lightboxContainer.addEventListener('wheel', (e) => {
        e.preventDefault();
        if (e.deltaY < 0) {
            zoomIn();
        } else {
            zoomOut();
        }
    });

    // Pan functionality
    lightboxContainer.addEventListener('mousedown', (e) => {
        if (zoomLevel > 1) {
            isDragging = true;
            startX = e.clientX - panX;
            startY = e.clientY - panY;
            lightboxContainer.style.cursor = 'grabbing';
        }
    });

    lightboxContainer.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        panX = e.clientX - startX;
        panY = e.clientY - startY;
        updateTransform();
    });

    lightboxContainer.addEventListener('mouseup', () => {
        isDragging = false;
        lightboxContainer.style.cursor = zoomLevel > 1 ? 'grab' : 'default';
    });

    lightboxContainer.addEventListener('mouseleave', () => {
        isDragging = false;
        lightboxContainer.style.cursor = zoomLevel > 1 ? 'grab' : 'default';
    });

    // Touch support for mobile
    let touchStartX, touchStartY;
    lightboxContainer.addEventListener('touchstart', (e) => {
        if (zoomLevel > 1 && e.touches.length === 1) {
            touchStartX = e.touches[0].clientX - panX;
            touchStartY = e.touches[0].clientY - panY;
        }
    });

    lightboxContainer.addEventListener('touchmove', (e) => {
        if (zoomLevel > 1 && e.touches.length === 1) {
            e.preventDefault();
            panX = e.touches[0].clientX - touchStartX;
            panY = e.touches[0].clientY - touchStartY;
            updateTransform();
        }
    });

    // Close lightbox
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
            lightbox.classList.remove('active');
            resetZoom();
        }
    });

    // Close with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            lightbox.classList.remove('active');
            projectModal.classList.remove('active');
            resetZoom();
        }
    });
}

function zoomIn() {
    if (zoomLevel < 4) {
        zoomLevel += 0.5;
        updateTransform();
    }
}

function zoomOut() {
    if (zoomLevel > 1) {
        zoomLevel -= 0.5;
        if (zoomLevel === 1) {
            panX = 0;
            panY = 0;
        }
        updateTransform();
    }
}

function resetZoom() {
    zoomLevel = 1;
    panX = 0;
    panY = 0;
    updateTransform();
    const lightboxContainer = document.querySelector('.lightbox-container');
    if (lightboxContainer) {
        lightboxContainer.style.cursor = 'default';
    }
}

function updateTransform() {
    lightboxImg.style.transform = `translate(${panX}px, ${panY}px) scale(${zoomLevel})`;
    const lightboxContainer = document.querySelector('.lightbox-container');
    if (lightboxContainer) {
        lightboxContainer.style.cursor = zoomLevel > 1 ? 'grab' : 'default';
    }
}

// Project folders in My Projects section
function initProjectFolders() {
    document.querySelectorAll('.project-folder').forEach(folder => {
        folder.addEventListener('click', () => {
            const category = folder.getAttribute('data-category');
            openProjectModal(category);
        });
    });

    // Also allow clicking hero folders to open modal
    document.querySelectorAll('.folder-container[data-category]').forEach(container => {
        container.addEventListener('dblclick', () => {
            const category = container.getAttribute('data-category');
            openProjectModal(category);
        });
    });
}

// Modal functionality
function initModal() {
    // Close modal
    document.querySelector('.modal-close').addEventListener('click', () => {
        projectModal.classList.remove('active');
    });

    projectModal.addEventListener('click', (e) => {
        if (e.target === projectModal) {
            projectModal.classList.remove('active');
        }
    });

    // Carousel arrows
    document.querySelector('.carousel-prev').addEventListener('click', () => {
        navigateProject(-1);
    });

    document.querySelector('.carousel-next').addEventListener('click', () => {
        navigateProject(1);
    });

    // Click on carousel image to view full size
    carouselImage.addEventListener('click', () => {
        lightboxImg.src = carouselImage.src;
        resetZoom();
        lightbox.classList.add('active');
    });
}

function openProjectModal(category) {
    currentCategory = category;
    currentProjectIndex = 0;
    currentImageIndex = 0;

    const categoryNames = {
        books: 'Books',
        branding: 'Branding',
        stuff: 'Stuff',
        illustrations: 'Illustration'
    };

    modalCategoryTitle.textContent = categoryNames[category] || category;
    updateCarousel();
    projectModal.classList.add('active');
}

function updateCarousel() {
    const projects = projectsData[currentCategory];
    if (!projects || projects.length === 0) return;

    const project = projects[currentProjectIndex];
    
    // Update image
    carouselImage.src = project.images[currentImageIndex];
    
    // Update info
    carouselProjectTitle.textContent = project.title;
    carouselProjectDesc.textContent = project.description;

    // Update image thumbnails/dots (for switching between images in current project)
    updateImageDots(project);
}

function updateImageDots(project) {
    // Get or create image dots container
    let imageDots = document.getElementById('image-dots');
    if (!imageDots) {
        imageDots = document.createElement('div');
        imageDots.id = 'image-dots';
        imageDots.className = 'image-dots';
        document.querySelector('.carousel-image-wrapper').appendChild(imageDots);
    }

    imageDots.innerHTML = '';
    
    if (project.images.length > 1) {
        imageDots.style.display = 'flex';
        project.images.forEach((img, index) => {
            const dot = document.createElement('span');
            dot.className = `image-dot ${index === currentImageIndex ? 'active' : ''}`;
            dot.addEventListener('click', (e) => {
                e.stopPropagation();
                currentImageIndex = index;
                carouselImage.src = project.images[currentImageIndex];
                updateImageDotsActive();
            });
            imageDots.appendChild(dot);
        });
    } else {
        imageDots.style.display = 'none';
    }
}

function updateImageDotsActive() {
    document.querySelectorAll('.image-dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentImageIndex);
    });
}

function navigateProject(direction) {
    const projects = projectsData[currentCategory];
    if (!projects) return;

    currentProjectIndex += direction;
    
    if (currentProjectIndex < 0) {
        currentProjectIndex = projects.length - 1;
    } else if (currentProjectIndex >= projects.length) {
        currentProjectIndex = 0;
    }
    
    currentImageIndex = 0;
    updateCarousel();
}

// About section animation on scroll
function initAboutAnimation() {
    const aboutSection = document.querySelector('.about-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutSection.classList.add('visible');
            }
        });
    }, {
        threshold: 0.2
    });

    observer.observe(aboutSection);
}


