const btn = document.querySelector('.info-image');
const showHamburger = document.querySelector('.show-hamburger');
const menuLinks = document.querySelectorAll('.menu-links');
const closeBtn = document.querySelector('.close-cross');
const allWorks = document.querySelector('.all-works__detail');
const modalSection = document.querySelector('.modal-section');
const firstWork = document.querySelector('.work-1');
const sections = document.querySelector('#section');
const divClass = document.querySelector('.div-class');

function openButton() {
  showHamburger.classList.remove('hidden');
}

btn.addEventListener('click', openButton);

function closeButton() {
  showHamburger.classList.add('hidden');
}

closeBtn.addEventListener('click', closeButton);

menuLinks.forEach((link) => link.addEventListener('click', () => {
  showHamburger.classList.add('hidden');
}));

const arrProject = [
  {
    name: 'Professional Art Printing Data',
    nameCard: 'Multi Post Stories',
    number: 1,
    Description:
      "A daily selection of privately personalized reads; no account or sign-ups required,has been the industry's standard",
    descriptionCard:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    descriptionGym:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaL",
    technology1: 'html',
    technology2: 'bootstrap',
    technology3: 'ruby',
    technology4: 'Ruby on rails',
    button: 'see project',
    btnCard1: 'See Live',
    btnCard2: 'See Source',
  },
  {
    name: 'Professional Art Printing Data',
    nameCard: 'Multi Post Stories',
    number: 2,
    Description:
      "A daily selection of privately personalized reads; no account or sign-ups required,has been the industry's standard",
    descriptionCard:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    descriptionGym:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaL",
    technology1: 'html',
    technology2: 'bootstrap',
    technology3: 'ruby',
    technology4: 'Ruby on rails',
    button: 'see project',
    btnCard1: 'See Live',
    btnCard2: 'See Source',
  },
  {
    name: 'Professional Art Printing Data',
    nameCard: 'Multi Post Stories',
    number: 3,
    Description:
      "A daily selection of privately personalized reads; no account or sign-ups required,has been the industry's standard",
    descriptionCard:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    descriptionGym:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaL",
    technology1: 'html',
    technology2: 'bootstrap',
    technology3: 'ruby',
    technology4: 'Ruby on rails',
    button: 'see project',
    btnCard1: 'See Live',
    btnCard2: 'See Source',
  },
  {
    name: 'Professional Art Printing Data',
    nameCard: 'Multi Post Stories',
    number: 4,
    Description:
      "A daily selection of privately personalized reads; no account or sign-ups required,has been the industry's standard",
    descriptionCard:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    descriptionGym:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaL",
    technology1: 'html',
    technology2: 'bootstrap',
    technology3: 'ruby',
    technology4: 'Ruby on rails',
    button: 'see project',
    btnCard1: 'See Live',
    btnCard2: 'See Source',
  },
  {
    name: 'Professional Art Printing Data',
    nameCard: 'Multi Post Stories',
    number: 5,
    Description:
      "A daily selection of privately personalized reads; no account or sign-ups required,has been the industry's standard",
    descriptionCard:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    descriptionGym:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaL",
    technology1: 'html',
    technology2: 'bootstrap',
    technology3: 'ruby',
    technology4: 'Ruby on rails',
    button: 'see project',
    btnCard1: 'See Live',
    btnCard2: 'See Source',
  },
  {
    name: 'Professional Art Printing Data',
    nameCard: 'Multi Post Stories',
    number: 6,
    Description:
      "A daily selection of privately personalized reads; no account or sign-ups required,has been the industry's standard",
    descriptionCard:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    descriptionGym:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaL",
    technology1: 'html',
    technology2: 'bootstrap',
    technology3: 'ruby',
    technology4: 'Ruby on rails',
    button: 'see project',
    btnCard1: 'See Live',
    btnCard2: 'See Source',
  },
  {
    name: 'Professional Art Printing Data',
    nameCard: 'Multi Post Stories',
    number: 7,
    Description:
      "A daily selection of privately personalized reads; no account or sign-ups required,has been the industry's standard",
    descriptionCard:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    descriptionGym:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaL",
    technology1: 'html',
    technology2: 'bootstrap',
    technology3: 'ruby',
    technology4: 'Ruby on rails',
    technology5: 'css',
    button: 'see project',
    btnCard1: 'See Live',
    btnCard2: 'See Source',
  },
];

