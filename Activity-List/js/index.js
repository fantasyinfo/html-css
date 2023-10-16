// menus
let menuOpenBtn = document.getElementById("menu");
let menuCloseBtn = document.getElementById("close-menu");
let menuBox = document.getElementsByClassName("desktop-menu");

menuOpenBtn.addEventListener("click", (event) => {
  event.preventDefault();
  menuBox[0].style.display = "block";
});

menuCloseBtn.addEventListener("click", (event) => {
  event.preventDefault();
  menuBox[0].style.display = "none";
});


// filters
let closeFilterB = document.getElementById('clear_filter');
let openFilterB = document.getElementById('filter_open');
let filterBox = document.getElementsByClassName('filters');

openFilterB.addEventListener("click", (event) => {
    event.preventDefault();
    filterBox[0].style.display = "block";
  });
  
  closeFilterB.addEventListener("click", (event) => {
    event.preventDefault();
    filterBox[0].style.display = "none";
  });

// apply filters
function changeColor(name, value) {
  let radio = document.querySelectorAll(`label[data-name="${name}"]`);

  radio.forEach((label) => {
    label.classList.remove("active");
  });
  let label = document.querySelector(`label[for="${value}"]`);

  if (label) {
    if (label.classList.contains("active")) {
      label.classList.remove("active");
    } else {
      label.classList.add("active");
    }
  } else {
    console.log(`Label for "${value}" not found.`);
  }
}

function openFilter(id) {
  let getId = id.split("_")[1];
  document.getElementsByClassName(`down-btn_${getId}`)[0].style.display =
    "none";
  document.getElementsByClassName(`up-btn_${getId}`)[0].style.display = "block";
  document.getElementById(id).classList.add("active");
}
function closeFilter(id) {
  let getId = id.split("_")[1];
  document.getElementsByClassName(`down-btn_${getId}`)[0].style.display =
    "block";
  document.getElementsByClassName(`up-btn_${getId}`)[0].style.display = "none";
  document.getElementById(id).classList.remove("active");
}

// slider scroll
function scrollLeft1(id){

  let slider = document.getElementsByClassName(id)[0];
  console.log(slider)
 slider.scrollLeft += 100;
 
}
function scrollRight1(id){
  let slider = document.getElementsByClassName(id)[0];
  console.log(slider)
  slider.scrollRight += 100;
}