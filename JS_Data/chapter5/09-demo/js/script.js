const menu = document.querySelector('#menu');

const strawberry = {
    name: 'イチゴ',
    img: 'strawberry.jpg',
    price: 450,
};
console.log(strawberry.name);
console.log(strawberry['img']);

const key = 'name';
console.log(strawberry.key);
console.log(strawberry[key]);

const lists = [
    'strawberry.jpg',
    'lime.jpg',
    'mango.jpg',
    'lemon.jpg',
    'fig.jpg',
    'apple.jpg',
];

for(let i = 0; i < lists.length; i++){
    const content = `<div><img src="images/${lists[i]}" alt=""></div>`;
    menu.insertAdjacentHTML('beforeend', content);
}