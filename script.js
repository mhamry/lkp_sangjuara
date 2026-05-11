// function runTrack(selector, direction, time) {
//   const track = document.querySelector(selector);
//   track.innerHTML += track.innerHTML;
//   const originalWidth = track.scrollWidth / 2;
//   track.style.setProperty("--move", `-${originalWidth}px`);
//   track.style.animation = `run-${direction} ${originalWidth} ${time}s linear infinite`;
// }

// window.onload = () => {
//   runTrack(".track-right", "right", 20);
//   runTrack(".track-left", "left", 50);
// };

function runTrack(selector, direction, time) {
  const track = document.querySelector(selector);

  track.innerHTML += track.innerHTML;

  const originalWidth = track.scrollWidth / 2;

  track.style.setProperty("--move", `-${originalWidth}px`);

  track.style.animation = `run-${direction} ${time}s linear infinite`;
}

window.onload = () => {
  runTrack(".track-right", "right", 60);
};

//batas
const currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll(".nav-link").forEach((link) => {
  const linkPage = link.getAttribute("href");
  if (linkPage === currentPage) {
    link.classList.add("active");
  }
});

//batas

const navbar = document.querySelector(".navbar");
const navbarBrand = document.querySelector(".navbar-brand");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

window.onscroll = () => {
  if (window.scrollY > 20) {
    navbar.classList.add("sticky");
    navbarBrand.classList.add("white");
    navLinks.forEach((link) => {
      link.classList.add("white");
    });
  } else {
    navbar.classList.remove("sticky");
    navbarBrand.classList.remove("white");
    navLinks.forEach((link) => {
      link.classList.remove("white");
    });
  }
};
