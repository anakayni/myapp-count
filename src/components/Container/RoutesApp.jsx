import NavBar from '../NavBar/NavBar';
import Titulo from '../Titulo/Titulo';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import ItemCount from '../ItemCount/ItemCount';


function RoutesApp() {
    const obj = { tit: 'Soy titulo de App', subTit: 'Soy subtitulo de tit' }
  return (
    <>
      <NavBar/>
      <Titulo tituloProps= 'Soy Titulo' subTit = 'Subtitulo'/>
        <ItemListContainer 
            greeting="Hola soy ItemListContainer"
            titulo = {Titulo}
       />
       <ItemCount></ItemCount>
    </>
  )
}

export default RoutesApp