// Function to add cards dynamically
const addCards = (items) => {
  const section = $('#card-section');
  section.empty(); // Clear any existing cards

  items.forEach(item => {
    const card = `
      <div class="col s12 m6 l4">
        <div class="card">
          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" src="${item.image}">
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">
              ${item.title}
              <i class="material-icons right">more_vert</i>
            </span>
            <p><a href="#">${item.link}</a></p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">
              ${item.title}<i class="material-icons right">close</i>
            </span>
            <p class="card-text">${item.description}</p>
          </div>
        </div>
      </div>`;
    section.append(card);
  });
};

// Function to fetch projects from the server
const getProjects = () => {
  $.get('/api/projects', (response) => {
    if (response.statusCode == 200) {
      addCards(response.data);
    }
  });
};

// DOM Ready
$(document).ready(function () {
  $('.materialboxed').materialbox(); // Enables zoom effect for image
  $('.modal').modal(); // Initialize Materialize modals

  // Form submission handling
  $('#contact-form').submit(function (event) {
    event.preventDefault(); // Prevent page reload

    // Grab form values
    const firstName = $('#first_name').val();
    const lastName = $('#last_name').val();
    const password = $('#password').val();
    const email = $('#email').val();

    // Console log the form data
    console.log("Form submitted:");
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Password:", password);
    console.log("Email:", email);

    // Show toast notification
    M.toast({ html: 'Form submitted! Check the console.' });
  });

  // Fetch and render the cards
  getProjects();
});