// // myhome.js
// document.addEventListener('DOMContentLoaded', function() {
//     const jasmineButton = document.getElementById('jasmine-button');

//     if (jasmineButton) {
//         jasmineButton.addEventListener('click', function() {
//             // Redirect to Jasmine's profile page on click
//             window.location.href = 'Jasmine_profile.html'; // Assuming 'profile.html' is the profile page for Jasmine
//         });
//     }
// });

// myhome.js
document.addEventListener('DOMContentLoaded', function() {
    // Select all buttons with the class 'profile-button'
    const profileButtons = document.querySelectorAll('.profile-button');

    profileButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Use the data attribute to redirect to the correct profile page
            const profileName = button.getAttribute('data-profile');
            window.location.href = `${profileName}_profile.html`;
        });
    });
});
