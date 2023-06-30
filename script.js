const hamburgerIcon = document.getElementById('hamburger-icon');
const closeIcon = document.getElementById('icon-close');
const mainMenu = document.getElementById('main-menu');
const listItem = document.querySelectorAll('.menu-list ul li');

hamburgerIcon.addEventListener('click', () => {
  mainMenu.classList.add('menushow');
});

closeIcon.addEventListener('click', () => {
  mainMenu.classList.remove('menushow');
});

listItem.forEach((item) => {
  item.addEventListener('click', () => {
    mainMenu.classList.remove('menushow');
  });
});

// const placeholders = [
//   {
//     title: 'Multi-Post Stories',
//     subtitle: 'Gain+Glory',
//     tags: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
//   },
//   {
//     title: 'Multi-Post Stories',
//     subtitle: 'Gain+Glory',
//     tags: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
//   },
//   {
//     title: 'Multi-Post Stories',
//     subtitle: 'Gain+Glory',
//     tags: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
//   },
//   {
//     title: 'Multi-Post Stories',
//     subtitle: 'Gain+Glory',
//     tags: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
//   },
//   {
//     title: 'Multi-Post Stories',
//     subtitle: 'Gain+Glory',
//     tags: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
//   },
//   {
//     title: 'Multi-Post Stories',
//     subtitle: 'Gain+Glory',
//     tags: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
//   },
// ];

// // eslint-disable-next-line no-unused-vars
// const openModal = () => {
//   document.getElementById('body').classList.add('overlay');
//   document.getElementById('detail-container').classList.add('detail-view');
// };

// // eslint-disable-next-line no-unused-vars
// const closeModal = () => {
//   document.getElementById('body').classList.remove('overlay');
//   document.getElementById('detail-container').classList.remove('detail-view');
// };

// const generateWorkCardHTML = (placeholders) => {
//   const { title, subtitle, tags } = placeholders;
//   const tagsHTML = tags
//     .map((tag) => `<li class="list-items">${tag}</li>`)
//     .join('');
//   const cardHTML = `
//     <div class="placeholder">
//       <div class="text-container">
//         <h1>${title} ${subtitle}</h1>
//         <ul class="text">
//           ${tagsHTML}
//         </ul>
//         <div class="button1">
//         <button class="button-text" id="card-btn" onclick="openModal()">See Project</button>
//         </div>
//       </div>
//     </div>
//   `;

//   return cardHTML;
// };

const form = document.getElementById('contactForm');
const emailInput = form.querySelector('#email');
const errorMessage = form.querySelector('#error-message');

form.addEventListener('submit', (event) => {
  if (emailInput.value !== emailInput.value.toLowerCase()) {
    event.preventDefault();
    errorMessage.textContent = 'Please enter a lowercase email address.';
  }
});

form.addEventListener('input', () => {
  const formData = Object.fromEntries(new FormData(form).entries());
  localStorage.setItem('UserData', JSON.stringify(formData));
});

const savedFormData = JSON.parse(localStorage.getItem('UserData'));
if (savedFormData) {
  Object.entries(savedFormData).forEach(([name, value]) => {
    const input = form.elements[name];
    if (input) {
      input.value = value;
}
