document.addEventListener("DOMContentLoaded", function() {
  // Smooth scroll functionality for navigation links
  const navLinks = document.querySelectorAll('nav ul a');
  navLinks.forEach(link => {
      link.addEventListener('click', e => {
          e.preventDefault();
          const targetId = link.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);
          window.scrollTo({
              top: targetElement.offsetTop - 100,
              behavior: 'smooth'
          });
      });
  });

  // Fetch and display projects dynamically
  const projectsContainer = document.querySelector('#projects .grid');
  fetch('projects.json') // assuming you have a JSON file with project data
      .then(response => response.json())
      .then(projects => {
          projects.forEach(project => {
              const projectCard = `
                  <div class="border rounded p-4">
                      <h3 class="text-lg font-bold">${project.title}</h3>
                      <p>${project.description}</p>
                      <a href="${project.demo}" class="text-blue-600 hover:underline">Demo</a>
                      <a href="${project.github}" class="text-blue-600 hover:underline">GitHub</a>
                  </div>
              `;
              projectsContainer.innerHTML += projectCard;
          });
      })
      .catch(error => console.error('Error fetching projects:', error));
});
