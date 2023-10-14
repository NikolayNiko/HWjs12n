const doc = document;
const menuEl = doc.querySelector('.menu');

const menu = [
  {
    title: 'Головна',
    href: 'index.html'
  },
  {
    title: 'Магазин дійсно корисних речей',
    href: 'store.html'
  },
  {
    title: 'Контакти',
    href: 'contakt.html'
  }
];

const menuItems = menu.map(function(item) {
  return `
    <li class="menu__item">
      <a href="${ item.href }">${item.title}</a>
    </li>
  `
}).join('');

menuEl.innerHTML = menuItems;

/* goods goods goods goods goods goodsgoodsgoods  */

const postEl = doc.querySelector('.main__good');

const posts = [
  {
    title: 'Стіл-трансформер Слайдер',
    img: '1.webp',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, perferendis.',
    price: '999 грн',
    alter: 'Стіл-трансформер Слайдер'
  },
  {
    title: 'Ваги кухонні скляні',
    img: '2.webp',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, perferendis.',
    price: '999 грн',
    alter: 'Ваги кухонні скляні'
  },
  {
    title: 'Блендер погружний 800Вт',
    img: '3.webp',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, perferendis.',
    price: '999 грн',
    alter: 'Блендер погружний 800Вт'
  }
];

const postItems = posts.map(function(item) {
  return `
    <div class="main__good-items">
      <img src="./imeg/${item.img}" alt="${item.alter}">
      <h3>${item.title}</h3>
      <div>${item.text}</div>
      <div class="price">${item.price}</div>
      <button type="button" class="button">Придбати в один клік</button>      
    </div>
  `
}).join('');

postEl.innerHTML = postItems;