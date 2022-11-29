import {useEffect, useState } from "react";
import styled from "@emotion/styled";
import Error from "./Error.jsx";
import useSelectMoneda from "../hooks/useSelectMoneda.jsx";
import { monedas } from "../data/moneda.js";

const InputSubmit  = styled.input`
  background-color: #9497FF;
  border: none;
  width: 100%;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  padding: 10px;
  
  &:hover{
    background-color: #7A7DFE;
  }
`

const Formulario = ( { setMonedas } ) => {
    const [error, setError] = useState(false)
    const [ cryptos, setCryptos ] = useState([])
    const [ moneda, SelectMonedas ] = useSelectMoneda("Selecciona tu Moneda", monedas);
    const [ crypto, SelectCryptos ] = useSelectMoneda("Selecciona tu Criptomoneda", cryptos);

    useEffect(() => {
        const consultAPI = async ()=>{
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";
            const answer = await fetch(url)
            const result = await answer.json()
            const arrayCriptos = result.Data.map( cripto => {
                return { id: cripto.CoinInfo.Name,
                         Nombre: cripto.CoinInfo.FullName
                }
            } )
            setCryptos(arrayCriptos)
        }
        consultAPI();
    }, []);
    
    const handleSubmit = (e) =>{
        e.preventDefault()

        if([moneda, crypto].includes("")){
            setError(true)
            return;
        }
        setError(false)
        setMonedas({moneda, crypto})
    }

    return (
        <form onSubmit={handleSubmit}>
            {error && (<Error>Todos los campos son obligatorios</Error>)}
            <SelectMonedas/>
            <SelectCryptos/>
            <InputSubmit
                type = "submit"
                value = "Cotizar"
            />
        </form>
    )
}

export default Formulario