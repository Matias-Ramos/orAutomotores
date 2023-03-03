import Button from 'react-bootstrap/Button';

function FilterCleaner({deleteQyParams}) {
  return (
    <Button variant="secondary" className='filterBtn' onClick={deleteQyParams}>Borrar filtros</Button>
  )
}

export default FilterCleaner