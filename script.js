// Example JavaScript code to dynamically populate job listings
document.addEventListener('DOMContentLoaded', function() {
    var jobListings = [
      { title: 'Frontend Developer', company: 'ABC Corp', location: 'New York' },
      { title: 'Backend Developer', company: 'XYZ Inc', location: 'San Francisco' },
      { title: 'UI/UX Designer', company: 'PQR Ltd', location: 'London' }
    ];
  
    var jobListingsUl = document.getElementById('job-listings');
  
    jobListings.forEach(function(job) {
      var li = document.createElement('li');
      li.innerHTML = '<h3>' + job.title + '</h3>' +
                     '<p>' + job.company + ' - ' + job.location + '</p>';
      jobListingsUl.appendChild(li);
    });
  });
  