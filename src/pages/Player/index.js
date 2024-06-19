import Banner from 'components/Banner'
import styles from './Player.module.css'
import Titulo from 'components/Titulo'
import { useParams } from 'react-router-dom'
// import videos from 'json/db.json';
import NaoEncontrada from 'pages/NaoEncontrada';
import { useEffect, useState } from 'react';

function Player() {

    //API EXTERNA
    const [video, setvideo] = useState()
    const parametros = useParams()
    useEffect(() => {
        fetch(`https://json-server-rho-lovat.vercel.app/cinetag?id=${parametros.id}`)
            .then(resposta => resposta.json())
            .then(dados => {
                setvideo(...dados)
            })
    }, [parametros.id])

    //FIM API EXTERNA

    // const patametros = useParams()
    // const video = videos.find((video) => {
    //     return video.id === Number(patametros.id)
    // })

    if(!video) {
        return (<NaoEncontrada/>
        )
        }


    return (
        <>
            <Banner imagem="Player" />
            <Titulo>
                <h1>{video.titulo}</h1>
            </Titulo>
            <section className={styles.container}>
                <iframe
                    width="100%"
                    height="100%"
                    src={video.link}
                    title={video.titulo}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </section>

        </>
    )

    
}

export default Player