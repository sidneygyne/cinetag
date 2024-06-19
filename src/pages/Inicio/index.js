import Banner from "components/Banner";
import Titulo from "components/Titulo";
import Card from "components/Card";
// import videos from 'json/db.json';
import styles from './Inicio.module.css';
import { useEffect, useState } from "react";

function Inicio() {

    //API EXTERNA
    const [videos, setvideos] = useState([])
    useEffect(() => {
        fetch('https://json-server-rho-lovat.vercel.app/cinetag')
            .then(resposta => resposta.json())
            .then(dados => {
                setvideos(dados)
            })
    }, [])
    //FIM API EXTERNA

    return (
        <>
            <Banner imagem="Home" />
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <section className={styles.container}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id} />
                })}
            </section>
        </>

    )
}

export default Inicio