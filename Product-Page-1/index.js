// size change btn
let sizeChangeBtn = document.querySelectorAll('.sizebox-btn');
sizeChangeBtn.forEach((button) => {

    button.addEventListener('click',(e)=>{
        sizeChangeBtn.forEach(b => b.classList.remove('active'));
        e.preventDefault();
        console.log(button)
        button.classList.toggle('active');
    })
})


// change product image
let allImages = document.querySelectorAll('.product-images img');
let mainImageBox = document.querySelector('.product-big-image img');

allImages.forEach((image) => {
    image.addEventListener('click', (e)=>{
        e.preventDefault();
        mainImageBox.setAttribute('src',image.getAttribute('src'));
    })
})

// open and close sizes , care and compositions dropdown

let dropBoxContainer = document.querySelectorAll('.drop-container');

dropBoxContainer.forEach((dropHeader) => {
    dropHeader.addEventListener('click',(e)=>{
       
        e.preventDefault();
        dropHeader.querySelector('.body-drop').classList.toggle('active');
    })
})