const cardsHtml = function () {
  for (let index = 0; index < arrProject.length; index += 1) {
    firstWork.innerHTML = ` 
           <div class="work-1__detail">
                <img
                  src="./assets/icons/Img Placeholder.svg"
                  alt="multi-post stories"
                  class="work1-img-placeholder"
                />
                <div class="main-detail gym-app__detail">
                  <h3>${arrProject[index].nameCard}</h3>
                  <p>
                   ${arrProject[index].descriptionGym}
                  </p>
                  <div class="work-tools">
                    <ul>
                      <li>${arrProject[index].technology5}</li>
                      <li>${arrProject[index].technology1}</li>
                      <li>${arrProject[index].technology2}</li>
                      <li>${arrProject[index].technology3}</li>
                    </ul>
                  </div>

                  <div class="see-project">
                    <a href="#/" class="small-button" onclick=getModal(${index})>see project</a>
                  </div>
                </div>
              </div>`;
  }

  for (let index = 1; index < arrProject.length; index += 1) {
    allWorks.innerHTML += `
              <div class="work-${arrProject[index].number} work-common-class">
                <div class="work-detail">
                  <div class="main-detail">
                    <h4>${arrProject[index].name}</h4>
                    <p class="paragraph">
                      ${arrProject[index].Description}
                    </p>
                    <div class="work-tools work-stack">
                      <ul>
                     <li>${arrProject[index].technology1}</li>
                     <li>${arrProject[index].technology2}</li>
                     <li>${arrProject[index].technology3}</li>
                      </ul>
                    </div>
                  </div>

                  <div class="see-project">
                    <a href="#/" class="large-button hide-button" onclick=getModal(${index})>${arrProject[index].button}</a>
                  </div>
                </div>
              </div>`;
  }
};

window.addEventListener('load', cardsHtml);

function getModal() {
  modalSection.style.display = 'block';

  for (let index = 0; index < arrProject.length; index += 1) {
    modalSection.innerHTML = `  
      <div class=" overlay"> 
        <div class ="cover-modal">
          <img src="./assets/icons/cancelHamburger.png" alt="close-modal"   class="close-modal-section" onclick=closeModal()>
          <div class="heading-modal">
           <h3>${arrProject[index].nameCard}</h3>
           <ul class="heading-modal-ul">
              <li >${arrProject[index].technology1}</li>
              <li>${arrProject[index].technology2}</li>
              <li>${arrProject[index].technology4}</li>
           </ul>
           <div class="modal-details"> 
            <img src="./assets/images/Snapshoot Portfolio.svg" alt="modal-image" class="modal-details-img">
            <div class="modal-details-textBtn">
            <p class="modal-details-paragraph">${arrProject[index].descriptionCard}</p>
            <div class="modal-details-buttons">
              <a href="#" class="modal-button" onclick=closeModal()><span>${arrProject[index].btnCard1} </span> <img src="./assets/icons/Icon - Export.svg" alt="see-live-icon" class="modal-button-icon"></a>
              <a href="#" class="modal-button" onclick=closeModal()><span>${arrProject[index].btnCard2} </span>  <img src="./assets/icons/Icon -GitHub.svg" alt="github-icon" class="modal-button-icon"></a>
            </div>
            
            
          </div>
          </div>
         </div>
        </div>
      </div>`;
  }
}

const closeModal = function () {
  modalSection.style.display = 'none';
};

sections.addEventListener('click', getModal);
divClass.addEventListener('click', closeModal);
