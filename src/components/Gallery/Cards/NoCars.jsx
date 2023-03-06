//FontAwesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const NoCars = () => (
  <div id="noCars">
    <FontAwesomeIcon icon={faMagnifyingGlass} className="fa-5x" />
    <span>
      En este momento no tenemos autos con el criterio de búsqueda seleccionado.
      <br />
      Intenta modificar los filtros.
    </span>
  </div>
);

export default NoCars;
