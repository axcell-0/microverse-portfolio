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
  },
  {
    title: 'Multi-Post Stories\nGain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
  },
  {
    title: 'Multi-Post Stories\nGain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
  },
  {
    title: 'Multi-Post Stories\nGain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
  },
  {
    title: 'Multi-Post Stories\nGain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
  },
  {
    title: 'Multi-Post Stories\nGain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
  },
];

const detail = [
  {
    title: 'Keeping track of hundreds of components',
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
    liveLink: 'https://danielad10.github.io/My-Portfolio/',
    sourceLink: 'https://github.com/DanielAD10/My-Portfolio',
    image: './images/popup-img/detail-des-img.svgt',
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
// detail view section
const closeDetailView = function closeDetailHandler() {
  const overlay = document.querySelector('.overlay');
  document.querySelector('.detail').style.display = 'none';
  overlay.remove();
};

const generateDetailView = (data) => {
  const detailView = document.createElement('div');
  detailView.classList.add('detail', 'detail-view');
  detailView.id = 'detail';

  const detailViewContainer = document.createElement('div');
  detailViewContainer.classList.add('detail-container');

  const closeButton = document.createElement('button');
  closeButton.classList.add('detail-close-btn');
  closeButton.id = 'close-card';

  const imageContainer = document.createElement('div');
  imageContainer.classList.add('image-container');

  const title = document.createElement('h3');
  title.classList.add('detail-text-header');
  title.id = 'detail-title';

  if (window.innerWidth >= 768) {
    const titleText = 'Keeping track of hundreds of components';
    title.textContent = titleText;
  } else {
    title.textContent = 'Keeping track of hundreds of components';
  }

  const tagList = document.createElement('ul');
  tagList.classList.add('detail-list-box');
  const allowedTags = [];

  if (window.innerWidth >= 768) {
    allowedTags.push(
      'Codekit',
      'GitHub',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    );
  } else {
    allowedTags.push('Ruby on Rails', 'CSS', 'Javascript');
  }

  data.tags.forEach((tag) => {
    if (allowedTags.includes(tag)) {
      const tagItem = document.createElement('li');
      tagItem.textContent = tag;
      tagItem.classList.add('list-item');
      tagList.appendChild(tagItem);
    }
  });

  const tags = document.createElement('div');
  tags.appendChild(tagList);

  const paragraph = document.createElement('div');
  paragraph.classList.add('detail-text');

  if (window.innerWidth >= 768) {
    paragraph.innerHTML = `${data.desparagraph}<br>`;
  } else {
    paragraph.innerHTML = `${data.paragraph}<br>`;
  }

  const sourceBtn1 = document.createElement('button');
  sourceBtn1.classList.add('detail-btn');
  sourceBtn1.textContent = 'See live';
  sourceBtn1.addEventListener('click', () => {
    window.open(data.liveLink, '_blank');
  });
  const sourceLink1 = document.createElement('a');
  sourceLink1.href = data.liveLink;
  const sourceIcon1 = document.createElement('img');
  sourceIcon1.src = './images/popup-img/seelive-btn.svg';
  sourceIcon1.alt = 'Live icon';
  sourceLink1.appendChild(sourceIcon1);
  sourceBtn1.appendChild(sourceLink1);

  const sourceBtn2 = document.createElement('button');
  sourceBtn2.classList.add('detail-btn');
  sourceBtn2.textContent = 'See source';
  sourceBtn2.addEventListener('click', () => {
    window.open(data.sourceLink, '_blank');
  });
  const sourceLink2 = document.createElement('a');
  sourceLink2.href = data.sourceLink;
  const sourceIcon2 = document.createElement('img');
  sourceIcon2.src = './images/popup-img/seesrc-btn.svg';
  sourceIcon2.alt = 'GitHub icon';
  sourceLink2.appendChild(sourceIcon2);
  sourceBtn2.appendChild(sourceLink2);

  const btnContainer = document.createElement('div');
  btnContainer.classList.add('detail-btn-box');
  btnContainer.appendChild(sourceBtn1);
  btnContainer.appendChild(sourceBtn2);

  const headerBox = document.createElement('div');
  headerBox.classList.add('detail-header-box');

  const textContainer = document.createElement('div');
  textContainer.classList.add('detail-text-container');

  if (window.innerWidth >= 768) {
    headerBox.appendChild(title);
    headerBox.appendChild(btnContainer);

    textContainer.appendChild(headerBox);
    textContainer.appendChild(tags);
    textContainer.appendChild(paragraph);
  } else {
    textContainer.appendChild(title);
    textContainer.appendChild(tags);
    textContainer.appendChild(paragraph);
    textContainer.appendChild(btnContainer);
  }

  detailViewContainer.appendChild(closeButton);
  detailViewContainer.appendChild(imageContainer);
  detailViewContainer.appendChild(textContainer);

  detailView.appendChild(detailViewContainer);

  return detailView;
};

const displayDetailView = () => {
  const detailViewContainer = document.querySelector('#detail-container');

  detail.forEach((data) => {
    const detailView = generateDetailView(data);
    detailView
      .querySelector('#close-card')
      .addEventListener('click', closeDetailView);
    detailViewContainer.appendChild(detailView);
  });
};

displayDetailView();