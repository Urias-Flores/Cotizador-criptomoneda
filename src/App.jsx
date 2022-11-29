import { useState, useEffect } from 'react'
import Formulario from "./components/Formulario.jsx";
import Cotizacion from "./components/Cotizacion.jsx";
import Spinner from "./components/Spinner.jsx";
import styled from "@emotion/styled";
import ImagenCripto from "./img/imagen-criptos.png"

const Header = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #FFF;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;
  
  &::after{
    content: "";
    width: 100px;
    height: 6px;
    display: block;
    background-color: #66A2FE;
    margin: 10px auto;
  }
`

const Container = styled.div`
  max-width: 900px;
  width: 90%;
  margin: 0 auto;
  transition: background-color 0.5s;
  
  @media(min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`

const Image = styled.img`
  display: block;
  width: 450px;
  max-width: 80%;
  margin: 100px auto 0 auto;
`

function App() {

    const [ monedas, setMonedas ] = useState({})
    const [ cotizacion, setCotizacion ] = useState({})
    const [ cargando, setCargando ] = useState(false)

    useEffect(() => {
        if(Object.keys(monedas).length > 0){
            const cotizar = async () =>{
                setCargando(true)
                const { crypto, moneda } = monedas
                const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${moneda}`;
                const answer = await fetch(url);
                const result = await answer.json()
                setCotizacion(result.DISPLAY[crypto][moneda])
                setCargando(false)
            }
            cotizar()
        }
    }, [monedas]);


    return (
        <>
            <Container>
                <Image src={ImagenCripto} alt="Imagen de criptomedas"/>
                <div>
                    <Header>Cotizador de criptomonedas</Header>
                    <Formulario
                        setMonedas = {setMonedas}
                    />
                    { cargando && (<Spinner/>)}
                    { cotizacion.PRICE && !cargando && (<Cotizacion cotizacion = {cotizacion}/>) }
                </div>
            </Container>
        </>
    )
}

export default App
