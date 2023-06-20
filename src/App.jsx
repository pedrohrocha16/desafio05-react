import { useState } from 'react'
import './App.css'
import Cars from './components/Cars'

function App() {

  const [cars] = useState([
    {id:1, marca:"Volkswagem", modelo:"Polo", ano:2023, zeroKm:true,},
    {id:1, marca:"Chevrolet", modelo:"Onix", ano:2022, zeroKm:false,},
    {id:1, marca:"Fiat", modelo:"Argo", ano:2023, zeroKm:true,},
    {id:1, marca:"Hyundai", modelo:"HB20", ano:2020, zeroKm:false,},
    {id:1, marca:"Fiat", modelo:"Mobi", ano:2023, zeroKm:true},
    {id:1, marca:"Toyota", modelo:"Corolla", ano:2018, zeroKm:false},
    {id:1, marca:"Range Rover", modelo:"Velar", ano:2022, zeroKm:false},
    {id:1, marca:"Volkswagem", modelo:"Nivus", ano:2023, zeroKm:true},
    {id:1, marca:"Fiat", modelo:"Fastback", ano:2023, zeroKm:true}

  ]) 

  return (
    <>
      <h1>Desafio CSS React</h1>
      <h3>Carros no nosso estoque:</h3>
      {cars.map((car) => (
        <Cars
          marca={car.marca}
          modelo={car.modelo}
          ano={car.ano}
          zeroKm={car.zeroKm}
        />
      ))}
    </>
  )
}

export default App
