document.addEventListener('DOMContentLoaded', function() {
    var profileForm = document.getElementById('profile-form');
  
    profileForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Get form values
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var bio = document.getElementById('bio').value;
      var resumeFile = document.getElementById('resume').files[0];
  
      // Perform any necessary validation or processing
  
      // Display a success message
      alert('Profile saved successfully!');
    });
  });
  