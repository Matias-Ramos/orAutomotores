import MeLi from "../../../assets/mercado-libre.svg";

const ML = ({url}) => (
  <div className="containerML">
    <a
      href={url}
      className="centerContent"
      aria-label="Link que redirecciona a la publicacion del vehículo en MercadoLibre"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={MeLi} className="logoML" alt="logo de MercadoLibre" />
    </a>
  </div>
);

export default ML;
