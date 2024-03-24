const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    spaceBetween: 10,
   
  
  
  
  
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    // },
  
    
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });








  const swiper2 = new Swiper('.swiper2', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    autoplay: {
      delay: 1000,
      
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  







  let modelWrapper = document.getElementById('model-wrapper')

let btnClose = document.getElementById('btn-close')

let btnShow = document.getElementById('btn-show')


btnShow.addEventListener('click', function(){
  modelWrapper.classList.add('show-modal')
})

btnClose.addEventListener('click', function(){
  modelWrapper.classList.remove('show-modal')
})


setTimeout(function(){
  modelWrapper.classList.add('show-modal')
}, 400)