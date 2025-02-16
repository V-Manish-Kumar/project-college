document.addEventListener('DOMContentLoaded', function() {
    // Modal functionality for event registration
    const modal = document.getElementById('registrationModal');
    const registerButtons = document.querySelectorAll('.register-btn');
    const closeButton = document.querySelector('.close');
    
    if (registerButtons.length > 0) {
        registerButtons.forEach(button => {
            button.addEventListener('click', function() {
                const eventId = this.getAttribute('data-event-id');
                document.getElementById('event_id').value = eventId;
                modal.style.display = 'block';
            });
        });
    }
    
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }
    
    // Close modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
    
    // Auto-dismiss alerts after 5 seconds
    const alerts = document.querySelectorAll('.alert');
    if (alerts.length > 0) {
        setTimeout(function() {
            alerts.forEach(alert => {
                alert.style.opacity = '0';
                setTimeout(function() {
                    alert.style.display = 'none';
                }, 500);
            });
        }, 5000);
    }
    
    // Form validation
    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(event) {
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;
            
            // Simple phone validation
            if (!/^\d{10}$/.test(phone)) {
                alert('Please enter a valid 10-digit phone number');
                event.preventDefault();
                return;
            }
            
            // Simple email validation
            if (!/\S+@\S+\.\S+/.test(email)) {
                alert('Please enter a valid email address');
                event.preventDefault();
                return;
            }
        });
    }
});
