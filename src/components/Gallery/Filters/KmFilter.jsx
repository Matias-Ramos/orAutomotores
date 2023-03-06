const KmFilter = ({ updateQyParams, kmChosenRange }) => (
  <>
    <span>
      <b>Kilómetros</b>
    </span>
    <ul className="p-0">
      {/* 0 */}
      <li
        onClick={() => updateQyParams("km", "0")}
        onKeyDown={(evt) => {
          evt.key === "Enter" && updateQyParams("km", "0");
        }}
        tabIndex="0"
      >
        <span
          className={`kmSpan ${kmChosenRange === "0" ? "activeKmRange" : ""}`}
        >
          0 km
        </span>
      </li>

      {/* 0-100 */}
      <li
        onClick={() => updateQyParams("km", "0_to_100")}
        onKeyDown={(evt) => {
          evt.key === "Enter" && updateQyParams("km", "0_to_100");
        }}
        tabIndex="0"
      >
        <span
          className={`kmSpan ${
            kmChosenRange === "0_to_100" ? "activeKmRange" : ""
          }`}
        >
          0 a 100.000 km
        </span>
      </li>

      {/* 100+ */}
      <li
        onClick={() => updateQyParams("km", "100_plus")}
        onKeyDown={(evt) => {
          evt.key === "Enter" && updateQyParams("km", "100_plus");
        }}
        tabIndex="0"
      >
        <span
          className={`kmSpan ${
            kmChosenRange === "100_plus" ? "activeKmRange" : ""
          }`}
        >
          100.000 km o más
        </span>
      </li>

      {/* Any */}
      <li
        onClick={() => updateQyParams("km", "any")}
        onKeyDown={(evt) => {
          evt.key === "Enter" && updateQyParams("km", "any");
        }}
        tabIndex="0"
      >
        <span
          className={`kmSpan ${kmChosenRange === "any" ? "activeKmRange" : ""}`}
        >
          Mostrar todos
        </span>
      </li>
    </ul>
  </>
);

export default KmFilter;
