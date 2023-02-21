function KmFilter( {updateQyParams} ) {
  return (
    <div>
        <span><b>Kilómetros</b><br /></span>
        <ul className="p-0">
            <li onClick={()=>updateQyParams("km","0")}>0 km</li>
            <li onClick={()=>updateQyParams("km","0_to_100")}>0 a 100.000 km</li>
            <li onClick={()=>updateQyParams("km","100_plus")}>100.000 km o más</li>
            <li onClick={()=>updateQyParams("km","any")}>Mostrar todos</li>
        </ul>
    </div>
  )
}

export default KmFilter