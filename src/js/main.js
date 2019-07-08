
const App = (function() {

  const products = [
    {
      id: 'product-squid',
      name: 'Squid',
      img: 'assets/squid.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, distinctio.'
    },
    {
      id: 'product-shrimp',
      name: 'Shrimp',
      img: 'assets/shrimp.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, distinctio.'
    },
    {
      id: 'product-seabass',
      name: 'Seabass',
      img: 'assets/seabass.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, distinctio.'
    }
  ]

  let modalEl
  let btnModalCloseEl
  let modalProductImgEl
  let modalProductNameEl
  let modalProductDescriptionEl

  function start() {
    console.log('app running');
    bindUi()
    populate()
    setListeners()
  }

  const Product = props => (`
    <div class="column">
      <figure id='${props.id}' class="image is-hoverable-btn is-clickable is-animated-fast">
        <img src="${props.img}" alt=""></img>
      </figure>
      <h2 class="subtitle has-text-white desc">${props.name}</h2>
    </div>
  `)

  function populate() {
    productColumnsEl.innerHTML = products.map(Product).join('\n')
    products.forEach((product) => {
      let productEl = document.getElementById(product.id)
      productEl.addEventListener('click', () => {
        openModal(product)
      })
    })
  }

  function bindUi(){
    modalEl = document.getElementById('modal-desc');
    btnModalCloseEl = document.getElementById('btn-modal-close');
    productColumnsEl = document.getElementById('product-columns')
    modalProductImgEl = document.getElementById('modal-product-img')
    modalProductNameEl = document.getElementById('modal-product-name')
    modalProductDescriptionEl = document.getElementById('modal-product-description')
  }

  function setListeners(){

    btnModalCloseEl.addEventListener('click', function(){
      closeModal()
    })
  }

  function openModal(product){
    modalProductImgEl.setAttribute('src', product.img)
    modalProductNameEl.innerHTML = product.name
    modalProductDescriptionEl.innerHTML = product.description
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
