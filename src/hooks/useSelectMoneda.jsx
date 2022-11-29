import {useState} from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  font-family: "Lato", sans-serif;
  font-size: 24px;
  color: #FFF;
  font-weight: 700;
  display: block;
  margin: 15px 0;
`
const Select = styled.select`
  width: 100%;
  padding: 14px;
  border-radius: 5px;
  border: none;
  background-color: #FFF;
  font-family: "Lato", sans-serif;
  font-size: 18px;
  margin-bottom: 15px;
`

const useSelectMoneda = (label, options) => {

    const [state, setState] = useState("");

    const SelectMonedas = () => (
        <>
            <Label>{label}</Label>
            <Select value={state} onChange={(e)=> setState(e.target.value) }>
                <option value="">-- Seleccione --</option>
                {options.map( data =>
                    (
                        <option
                            key={data.id}
                            value={data.id}
                        >
                            {data.Nombre}
                        </option>
                    )
                )}
            </Select>
        </>
    )
    return [ state, SelectMonedas ]
}

export default useSelectMoneda