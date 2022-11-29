import styled from "@emotion/styled";

const Resultado = styled.div`
  display: flex;
  color: #FFF;
  font-family: "Lato", sans-serif;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;
`

const Texto = styled.p`
  font-size: 18px;
  span{
    font-weight: 700;
  }
`
const Precio = styled.p`
  font-size: 24px;
  span{
    font-weight: 700;
  }
`

const Imagen = styled.img`
  display: block;
  width: 150px;
`

const Cotizacion = ( { cotizacion } ) => {
    const { PRICE, LOWDAY, HIGHDAY, LASTUPDATE, CHANGEPCT24HOURS, IMAGEURL } = cotizacion
    return (
        <Resultado>
            <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="Imagen de cryptomoneda" width="200px"/>
            <div>
                <Precio>Precio: <span>{PRICE}</span></Precio>
                <Texto>Precio mas alto del dia: <span>{HIGHDAY}</span></Texto>
                <Texto>Precio mas bajo del dia: <span>{LOWDAY}</span></Texto>
                <Texto>Cambio en 24 horas: <span>{CHANGEPCT24HOURS}</span></Texto>
                <Texto>Ultima actualizacion: <span>{LASTUPDATE}</span></Texto>
            </div>
        </Resultado>
    )
}

export default Cotizacion