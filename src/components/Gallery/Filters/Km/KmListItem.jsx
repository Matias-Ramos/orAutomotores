import PropTypes from "prop-types"

const KmListItem = ({ handleClick, qyParamValue, getClasses, spanTxt }) => (
  <li
    tabIndex="0"
    onClick={() => handleClick(qyParamValue)}
    onKeyDown={(evt) => {
      evt.key === "Enter" && handleClick(qyParamValue);
    }}
  >
    <span className={getClasses(qyParamValue)}>{spanTxt}</span>
  </li>
);

KmListItem.propTypes = {
  qyParamValue : PropTypes.string.isRequired,
  spanTxt : PropTypes.string.isRequired,
  getClasses : PropTypes.func.isRequired,
  handleClick : PropTypes.func.isRequired,
}

export default KmListItem;
