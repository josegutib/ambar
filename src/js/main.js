const App = (function() {

  let hamburgerEl;
  let navEl;

  function bindUi(){
    hamburgerEl = document.getElementById('burger-btn')
    navEl = document.getElementById('botonera')
  }

  function setListeners(){
    hamburgerEl.addEventListener('click', function(){
      if (navEl.classList.contains('mobile-hidden')){
        navEl.classList.remove('mobile-hidden')
      }else {
        navEl.classList.add('mobile-hidden')
      }
    })
  }

  function start(){
    console.log('la aplicacion está corriendo')
    bindUi()
    setListeners()
  }

  return {
    start
  }
})()

window.addEventListener('load', App.start)
