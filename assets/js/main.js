// Smooth scrolling for anchor links on same page
(function() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
})();

// Subtle glitch effect on logo after load
window.addEventListener('load', function() {
    var logo = document.querySelector('.logo');
    if (!logo) return;
    setTimeout(function() {
        logo.style.transform = 'translateX(-2px)';
        setTimeout(function() {
            logo.style.transform = 'translateX(2px)';
            setTimeout(function() {
                logo.style.transform = 'translateX(0)';
            }, 50);
        }, 50);
    }, 800);
});

// Easter egg console output
(function() {
    var egg = document.querySelector('.easter-egg');
    if (!egg) return;
    egg.addEventListener('click', function() {
        console.log('%c CONTRA ', 'background: #FF3333; color: #FAFAFA; font-size: 40px; font-weight: bold; padding: 20px;');
        console.log('%c Accounting for rebels since 2025 ', 'background: #000; color: #FAFAFA; padding: 10px;');
        console.log('Looking for something? Email us at hello@withcontra.com');
    });
})();

// Enhanced contact form handler
(function() {
    var form = document.querySelector('.contact-form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        var formData = new FormData(form);
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var company = document.getElementById('company').value;
        var service = document.getElementById('service').value;
        var message = document.getElementById('message').value;
        
        // Basic validation
        if (!name || !email || !company || !service) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Show success message with brand voice
        alert('Message received. We\'ll be in touch within 24 hours.');
        
        // Reset form
        form.reset();
        
        // Add subtle animation to submit button
        var submitBtn = form.querySelector('.submit-btn');
        submitBtn.style.transform = 'scale(0.95)';
        setTimeout(function() {
            submitBtn.style.transform = 'scale(1)';
        }, 150);
    });
})();

// Animate numbers on scroll
(function() {
    var animatedNumbers = document.querySelectorAll('.stat-number');
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                var target = entry.target;
                var finalNumber = target.textContent;
                var isPercentage = finalNumber.includes('%');
                var isCurrency = finalNumber.includes('$');
                var isTime = finalNumber.includes('/');
                
                var numericValue = parseInt(finalNumber.replace(/[^0-9]/g, ''));
                
                if (numericValue && !target.classList.contains('animated')) {
                    target.classList.add('animated');
                    animateNumber(target, 0, numericValue, 2000, isPercentage, isCurrency, isTime);
                }
            }
        });
    });
    
    animatedNumbers.forEach(function(number) {
        observer.observe(number);
    });
    
    function animateNumber(element, start, end, duration, isPercentage, isCurrency, isTime) {
        var startTime = null;
        
        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            var timeElapsed = currentTime - startTime;
            var progress = Math.min(timeElapsed / duration, 1);
            
            var current = Math.floor(progress * (end - start) + start);
            
            var displayValue = current;
            if (isCurrency) displayValue = '$' + current + 'M';
            else if (isPercentage) displayValue = current + '%';
            else if (isTime) displayValue = current + '/7';
            
            element.textContent = displayValue;
            
            if (progress < 1) {
                requestAnimationFrame(animation);
            }
        }
        
        requestAnimationFrame(animation);
    }
})();

// Add hover effects to service cards
(function() {
    var serviceCards = document.querySelectorAll('.service-card, .value-card, .faq-item');
    
    serviceCards.forEach(function(card) {
        card.addEventListener('mouseenter', function() {
            this.style.cursor = 'pointer';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.cursor = 'default';
        });
    });
})();

// Mobile menu toggle (for future enhancement)
(function() {
    // This is a placeholder for mobile menu functionality
    // Can be expanded if needed for mobile navigation
})();

// Form input enhancements
(function() {
    var formInputs = document.querySelectorAll('.form-input');
    
    formInputs.forEach(function(input) {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
        
        // Check if input has value on page load
        if (input.value) {
            input.parentElement.classList.add('focused');
        }
    });
})();