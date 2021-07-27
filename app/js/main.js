console.log('hjhjh');
const headerToggle = document.querySelector('.header__toggle');
const nav = document.querySelector('.nav');
const pageBody = document.querySelector('.page-body');

headerToggle.addEventListener('click', ()=> {
    if(headerToggle.classList.contains('header__toggle--closed')) {
        headerToggle.classList.toggle('header__toggle--opened');
        nav.classList.toggle('_active');
        pageBody.classList.toggle('_menu--active');
    };
});