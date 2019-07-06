
const App = (function() {

  const carousels = ['carousel-products']

  let modalEl
  let productElems
  let btnModalCloseEl
  let divProdDescEl

  function start() {
    console.log('app running');
    // setNavbar()
    // setCarousel()
    bindUi()
    setListeners()
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

  function bindUi(){
    modalEl = document.getElementById('modal-desc');
    productElems = document.querySelectorAll('.product');
    btnModalCloseEl = document.getElementById('btn-modal-close');
  }

  function setListeners(){
    productElems.forEach(function(el,i){
      el.addEventListener('click' , function(){
        openModal()
      })
    })

    btnModalCloseEl.addEventListener('click', function(){
      closeModal()
    })
  }

  function openModal(){
    modalEl.classList.add('is-active')
  }

  function closeModal(){
    modalEl.classList.remove('is-active')
  }

  return {
    start
  }
})()

window.addEventListener('load', App.start)
