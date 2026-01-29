
document.addEventListener('DOMContentLoaded', function() {
    
    const hour = new Date().getHours();
    let greeting = "Welcome!";
    
    if (hour < 12) greeting = "Good Morning!";
    else if (hour < 18) greeting = "Good Afternoon!";
    else greeting = "Good Evening!";
    
    const greetingElement = document.getElementById('greeting');
    if (greetingElement) {
        greetingElement.textContent = greeting;
    }
    

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});


function viewProject(projectId) {
    alert(`Viewing details for Project ${projectId}\nThis would show more information in a real application.`);
}


function sendMessage() {
    const name = document.querySelector('input[type="text"]').value;
    if (name) {
        alert(`Thank you ${name}! Your message has been sent.`);
        document.querySelector('.contact-form').reset();
    } else {
        alert('Please enter your name first.');
    }
}