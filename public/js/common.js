// Add this script to handle the logout functionality
document.addEventListener('DOMContentLoaded', function() {
    const logoutButton = document.getElementById('logout-button');
    logoutButton.addEventListener('click', function() {
        window.location.href = 'login.html'; // Redirect to login page on click
    });
});
