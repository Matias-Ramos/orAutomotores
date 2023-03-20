import MeLi from "../../../assets/mercado-libre.svg";
// PropTypes
import PropTypes from "prop-types"

const ML = ({ url }) => (
  <>
    {url ? (
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
    ) : (
      <div style={{ marginBottom: "2rem" }}>
      </div>
    )}
  </>
);

ML.propTypes = { url: PropTypes.string };

export default ML;
