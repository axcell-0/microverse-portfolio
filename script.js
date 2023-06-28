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
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML']
  },
  {
    title: 'Multi-Post Stories\nGain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML']
  },
  {
    title: 'Multi-Post Stories\nGain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML']
  },
  {
    title: 'Multi-Post Stories\nGain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML']
  },
  {
    title: 'Multi-Post Stories\nGain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML']
  },
  {
    title: 'Multi-Post Stories\nGain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML']
  }
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