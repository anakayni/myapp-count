import Container from 'react-bootstrap/Container'
import {useState} from 'react'


function ItemListContainer({greeting, titulo}) {
    const [count, setCount] = useState(0)
    //let count = 0
    const manejarCount = ()=>{
        //count ++
        //console.log(count)
        setCount( count + 1)
    }
    //console.log(estado)

  return (
    <Container>
       {greeting} <hr/>
       <label>{count}</label>
       <button onClick={manejarCount}>Click</button>
       {titulo({tituloProps: 'Soy titulo', subTit: 'Soy subtitulo'})}
    </Container>
  )
}

export default ItemListContainer