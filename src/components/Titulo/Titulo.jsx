import Container from 'react-bootstrap/Container'

function Titulo( {tituloProps, subTit} ) {
  // const {tituloProps, subTit} = props
  // console.log(obj[0])
  return (
    <div className='titulo'> 
        <h1>{tituloProps}</h1>
        <h2> {subTit} </h2>
        {/* <h3></h3> */}
    </div>
  )
}


export default Titulo