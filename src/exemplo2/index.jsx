import { useEffect, useState } from "react";

export default function App() {
  
  const [Usuario,setUsuario] = useState([]);

  useEffect(() => { 

    const buscarUsuario  = async () => {
        const Usuario    = await fetch('https://json');
        const dados =  await Usuario.json();
        setUsuario(dados); 
    }
    buscarUsuario();
  },[]); //complete o código);

  return (
    <>
      <h1>Usuário</h1>
      <ul>
        {Usuario.map(usuario =>(
          <li key={usuario.userId}>
            <p>{usuario.id}</p>
            <p>{usuario.title}</p>
            <p>{usuario.completed}</p>
            </li>
          ))}
      </ul>
    </>
  );
}
