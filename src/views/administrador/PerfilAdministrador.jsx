import React from "react";
import Input from "../../components/input/Input";
import { Link ,useParams,useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";


export const PerfilAdministrador = () => {
    const {id}=useParams()
    const [usuarios,setUsuarios]=useState([])
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
  //  const [confirmarSenha, setConfirmarSenha] = useState('')
  const [telefone,setTelefone]=useState('')
 // const [papel_id]=useState('5')
//const [usuario_id]=useState('3')
const history=useNavigate()
  const getColaborador =async()=>{
    try{
      const response=await axios.get(`http://localhost:81/api-demanda/usuario/view/${id}/`)
     // console.log("oi",response)
      const data=response.data;
      setUsuarios(data)
    }catch(error){
console.log(error)
    }
  }

const EditeUser=async(e)=>{
    e.preventDefault();
   
   // let mudarPapel=parseInt(papel_id)
    //let mudarUsuario=parseInt(usuario_id)
      let mudarTelefone=parseInt(telefone)
      let mudarSenha=parseInt(senha)
    const res=await axios.put(`http://localhost:81/api-demanda/usuario/edit/${id}/`,{
        nome:nome,
        email:email,
        senha:mudarSenha,
         telefone:mudarTelefone
        // usuario_id:mudarUsuario,
         //papel_id:mudarPapel

    })
    if(res.status==200){
       
        history(`/administrador/${id}`);
     
    }else{
        alert("Tem algum dado errado")
    }
}

useEffect(()=>{
    getColaborador()
      },[])
      useEffect(() => {
        if (usuarios.length > 0) {
          setNome(usuarios[0].nome);
          setEmail(usuarios[0].email);
          setTelefone(usuarios[0].telefone);
          setSenha(usuarios[0].senha);
        }
      }, [usuarios]);
    return (
        <div>
            <nav>
                <Link to="#" onClick={() => window.history.back()}>Voltar</Link>
                <Link to="/" >Sair</Link>

            </nav>
            <h1>Editar perfil</h1>

            <form onSubmit={EditeUser}>
            <Input
            text="Nome do Administrador"
            type="text"
            placeholder="Informe o nome o seu nome"
            value={nome}
            name={nome}
            onChange={(e)=>setNome(e.target.value)}
          />
             <Input
            text="Email do adminstrador"
            type="text"
            placeholder="Informe o email  do colaborador"
            value={email}
            name={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
             <Input
            text="Telefone do administrador"
            type="number"
            placeholder="Informe o telefone  do administrador"
            value={telefone}
            name={telefone}
            onChange={(e)=>setTelefone(e.target.value)}
            />
             <Input
            text="Senha do usuario"
            type="text"
            placeholder="Informe a senha  do usuario"
            value={senha}
            name={senha}
            onChange={(e)=>setSenha(e.target.value)}
            />
                <div className='form-justo'>
                    <button>Confirmar</button>
                    <button className='cancel'>Cancelar</button>
                </div>



            </form>

        </div>


    )
}