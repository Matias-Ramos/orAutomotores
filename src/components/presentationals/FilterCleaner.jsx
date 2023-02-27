import Button from 'react-bootstrap/Button';

function FilterCleaner({deleteQyParams}) {
  return (
    <Button variant="outline-secondary" className='filterBtn' onClick={deleteQyParams}>Limpiar filtros</Button>
  )
}

export default FilterCleaner