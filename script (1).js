// Certificates Modal Functions
function openCertificatesModal() {
    document.getElementById('certificatesModal').style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeCertificatesModal() {
    document.getElementById('certificatesModal').style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Close modal when clicking outside
window.onclick = function (event) {
    const certModal = document.getElementById('certificatesModal');
    const projModal = document.getElementById('projectsModal');
    const aboutModal = document.getElementById('aboutModal');
    const contactModal = document.getElementById('contactModal');
    const resumeModal = document.getElementById('resumeModal');
    const educationModal = document.getElementById('educationModal');
    if (event.target === certModal) {
        closeCertificatesModal();
    }
    if (event.target === projModal) {
        closeProjectsModal();
    }
    if (event.target === aboutModal) {
        closeAboutModal();
    }
    if (event.target === contactModal) {
        closeContactModal();
    }
    if (event.target === resumeModal) {
        closeResumeModal();
    }
    if (event.target === educationModal) {
        closeEducationModal();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeCertificatesModal();
        closeProjectsModal();
        closeAboutModal();
        closeContactModal();
        closeResumeModal();
        closeEducationModal();
    }
});

// Projects Modal Functions
function openProjectsModal() {
    document.getElementById('projectsModal').style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeProjectsModal() {
    document.getElementById('projectsModal').style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// About Modal Functions
function openAboutModal() {
    document.getElementById('aboutModal').style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeAboutModal() {
    document.getElementById('aboutModal').style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Contact Modal Functions
function openContactModal() {
    document.getElementById('contactModal').style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeContactModal() {
    document.getElementById('contactModal').style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Resume Modal Functions
function openResumeModal() {
    document.getElementById('resumeModal').style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeResumeModal() {
    document.getElementById('resumeModal').style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Education Modal Functions
function openEducationModal() {
    document.getElementById('educationModal').style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeEducationModal() {
    document.getElementById('educationModal').style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Scroll to Projects and Open Modal
function scrollToProjects() {
    const projectsSection = document.querySelector('.secondsection');
    projectsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });

    // Open modal after scrolling animation completes (1 second delay for formal effect)
    setTimeout(function () {
        openProjectsModal();
    }, 1000);
}

var typed = new Typed('#element', {
    strings: ['Clean code, continuous learning, and constant growth.'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
    showCursor: false,
});
