import { createContext } from "react";
import { useSearchParams } from "react-router-dom";

//ctxt
const queryCtxt = createContext();

function QyParamsCtxtProvider(props) {
  const [params, setParams] = useSearchParams();
  function updateQyParams(name, value) {
    params.set(name, value);
    setParams(params);
  }

  const deleteQyParams = () => {
    // async else only 1 param is removed at a time due to re-rendering.
    async function returnEmptySearchParams() {
      params.forEach((_value, key) => {
        params.delete(key);
      });
      return params;
    }
    setParams(returnEmptySearchParams());
  };

  return (
    <queryCtxt.Provider
      value={{
        updateQyParams: updateQyParams,
        deleteQyParams: deleteQyParams,
        params: params,
      }}
    >
      {props.children}
    </queryCtxt.Provider>
  );
}
export { queryCtxt, QyParamsCtxtProvider };
