const dynamicspeakers = [
  {
    id: 1,
    url: 'asset/speakers/aliko-dangote.png',
    name: 'Aliko Dangote',
    job: 'Nigerian business magnate',
    desc: 'Aliko Dangote GCON is a Nigerian business magnate who is the founder, chairman, and CEO of the Dangote Group, the largest industrial conglomerate in West Africa.',
  },
  {
    id: 2,
    url: 'asset/speakers/femi-otedola.png',
    name: 'Femi Otedola',
    job: 'Nigerian businessman',
    desc: 'Femi Otedola is a Nigerian businessman and philanthropist. He is the former chairman of Forte Oil PLC, and is the current executive chairman of Geregu Power PLC.',
  },
  {
    id: 3,
    url: 'asset/speakers/mike-adenuga.png',
    name: 'Mike Adenuga',
    job: 'Nigerian businessman',
    desc: "Michael Adeniyi Agbolade Ishola Adenuga Jr CSG GCON is a Nigerian billionaire businessman, and the sixth richest person in Africa. His company Globacom is Nigeria's second-largest telecom operator",
  },
  {
    id: 4,
    url: 'asset/speakers/peter-obi.png',
    name: 'Peter Gregory Obi',
    job: 'Former Governor of Anambra State',
    desc: 'Peter Gregory Obi CON is a Nigerian businessman and politician who served as governor of Anambra from March to November 2006, February to May 2007, and June 2007 to March 2014.',
  },
  {
    id: 5,
    url: 'asset/speakers/tony-elumelu.png',
    name: 'Tony O. Elumelu',
    job: 'Nigerian economist',
    desc: 'Anthony Onyemaechi Elumelu CFR is a Nigerian economist, and philanthropist. He chairs Heirs Holdings, Transcorp and is the founder of The Tony Elumelu Foundation.',
  },
  {
    id: 6,
    url: 'asset/speakers/yemi-osinbajo.png',
    name: 'Yemi Osinbajo',
    job: 'Vice President of Nigeria',
    desc: 'Oluyemi Oluleke Osinbajo GCON is a Nigerian lawyer, professor, and politician who is the 14th and current vice president of Nigeria since 2015.',
  },
];

const openHam = document.getElementById('openHam');
const closeHam = document.getElementById('closeHam');
const menuLink = document.querySelectorAll('.menu-list__item');
const menucontainer = document.querySelector('.lower-nav__center');
const featuredSpeakers = document.getElementById('all-speakers');
const seeMore = document.querySelector('.feature-speakers__see-more');
const seeLess = document.querySelector('.feature-speakers__see-less');

openHam.addEventListener('click', () => {
  menucontainer.classList.toggle('hide');
  openHam.classList.add('hide');
  closeHam.classList.remove('hide');
});

closeHam.addEventListener('click', () => {
  menucontainer.classList.toggle('hide');
  openHam.classList.remove('hide');
  closeHam.classList.add('hide');
});

menuLink.forEach((link) => link.addEventListener('click', () => {
  menucontainer.classList.add('hide');
  openHam.classList.remove('hide');
  closeHam.classList.add('hide');
}));

const renderspeakers = function () {
  for (let i = 0; i < dynamicspeakers.length; i += 1) {
    featuredSpeakers.innerHTML += `
    <div class="feature-speakers__card" >
    <img src=${dynamicspeakers[i].url} alt=${dynamicspeakers[i].name} class="speaker-pix">
    <div class="feature-speakers__card-details">
        <h3 class="feature-speakers__card-details-name">${dynamicspeakers[i].name}</h3>
        <p class="feature-speakers__card-details-info">${dynamicspeakers[i].job}</p>
        <p class="feature-speakers__card-details-about">${dynamicspeakers[i].desc}</p>
    </div>
  </div>
          `;
  }
};

window.addEventListener('load', renderspeakers);

let currentItems = 2;

seeMore.addEventListener('click', () => {
  const speakersdata = [...document.querySelectorAll('.feature-speakers__card')];

  for (let i = currentItems; i < speakersdata.length; i += 1) {
    speakersdata[i].style.display = 'grid';
  }

  currentItems += 4;

  if (currentItems >= speakersdata.length) {
    seeMore.style.display = 'none';
    seeLess.classList.remove('hide');
  }
});

seeLess.addEventListener('click', () => {
  const speakersdata = [...document.querySelectorAll('.feature-speakers__card')];

  for (let i = 2; i < speakersdata.length; i += 1) {
    speakersdata[i].style.display = 'none';
  }

  currentItems -= 4;

  if (currentItems <= 2) {
    seeMore.style.display = 'grid';
    seeLess.classList.add('hide');
  }
});
