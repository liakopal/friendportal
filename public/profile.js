document.addEventListener('DOMContentLoaded', function() {
    // Fetch the user data when the page loads
    fetch('/profile')
      .then(response => response.json())
      .then(data => {
        // Populate the fields with the data
        document.getElementById('username').textContent = data.username;
        document.getElementById('age').textContent = data.age;
        document.getElementById('email').textContent = data.email;
        document.getElementById('gender').textContent = data.gender;
        document.getElementById('interests').textContent = data.interests;
      })
    //   .catch(error => console.error('Error fetching profile data:', error));
  });
  
//   document.getElementById('jasmine-name').addEventListener('click', function() {
//     // Code to execute when Jasmine's name is clicked
//     window.location.href = 'profile.html';
// });