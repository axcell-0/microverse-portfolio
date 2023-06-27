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

// popup section

const projects = [
  {
    name: 'Project 1',
    description: 'This is the description for Project 1.',
    featuredImage: 'https://example.com/project-1.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    linkToLiveVersion: 'https://example.com/project-1',
    linkToSource: 'https://github.com/user/project-1',
  },
  {
    name: 'Project 2',
    description: 'This is the description for Project 2.',
    featuredImage: 'https://example.com/project-2.jpg',
    technologies: ['Python', 'Django', 'PostgreSQL'],
    linkToLiveVersion: 'https://example.com/project-2',
    linkToSource: 'https://github.com/user/project-2',
  },
  {
    name: 'Project 3',
    description: 'This is the description for Project 3.',
    featuredImage: 'https://example.com/project-3.jpg',
    technologies: ['React', 'Redux', 'Node.js'],
    linkToLiveVersion: 'https://example.com/project-3',
    linkToSource: 'https://github.com/user/project-3',
  },
];

const projectDetails = (project) => {
  const popup = document.createElement('div');
  popup.classList.add('popup');
  popup.innerHTML = `
    <h2>Project Details</h2>
    <img src="${project.featuredImage}" alt="Project image">
    <p>${project.description}</p>
    <ul>
      <li>Technologies: ${project.technologies.join(', ')}</li>
      <li>Live version: <a href="${project.linkToLiveVersion}">${project.linkToLiveVersion}</a></li>
      <li>Source code: <a href="${project.linkToSource}">${project.linkToSource}</a></li>
    </ul>
    <button class="close">Close</button>
  `;

  document.body.appendChild(popup);

  const closeButton = popup.querySelector('.close');
  closeButton.addEventListener('click', () => {
    popup.remove();
  });
};

const projectList = document.querySelector('.project-list');
projectList.addEventListener('click', (event) => {
  const { target } = event;
  if (target.classList.contains('project')) {
    const project = projects.find((project) => project.name === target.textContent);
    projectDetails(project);
  }
});
