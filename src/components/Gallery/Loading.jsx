import Spinner from "react-bootstrap/Spinner";

const Loading = () => {
  return (
    <div
      id="spinnerContainer"
      style={{ 
        textAlign: "center",
        padding: "4rem 0px 6rem 0px",
        display: "flex", 
        alignItems: "center",
        justifyContent: "center"
     }}
    >
      <Spinner animation="border" variant="primary" />
      <span style={{ marginLeft: "10px" }}>Cargando...</span>
    </div>
  );
};

export default Loading;
