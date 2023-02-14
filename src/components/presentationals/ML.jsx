import MeLi from '../../assets/mercado-libre.svg';

function ML() {
  return (
    <div className="containerML">
      <a href="https://www.mercadolibre.com.ar/" className="centerContent">
          <img src={MeLi} className='logoML' alt="logo de MercadoLibre" />
      </a>
    </div>
  )
}

export default ML