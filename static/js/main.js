// Animação ao scroll
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.animate');
    
    function checkScroll() {
        animateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight * 0.8) {
                element.classList.add('animate-visible');
            }
        });
    }
    
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Checar elementos visíveis no carregamento inicial
});

// Menu mobile
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (mobileMenu && navLinks) {
    mobileMenu.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Formulário de contato
const formContato = document.getElementById('form-contato');
if (formContato) {
    formContato.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Aqui você pode adicionar a lógica para enviar o formulário
        // Por exemplo, usando fetch para enviar para uma API
        
        // Exemplo de mensagem de sucesso
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        this.reset();
    });
}

// Header fixo com mudança de estilo ao scroll
const header = document.querySelector('.header');
if (header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });
}

// Máscara para o campo de telefone
const telefoneInput = document.getElementById('telefone');
if (telefoneInput) {
    telefoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 11) value = value.slice(0, 11);
        
        if (value.length > 2) {
            value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
        }
        if (value.length > 9) {
            value = `${value.slice(0, 9)}-${value.slice(9)}`;
        }
        
        e.target.value = value;
    });
}

// Carrossel de Portões
document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.portoes-carousel', {
        slidesPerView: 'auto',
        spaceBetween: 12,
        centeredSlides: true,
        loop: true,
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 3
        },
        breakpoints: {
            320: {
                slidesPerView: 3,
                spaceBetween: 12
            },
            480: {
                slidesPerView: 4,
                spaceBetween: 12
            },
            768: {
                slidesPerView: 5,
                spaceBetween: 12
            },
            1024: {
                slidesPerView: 7,
                spaceBetween: 12
            }
        }
    });
});

// Arquivo principal de JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('Site R.A Portões carregado!');

    // Header scroll effect
    const header = document.querySelector('.header');
    const logo = document.querySelector('.logo');
    
    let lastScroll = 0;
    let scrollTimer;
    
    window.addEventListener('scroll', () => {
        // Adiciona classe scrolled quando rolar mais que 50px
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            logo.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
            logo.classList.remove('scrolled');
        }

        // Controla o hide/show baseado na direção do scroll
        const currentScroll = window.pageYOffset;
        
        // Não faz nada se estiver no topo
        if (currentScroll <= 0) {
            header.classList.remove('hide');
            return;
        }
        
        // Clear the timeout if it exists
        clearTimeout(scrollTimer);
        
        if (currentScroll > lastScroll && !header.classList.contains('hide')) {
            // Scrolling down
            header.classList.add('hide');
        } else if (currentScroll < lastScroll && header.classList.contains('hide')) {
            // Scrolling up
            header.classList.remove('hide');
        }
        
        lastScroll = currentScroll;
        
        // Set a timeout to show the header after user stops scrolling
        scrollTimer = setTimeout(() => {
            header.classList.remove('hide');
        }, 1000);
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector('.mobile-menu');
    const nav = document.querySelector('.nav');
    
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}); 