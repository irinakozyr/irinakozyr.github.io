const iconContainer = document.getElementById('iconContainer')
const iconOpen = document.getElementById('iconOpen')
const iconClose = document.getElementById('iconClose')
const headerMenu = document.getElementById('headerMenu')

iconContainer.addEventListener('click', () => {
    iconOpen.classList.toggle('hide')
    iconClose.classList.toggle('hide')
    headerMenu.classList.toggle('header-menu-hide')
})

 var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });