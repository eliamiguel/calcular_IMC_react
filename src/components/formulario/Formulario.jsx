import { useState } from "react";
import styles from './Formulario.module.css';

const Formulario = ()=> {
  const [peso, setPeso]= useState(0);
  const [altura, setAltura]=useState(0);
  const [IMC, setIMC]=useState(0)
  const [resultado, setResultado] = useState("");
  const [classificacao, setClassificacao] = useState("");
  
  const pesoPessoa = (evento)=>{
    setPeso(parseFloat(evento.target.value));
  }
  const alturaPessoa= (evento)=>{
    setAltura(parseFloat( evento.target.value));
  }
  const resultadoIMC = ()=>{
   
const IMC = (peso / (altura * altura)).toFixed(2);
    setResultado(IMC);
    setIMC(IMC)
      
  if (IMC <= 18.5) {
  setClassificacao("Magro/a");
  }else if (IMC <= 24.9) {
      setClassificacao("Normal");
  }else if (IMC <= 29.9) {
  setClassificacao("Sobrepeso");
  }else if (IMC <= 39.9) {
  setClassificacao("Obesidade");
  }else {
  setClassificacao("Obesidade Grave");
  }   };



  return(
   <>
   
    <form className={styles.form}>
      <h1>Calculadora</h1>
      <label className={styles.labelAltura} htmlFor="altura">Informe sua altura: </label>
      <input className={styles.inputAltura}  type="number" id="altura" onChange={alturaPessoa} />
      <label className={styles.labelPeso} htmlFor="peso">Informe seu peso: </label>
      <input className={styles.inputPeso}  type="number" id="peso" onChange={pesoPessoa} />
     
      <button onClick={resultadoIMC} type="button">Calcular IMC</button>
      <p><b>Resultado:</b>  {IMC}</p>
  
   
      
    </form>
    <table className={styles.table}>
        <caption className={styles.caption}>Interepetação do IMC</caption>
          <thead>
            <tr className={styles.tableTr} >
              <th className={styles.tableTh}>IMC</th>
              <th className={styles.tableTh}>CLASSIFICAÇÃO</th>
            </tr>
            </thead>
            <tbody>
              <tr className={`${styles.tableTr} ${styles.valido}`}>
                <td className={styles.tableTd} >{resultado}</td>
                <td className={styles.tableTd} >{classificacao}</td>
              </tr>
            </tbody>
      </table>
    </>
  )
}
export default Formulario;
