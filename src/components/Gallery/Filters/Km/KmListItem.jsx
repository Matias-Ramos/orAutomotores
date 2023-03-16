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

export default KmListItem;
