import ListGroup from "react-bootstrap/ListGroup";

const CardListGroup = ({ car }) => {
  const makeValueReadable = (value) => value.toLocaleString().replace(",", ".");

  return (
    <ListGroup className="mt-2">
      <ListGroup.Item>
        <span>
          <b>
            {parseInt(car.price) > 500000 ? "$" : "U$S"}{" "}
            {makeValueReadable(car.price) || "-"}
          </b>
        </span>
        <span>
          <i>
            {parseInt(car.year)} | {makeValueReadable(car.km) || "-"} Km
          </i>
        </span>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default CardListGroup;
