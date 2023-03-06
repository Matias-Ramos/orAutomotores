import classNames from "classnames";

const KmFilter = ({ updateQyParams, kmChosenRange }) => {
  const getClasses = (spanKmValue) => {
    return classNames("kmSpan", {
      activeKmRange: kmChosenRange === spanKmValue,
    });
  };
  return (
    <>
      <span>
        <b>Kilómetros</b>
      </span>
      <ul className="p-0">
        {/* 0 */}
        <li
          tabIndex="0"
          onClick={() => updateQyParams("km", "0")}
          onKeyDown={(evt) => {
            evt.key === "Enter" && updateQyParams("km", "0");
          }}
        >
          <span className={getClasses("0")}>0 km</span>
        </li>

        {/* 0-100 */}
        <li
          tabIndex="0"
          onClick={() => updateQyParams("km", "0_to_100")}
          onKeyDown={(evt) => {
            evt.key === "Enter" && updateQyParams("km", "0_to_100");
          }}
        >
          <span className={getClasses("0_to_100")}>0 a 100.000 km</span>
        </li>

        {/* 100+ */}
        <li
          tabIndex="0"
          onClick={() => updateQyParams("km", "100_plus")}
          onKeyDown={(evt) => {
            evt.key === "Enter" && updateQyParams("km", "100_plus");
          }}
        >
          <span className={getClasses("100_plus")}>100.000 km o más</span>
        </li>

        {/* Any */}
        <li
          tabIndex="0"
          onClick={() => updateQyParams("km", "any")}
          onKeyDown={(evt) => {
            evt.key === "Enter" && updateQyParams("km", "any");
          }}
        >
          <span className={getClasses("any")}>Mostrar todos</span>
        </li>
      </ul>
    </>
  );
};

export default KmFilter;
