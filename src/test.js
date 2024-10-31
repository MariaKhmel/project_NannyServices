// const liArr = document.querySelectorAll('.item');
// console.log(`Number of categories: ${liArr.length}`)

// liArr.forEach(el => {
//   const h2 = el.querySelector('h2').textContent;
//   const liQuantity = el.querySelectorAll('li').length;
//   console.log(`Category: ${h2}`);
//   console.log(`Elements : ${liQuantity}`)
// });

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  },
];

// const galleryRef = document.querySelector('.gallery');


// const markUp = images.map(({ url, alt }) => {
//   const li = document.createElement("li");
//   const img = document.createElement("img");
//   img.alt = alt;
//   img.src = url;
//   img.width = 300;
//   img.height = 200;
//   li.append(img);
//   return li;
// });


// galleryRef.append(...markUp);

// const refs = {
//   input: document.querySelector('#name-input'),
//   span: document.querySelector('#name-output'),
// }

// refs.input.addEventListener('input', (e) => {
//   const inputText = e.target.value.trim();
//   refs.span.textContent = inputText;
//   if (inputText === '') {
//     refs.span.textContent = 'Anonymous'
//   }
// })

// const form = document.querySelector('.login-form');

// const onFormSubmitHandler = e => {
//   e.preventDefault();
//   const form = e.target;
//   const email = form.elements.email.value;
//   const password = form.elements.password.value;

//   if (email === '' || password === '') {
//     alert('All form fields must be filled in')
//   }

//   console.log({ email, password });
//   form.reset();
// }

// form.addEventListener('submit', onFormSubmitHandler)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// const changeColorBtn = document.querySelector('.change-color')
// const colorSpan = document.querySelector('.color');
// const body = document.querySelector('body');

// changeColorBtn.addEventListener('click', () => {
//   const color = getRandomHexColor();
//   colorSpan.textContent = color;
//   body.style.backgroundColor = color;
// })

const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const input = document.querySelector('input[type="number"]');
const boxes = document.querySelector('#boxes');

const createBoxes = (amount) => {
  for (let i = 1; i <= amount; i += 1) {
    const box = document.createElement('div');
    const size = 30 + (10 * i);
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.append(box);
  }

}
const onCreateBtnClick = () => {
  boxes.innerHTML = '';
  if (input.value < 1 || input.value > 100) {
    return;
  }

  createBoxes(input.value);
  input.value = 1;
}
createBtn.addEventListener('click', onCreateBtnClick);
destroyBtn.addEventListener('click', () => {
  boxes.innerHTML = '';
  input.value = 1;
})