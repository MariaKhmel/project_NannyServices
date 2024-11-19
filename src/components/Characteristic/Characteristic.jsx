const Characteristic = ({characteristicTitle, value})=>{

  return(Array.isArray(value) ? <p>{characteristicTitle} : <ul>{
      value.map(el=>(<li key={el}>{el}</li>))}</ul> </p>: <p>{characteristicTitle} : {value}</p>)
}; 

export default Characteristic;