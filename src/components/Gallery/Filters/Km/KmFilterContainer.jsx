// Component
import KmListItem from "./KmListItem";
// Function
import classNames from "classnames";
// PropType
import PropTypes from "prop-types"

const KmFilterContainer = ({ updateQyParams, kmQyParam }) => {
  const getClasses = (spanKmValue) => {
    return classNames("kmSpan", {
      activeKmRange: kmQyParam === spanKmValue,
    });
  };
  const handleClick = (value) => updateQyParams("km", value);
  return (
    <>
      <span>
        <b>Kilómetros</b>
      </span>
      <ul className="p-0">
        {/* 0 */}
        <KmListItem
          qyParamValue={"0"}
          spanTxt={"0 km"}
          handleClick={handleClick}
          getClasses={getClasses}
        />

        {/* 0-100 */}
        <KmListItem
          qyParamValue={"0_to_100"}
          spanTxt={"0 a 100.000 km"}
          handleClick={handleClick}
          getClasses={getClasses}
        />

        {/* 100+ */}
        <KmListItem
          qyParamValue={"100_plus"}
          spanTxt={"100.000 km o más"}
          handleClick={handleClick}
          getClasses={getClasses}
        />

        {/* Any */}
        <KmListItem
          qyParamValue={"any"}
          spanTxt={"Mostrar todos"}
          handleClick={handleClick}
          getClasses={getClasses}
        />
      </ul>
    </>
  );
};

KmFilterContainer.propTypes = {
  updateQyParams : PropTypes.func,
  kmQyParam : PropTypes.string
}

export default KmFilterContainer;
