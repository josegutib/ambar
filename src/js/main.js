
const App = (function() {

  const products = [
    {
      id: 'product-squid',
      name: 'Squid',
      img: 'assets/squid.jpg',
      // description: ['Species: Molusco', 'Origin:','Fish Method:','Capture Season:', 'Presentation:','Elaboration:']
      description: [
        {
          categoria: 'Species',
          valor: 'Cephalopods.'
        },
        {
          categoria: 'Origin',
          valor: 'Lorem ipsum dolor.'
        },
        {
          categoria: 'Fish Method',
          valor: 'Lorem ipsum dolor.'
        },
        {
          categoria: 'Capturer Season',
          valor: 'Lorem ipsum dolor.'
        },
        {
          categoria: 'Presentation',
          valor: 'Lorem ipsum dolor.'
        },
        {
          categoria: 'Elaboration',
          valor: 'Lorem ipsum dolor.'
        },
      ]
    },
    {
      id: 'product-shrimp',
      name: 'Shrimp',
      img: 'assets/shrimp.jpg',
      description: [
        {
          categoria: 'Species',
          valor: 'Crustaceans.'
        },
        {
          categoria: 'Origin',
          valor: 'Lorem ipsum dolor.'
        },
        {
          categoria: 'Fish Method',
          valor: 'Lorem ipsum dolor.'
        },
        {
          categoria: 'Capturer Season',
          valor: 'Lorem ipsum dolor.'
        },
        {
          categoria: 'Presentation',
          valor: 'Lorem ipsum dolor.'
        },
        {
          categoria: 'Elaboration',
          valor: 'Lorem ipsum dolor.'
        },
      ]
    },
    {
      id: 'product-seabass',
      name: 'Seabass',
      img: 'assets/seabass.jpg',
      description: [
        {
          categoria: 'Species',
          valor: 'Serranidae.'
        },
        {
          categoria: 'Origin',
          valor: 'Lorem ipsum dolor.'
        },
        {
          categoria: 'Fish Method',
          valor: 'Lorem ipsum dolor.'
        },
        {
          categoria: 'Capturer Season',
          valor: 'Lorem ipsum dolor.'
        },
        {
          categoria: 'Presentation',
          valor: 'Lorem ipsum dolor.'
        },
        {
          categoria: 'Elaboration',
          valor: 'Lorem ipsum dolor.'
        },
      ]
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
      <h2 class="subtitle has-text-white desc has-text-centered">${props.name}</h2>
    </div>
  `)

  const ProductDescription = props => {
    let descriptionStrEl = '';
    props.description.forEach(function(el, i){
      const descriptionLiEl = `<li><span class="has-text-weight-semibold">${el.categoria}:</span> ${el.valor}</li>`;
      descriptionStrEl += descriptionLiEl
    })

    return `<ul>${descriptionStrEl}</ul>`
  }

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
    modalProductDescriptionEl.innerHTML = ProductDescription({description:product.description})
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
