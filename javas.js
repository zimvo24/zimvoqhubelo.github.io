document.querySelectorAll('.toggle-section').forEach(button => {
    button.addEventListener('click', function() {
        // Hide all sections
        document.querySelectorAll('.info-content').forEach(section => {
            section.style.display = 'none';
        });

        // Show the selected section
        const sectionId = this.getAttribute('data-section');
        document.getElementById(sectionId).style.display = 'block';
    });
});
