const clickMe = () => {
  alert("Thanks for clicking me. Hope you have a nice day!");
};

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
    desc: "Demo desciption about kitten 3"
  }
];

const addCards = (items) => {
  const section = $('#card-section');
  section.empty();
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

$(document).ready(function () {
  $('.materialboxed').materialbox();
  $('#clickMeButton').click(() => {
    clickMe();
  });

  addCards(cardList);
});
