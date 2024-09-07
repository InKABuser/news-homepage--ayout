const menuActive = document.getElementsByClassName("burger")[0];
const links = document.getElementsByClassName('navList')[0];

// Add a click event listener to the burger menu
menuActive.addEventListener('click', function() {
    // Toggle the 'active' class on the nav list
    links.classList.toggle('active');

    if (links.classList.contains('active')) {
        menuActive.style.backgroundImage = "url('assets/images/icon-menu-close.svg')";
    } else {
        menuActive.style.backgroundImage = "url('assets/images/icon-menu.svg')";
    }

  });


  const mediaQuerey = window.matchMedia('(min-width: 1000px)');

  function removeActive(event) {
    if(links.classList.contains('active')) {
        links.classList.remove('active');
        menuActive.style.backgroundImage = "url('assets/images/icon-menu.svg')";
    }
  }

  function changeIMG() {
    const ArtImg = document.getElementById('Article-img');
    if (window.matchMedia('(min-width: 720px )').matches) {
        ArtImg.src = "assets/images/image-web-3-desktop.jpg";
    } else {
        ArtImg.src = "assets/images/image-web-3-mobile.jpg"
    }
  }

  mediaQuerey.addEventListener("change", removeActive);

  removeActive(mediaQuerey);

  changeIMG();

  window.addEventListener("resize", changeIMG);