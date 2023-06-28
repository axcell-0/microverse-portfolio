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

const placeholders = [
  {
    title: 'Multi-Post Stories\nGain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    tags: [
      'Codekit',
      'GitHub',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
      'Ruby on Rails',
      'CSS',
      'Javascript',
    ],
    paragraph: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.<br><br>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.`,
    desparagraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    liveLink: 'https://github.io/My-Portfolio/',
    sourceLink: 'https://github.com/DanielAD10/My-Portfolio',
    image: './images/popup-img',
  },
  {
    title: 'Multi-Post Stories\nGain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    tags: [
      'Codekit',
      'GitHub',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
      'Ruby on Rails',
      'CSS',
      'Javascript',
    ],
    paragraph: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.<br><br>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.`,
    desparagraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    liveLink: 'https://github.io/My-Portfolio/',
    sourceLink: 'https://github.com/DanielAD10/My-Portfolio',
    image: './images/works-img/electric.svg',
  },
  {
    title: 'Multi-Post Stories\nGain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    tags: [
      'Codekit',
      'GitHub',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
      'Ruby on Rails',
      'CSS',
      'Javascript',
    ],
    paragraph: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.<br><br>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.`,
    desparagraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    liveLink: 'https://github.io/My-Portfolio/',
    sourceLink: 'https://github.com/DanielAD10/My-Portfolio',
    image: './images/works-img/electric.svg',
  },
  {
    title: 'Multi-Post Stories\nGain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    tags: [
      'Codekit',
      'GitHub',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
      'Ruby on Rails',
      'CSS',
      'Javascript',
    ],
    paragraph: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.<br><br>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.`,
    desparagraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    liveLink: 'https://github.io/My-Portfolio/',
    sourceLink: 'https://github.com/DanielAD10/My-Portfolio',
    image: './images/popup-img/snapshort.svg',
  },
  {
    title: 'Multi-Post Stories\nGain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    tags: [
      'Codekit',
      'GitHub',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
      'Ruby on Rails',
      'CSS',
      'Javascript',
    ],
    paragraph: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.<br><br>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.`,
    desparagraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    liveLink: 'https://github.io/My-Portfolio/',
    sourceLink: 'https://github.com/DanielAD10/My-Portfolio',
    image: './images/popup-img/snapshort.svg',
  },
  {
    title: 'Multi-Post Stories\nGain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    tags: [
      'Codekit',
      'GitHub',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
      'Ruby on Rails',
      'CSS',
      'Javascript',
    ],
    paragraph: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.<br><br>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.`,
    desparagraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    liveLink: 'https://github.io/My-Portfolio/',
    sourceLink: 'https://github.com/DanielAD10/My-Portfolio',
    image: './images/popup-img/snapshort.svg',
  },

];
const section = document.getElementById('section-placeholder');

placeholders.forEach((placeholder) => {
  const placeholderContainer = document.createElement('div');
  placeholderContainer.classList.add('placeholder-container');
  const placeholderDiv = document.createElement('div');
  placeholderDiv.classList.add('placeholder');
  const textContainer = document.createElement('div');
  textContainer.classList.add('text-container');
  const heading = document.createElement('h1');
  const ul = document.createElement('ul');
  ul.classList.add('text');
  const buttonDiv = document.createElement('div');
  buttonDiv.classList.add('button1');
  const button = document.createElement('button');
  button.classList.add('button-text');
  button.textContent = 'See project';

  // Add event listener to the button
  button.addEventListener('click', () => {
    const popupHTML = generatepopupHTML(placeholder);
    // Show the popup in your desired way (e.g., by appending it to the DOM)
    // Example: document.body.appendChild(popupHTML);
  });

  heading.innerHTML = placeholder.title;
  placeholder.technologies.forEach((technology) => {
    const li = document.createElement('li');
    li.textContent = technology;
    ul.appendChild(li);
  });

  textContainer.appendChild(heading);
  textContainer.appendChild(ul);
  buttonDiv.appendChild(button);
  placeholderDiv.appendChild(textContainer);
  placeholderDiv.appendChild(buttonDiv);
  placeholderContainer.appendChild(placeholderDiv);
  section.appendChild(placeholderContainer);
});

const generatepopupHTML = (popup) => {
  const {
    title, tags, paragraph, sourceLink, image,
  } = popup;
  const tagsHTML = tags.map((tag) => `<li class="list-items">${tag}</li>`).join('');

  const cardHTML = `
    <div class="detail detail-view" id="detail">
      <div class="detail-container">
        <button class="detail-close-btn" id="close-card">&times;</button>
        <div class="image-container">
          <img src="${image}" alt="Project Image">
        </div>
        <div class="detail-text-container">
          <div class="detail-header-box">
            <h3 class="detail-text-header" id="detail-title">${title}</h3>
            <div class="detail-subtitle">${title}</div>
            <div class="detail-btn-box">
              <button class="detail-btn">
                See live <a href="${sourceLink}" alt="Live icon"></a>
              </button>
              <button class="detail-btn">
                See source <a href="${sourceLink}"><img src="./assets/images/seeSrc-btn.svg" alt="GitHub icon"></a>
              </button>
            </div>
          </div>
          <div>
            <ul class="detail-list-box">${tagsHTML}</ul>
          </div>
          <div class="detail-text">${paragraph}</div>
        </div>
      </div>
    </div>
  `;

  return cardHTML;
};

/// Function to show the popup
const showPopup = (event) => {
  const button = event.target;
  const placeholderDiv = button.parentNode.parentNode;
  const placeholderIndex = Array.from(placeholderDiv.parentNode.children).indexOf(placeholderDiv);
  const popupHTML = generatepopupHTML(placeholders[placeholderIndex]);

  // Create a new element to hold the popup
  const popupContainer = document.createElement('div');
  popupContainer.classList.add('popup-container');
  popupContainer.innerHTML = popupHTML;

  // Append the popup container to the body
  document.body.appendChild(popupContainer);
};

// Add click event listener to each "See project" button
const seeProjectButtons = document.querySelectorAll('.button-text');
seeProjectButtons.forEach((button) => {
  button.addEventListener('click', showPopup);
});

// Function to close the popup
const closePopup = () => {
  const popupContainer = document.querySelector('.popup-container');
  popupContainer.remove();
};

// Attach event listener to the close button
document.addEventListener('click', (event) => {
  if (event.target.id === 'close-card') {
    closePopup();
  }
});
