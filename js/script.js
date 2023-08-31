// ada 2 cara menangnani bug pada project kali ini
// ? cara 1 dengan kita membuat manual
// ? cara 2 dengan bantuan dari bosstrap javascriptnya

//? cara 1
// const hamburger = document.querySelector('.navbar-toggler');
// const stickyTop = document.querySelector('.sticky-top');
// const btnClose = document.querySelector('.btn-close');

// hamburger.addEventListener('click', function (){
//     stickyTop.style.overflow = 'visible';
// });

// btnClose.addEventListener('click', function(){
//     stickyTop.style.overflow = 'hidden';
// });

// ? cara dengan bosstrap

const stickyTop = document.querySelector(".sticky-top");
const offcanvas = document.querySelector(".offcanvas");

offcanvas.addEventListener("show.bs.offcanvas", function () {
  stickyTop.style.overflow = "visible";
});

offcanvas.addEventListener("hidden.bs.offcanvas", function () {
  stickyTop.style.overflow = "hidden";
});

// toggle copy
// ! ada bug dibagian code dibawah ini setlah berhasil teks dicopy munucl alert telah berhasil tapi dilanjukan oleh alert pengisian kehadiran

// const buttonCopy = document.querySelector('.no-rekening');
// // const atm = document.querySelector('#atm');
// const copy = document.querySelector('value');

// buttonCopy.forEach((btn) =>{
//   btn.onclick = (e) =>{
//     copy.select();
//     document.execCommand('copy');


//     e.preventDefault();
//   }
// });

const copy = function(copy1,copy2,copy3){
  var copyText = document.querySelector(copy1, copy2, copy3);
  copyText.forEach.select();
  document.execCommand('copy');
  return alert('teks berhasil dicopy' + copyText.value);
}

copy1 = document.querySelector('#atm-bca');
copy2 = document.querySelector('#atm-bni');
copy3 = document.querySelector('#atm-bri');


// function copy1() {
//   var copyText = document.getElementById("atm-bca");
//   copyText.select();
//   document.execCommand("copy");
//   alert("Teks berhasil dicopy: " + copyText.value);
// }

// function copy2() {
//   var copyText = document.getElementById("atm-bni");
//   copyText.select();
//   document.execCommand("copy");
//   alert("Teks berhasil dicopy: " + copyText.value);
// }

// function copy3() {
//   var copyText = document.getElementById("atm-bri");
//   copyText.select();
//   document.execCommand("copy");
//   alert("Teks berhasil dicopy: " + copyText.value);
// }



// fitur section home(ketika tombol lihat undangan tidak diclick tidak akan bisa scroll layar perlu dingat: kita harus menambahkan function enabel dan disable)

// unutuk mengubah scrollbehavior dari local boostrap dengan css js
const rootElement = document.querySelector(":root");

function disableScroll() {
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  // menahan layar agar tidak bisa discroll oleh user.
  window.onscroll = function () {
    window.scrollTo(scrollTop, scrollLeft);
  };

  // bosstrap scroll masih smooth kita ganti ke auto agar view home seblemum diclick tidak jalan scroll viewnya
  rootElement.style.scrollBehavior = "auto";
}

// unutuk mengscroll layar user harus click button / trigger agar bisa scroll
// ? disini kita bisa tambhkan fitur lagu dengan mengclick button lagu akan play otomatis?
function enableScroll() {
  window.onscroll = function () {};
  rootElement.style.scrollBehavior = "smooth";

  // kita mensetting localstorage jika opened = true
  localStorage.setItem("opened", "true");


  const sound = document.querySelector('.audio');
  sound.classList.style('active');

  
//   const elem = document.querySelector("audio");

//   elem.audioTrackList.onaddtrack = (event) => {
//     trackEditor.addTrack(event.track);
//   };

//   elem.audioTrackList.onremovetrack = (event) => {
//     trackEditor.removeTrack(event.track);
//   };
}

if (!localStorage.getItem("opened")) {
  disableScroll();
}

// code lanjutan dari github fungsi agar view tetap tidak ke code googlesheet
window.addEventListener("load", function () {
  const form = document.getElementById("my-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: "POST",
      body: data,
    }).then(() => {
      alert("Terimaksih, sudah melakukan pengisian kehadiran❤️");
    });
  });
});
