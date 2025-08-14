// List of cards to be added dynamically
const cardList = [
  {
    title: "Kitten",
    image: "images/kitten.jpg",
    link: "About Kitten",
    desc: "Hello There! I just wanted to say HI to you guys. See ya!"
  },
  {
    title: "Kitten 2",
    image: "images/kitten2.png",
    link: "About Kitten 2",
    desc: "Demo desciption about kitten 2"
  },
  {
    title: "Kitten 3",
    image: "images/kitten3.jpg",
    link: "About Kitten 3",
    desc: "Demo desciption about kitten 2"
  }
];

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
            <p class="card-text">${item.desc}</p>
          </div>
        </div>
      </div>`;
    section.append(card);
  });
};

// DOM Ready
$(document).ready(function () {
  $('.materialboxed').materialbox();  // Enables zoom effect for image
  $('.modal').modal();                // Initialize Materialize modals

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

  // Render the cards
  addCards(cardList);
});
