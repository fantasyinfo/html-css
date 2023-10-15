let menuOpenBtn = document.getElementById('menu');
let menuCloseBtn = document.getElementById('close-menu');
let menuBox = document.getElementsByClassName('desktop-menu');



menuOpenBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    menuBox[0].style.display = 'block';

})

menuCloseBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    menuBox[0].style.display = 'none';
 
});



function changeColor(name, value){
   let radio = document.querySelectorAll(`label[data-name="${name}"]`);

   radio.forEach((label)=>{
    label.classList.remove('active');
   })
   let label =  document.querySelector(`label[for="${value}"]`);
  label.classList.add('active')
}

function openFilter(id){
    let getId = id.split('_')[1];
    document.getElementsByClassName(`down-btn_${getId}`)[0].style.display = 'none';
    document.getElementsByClassName(`up-btn_${getId}`)[0].style.display = 'block';
    document.getElementById(id).classList.add('active');
}
function closeFilter(id){
    let getId = id.split('_')[1];
    document.getElementsByClassName(`down-btn_${getId}`)[0].style.display = 'block';
    document.getElementsByClassName(`up-btn_${getId}`)[0].style.display = 'none';
    document.getElementById(id).classList.remove('active');
}