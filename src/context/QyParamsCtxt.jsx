import { createContext } from "react";
import { useSearchParams } from 'react-router-dom';

//ctxt
const queryCtxt = createContext ();

function QyParamsCtxtProvider(props) { 

  //qyPms
  const [params, setParams] = useSearchParams();
  function updateQyParams(name, value){
    params.set(name, value);
    setParams(params);
  }

  return(
  <queryCtxt.Provider value={ {updateQyParams: updateQyParams, params:params } }>      
    {props.children} 
  </queryCtxt.Provider>
  )
}
export {queryCtxt, QyParamsCtxtProvider}