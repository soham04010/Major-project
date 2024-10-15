document.getElementById('email-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    
    fetch('https://script.google.com/macros/s/YOUR_GOOGLE_SCRIPT_URL/exec', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('email-response').textContent = 'Subscription Successful!';
        this.reset();
    })
    .catch(error => {
        document.getElementById('email-response').textContent = 'There was an error. Please try again.';
    });
});
