
const App = (function() {

  const carousels = ['carousel-products']

  function start() {
    console.log('app running');
    setNavbar()
    setCarousel()
  }

  function setNavbar() {
    const burger = document.querySelector('.burger');
        var nav = document.querySelector('#'+burger.dataset.target);
        burger.addEventListener('click', function(){
          burger.classList.toggle('is-active');
          nav.classList.toggle('is-active');
        });
  }

  function setCarousel() {
    carousels.forEach(id => {
      bulmaCarousel.attach(`#${id}`, {
  			slidesToScroll: 1,
  			slidesToShow: 4,
        infinite: true,
        pagination: false
  		});
    })
  }

  return {
    start
  }
})()

window.addEventListener('load', App.start)
