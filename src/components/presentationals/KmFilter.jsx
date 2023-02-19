import { useSearchParams } from 'react-router-dom';

function KmFilter() {
  
  const [params, setParams] = useSearchParams();
  function updateParams(kmValue){
    params.set("km", kmValue);
    setParams(params);
  }

  return (
    <div>
        <span><b>Kilómetros</b><br /></span>
        <ul className="p-0">
            <li onClick={()=>updateParams("0")}>0 km</li>
            <li onClick={()=>updateParams("0_to_65")}>0 a 65.000 km</li>
            <li onClick={()=>updateParams("65_to_100")}>65.000 a 100.000 km</li>
            <li onClick={()=>updateParams("100_plus")}>100.000 km o más</li>
            <li onClick={()=>updateParams("any")}>Mostrar todos</li>
        </ul>
    </div>
  )
}

export default KmFilter