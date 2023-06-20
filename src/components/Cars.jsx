import styles from './Cars.module.css'

const Cars = ({marca, modelo, ano, zeroKm}) => {
  return (
    <div className={styles.cars}>
      <ul>
         <li>{marca} - {modelo} - {ano}</li>
         {zeroKm ? (<p style={{color:"#00df00", fontWeight:"bold"}}>Esse carro é zero km!</p>) : (<p style={{color:"#dd0000", fontWeight:"bold"}}>Esse carro é semi-novo! Consulte mais informações!</p>)}
      </ul>
    </div>
  )
}

export default Cars