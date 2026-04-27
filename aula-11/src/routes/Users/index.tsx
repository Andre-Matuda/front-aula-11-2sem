import React, { useEffect, useState } from 'react'

export default function Users() {

  const [listaUsuarios, setlistaUsuarios] = useState([
    {
      id:0,
      login:"",
      avatar_url:""
    }
  ]);


  useEffect(() => {

     const chamaUsers = async () => {
      const usuarios =await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
      
      const data = await usuarios.json();

      setlistaUsuarios(data);

      console.log(data);

      return
    }
    chamaUsers();
  }, [])

  return (
    <main>
        <h1>Users</h1>
        <div>
          <ul>
            {listaUsuarios.map((u, indice)=>(
              <li key={indice}>{u.id} - {u.login} - <img src={u.avatar_url} alt="" /></li>
              
            ))}
          </ul>
        </div>
    </main>
  )
}
