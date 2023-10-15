let menuOpenBtn = document.getElementById('menu');
let menuCloseBtn = document.getElementById('close-menu');
let menuBox = document.getElementsByClassName('desktop-menu');



menuOpenBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    console.log('Menu Open');
    menuBox[0].style.display = 'block';

})

menuCloseBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    console.log('Menu Close');
    menuBox[0].style.display = 'none';
 
})