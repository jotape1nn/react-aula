// import {useState} from "react";

// export default function App() {
//   const [nome] = useState("jota");
//     const [Situacao, setSituacao] = useState(true);

//   function mudarSituacao(){
//     setSituacao(!Situacao)
//   }

//   return (
//     <>
//     <h2>Nome: {nome}</h2>
//     <h2>Situação: {Situacao ? 'ativo' : 'inativo'}</h2>
//       <button onClick={mudarSituacao}>mudar situação</button>
//     </>
//   )
// }


import Contador from "./components/contador/contador"
export default function App(){

return(
  <>
    <Contador/>
  </>
 )}

