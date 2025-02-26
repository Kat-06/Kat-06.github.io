document.getElementById('testimonialForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const testimonial = document.getElementById('testimonial').value;

    if (name && testimonial) {
        alert('Thank you for your testimonial, ' + name + '!');
        document.getElementById('testimonialForm').reset();
        document.getElementById('thankYouMessage').classList.remove('hidden');
    }
});
