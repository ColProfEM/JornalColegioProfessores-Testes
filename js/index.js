const body = document.body;
const menuBtn = document.querySelector('header button');
const sideMenu = document.querySelector('nav');
const allItems = document.querySelectorAll('.side_item');
const menuItems = document.querySelectorAll('.side_item a');

menuBtn.addEventListener('click', () => {
    sideMenu.classList.toggle('open');
});

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        sideMenu.classList.remove('open');
    });
});

allItems.forEach(item => {
    item.addEventListener('click', function() {
        allItems.forEach(i => i.classList.remove('active'));
        this.classList.add('active');
    });
});