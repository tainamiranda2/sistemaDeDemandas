import React from 'react';
import Input from "../../components/input/Input";
import { Link , useParams,useNavigate} from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';


export const EdicaoDemanda = () => {
const {id}=useParams()
const [demandas, setDemandas] = useState([])
const [nome_demanda, setNomeDemanda] = useState('')
const [qtd, setQtd] = useState('')
const [setor_id] = useState('1')
const [status_id] = useState('1')
const [tipo, setTipo] = useState('')
const [descricao, setDescricao] = useState('')
const [usuario_id]=useState('3')
const history=useNavigate()
    const getDemandas =async()=>{
        try{
          const response=await axios.get(`http://localhost:81/api-demanda/demandas/view/${id}/`)
         // console.log("oi",response)
          const data=response.data;
          setDemandas(data)
        }catch(error){
    console.log(error)
        }
        
      }

//console.log(demandas)

    const EditeDemanda=async(e)=> {
        e.preventDefault();
        //console.log(name)
        let mudarStatus=parseInt(status_id)
        let mudarSetor=parseInt(setor_id)
     let   mudarUsuario=parseInt(usuario_id)

        const res = await axios.put(`http://localhost:81/api-demanda/demandas/edit/${id}/`, {
            nome_demanda: nome_demanda,
            qtd: qtd,
            tipo: tipo,
            descricao: descricao,
            status_id:mudarStatus,
            setor_id:mudarSetor,
            usuario_id: mudarUsuario
        })
        if(res.status==200){
            history("/usuario");
        }else{
            alert("Tem algum dado errado")
        }
    }

    useEffect(()=>{
        getDemandas()
          },[])

     useEffect(() => {
            if (demandas.length > 0) {
              setNomeDemanda(demandas[0].nome_demanda);
              setQtd(demandas[0].qtd);
              setTipo(demandas[0].tipo);
              setDescricao(demandas[0].descricao);
            }
          }, [demandas]);
    return (
        <div>

            <h1>Bem vindo ao sistema, Maria</h1>
            <form onSubmit={EditeDemanda}>
                <h2>Edite a demanda</h2>
                <Input text="Nome: " 
                type="text"
                  placeholder="Digite o nome da demanda"
                  value={nome_demanda}
                  name={nome_demanda}
                  onChange={(e)=>setNomeDemanda(e.target.value)}
                   required />

                <Input
                 text="QTD: "
                value={qtd}
                name={qtd}
                onChange={(e)=>setQtd(e.target.value)}
                 type="number" 
                 placeholder="Digite o a quantidade da demanda" 
                 required />

                <Input text="Tipo: " 
                type="text"
                value={tipo}
                name={tipo}
                onChange={(e)=>setTipo(e.target.value)}
                 placeholder="Digite o tipo da demanda"
                  required />

                <Input text="Descrição: " 
                type="text" 
                value={descricao}
                name={descricao}
                onChange={(e)=>setDescricao(e.target.value)}
                placeholder="Digite a digite" required />
                <div className='form-justo'>

                    <button>Confirmar</button>
                    <button className='cancel'>Cancelar</button>
                </div>

            </form>

        </div>


    )
}