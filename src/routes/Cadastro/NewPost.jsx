import fetch from '../../axios/config'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './NewPost.module.css'
import LoadingGIF from '../../images/gif-loading.gif'

export default function NewPost() {

    const navigate = useNavigate()

    const [titulo, setTitle] = useState()
    const [ano, setAno] = useState()
    const [nome, setNome] = useState()
    const [email, setEmail] = useState()

    
    const createPost = async(e) => {
        e.preventDefault();
        await fetch.post("/cadastro",{
            nome: nome,
            email: email,
            telefone: telefone,
            nascimento: nascimento,
        })
        alert(`Cadastro "${titulo}" cadastrado com sucesso!`)
    }

    return(
        <div className={styles.newPost}>
            <h2>Cadastrar</h2>
            <form onSubmit={(e)=>createPost(e)}>
                <div className={styles.formControl}>
                    <label htmlFor="nome">Nome</label>
                    <input type="text" name="nome" required placeholder="Digite o nome" className={styles.tituloInput} id="nome" onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className={styles.formControl}>
                    <label htmlFor="ano">Data de nascimento:</label>
                    <input type="number" required min={1900} max={2022} maxLength={4} minLength={4} name="ano" placeholder="Ex.: 1980" className={styles.anoInput} id="ano" onChange={(e) => setAno(e.target.value)}/>
                </div>
                <div className={styles.formControl}>
                    <label htmlFor="email">Email</label>
                    <input type="text" required name="email" placeholder="Digite email" className={styles.roteiroInput} id="email" onChange={(e) => setRoteiro(e.target.value)}/>
                </div>
                <div className={styles.formControl}>
                    <label htmlFor="telefone">Telefone</label>
                    <input type="text" required name="telefone" placeholder="Insira o numero de telefone" id="telefone" className={styles.imagemInput} onChange={(e) => setImagem(e.target.value)}/>
                </div>
                <input type="submit" className={styles.btn} value="Cadastrar" />
            </form>
        </div>
    )
}