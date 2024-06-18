import Rodape from "./components/Rodape";
import Cabecalho from "./components/Cabecalho";
import Banner from "./components/Banner";
import Titulo from "./components/Titulo";
import Card from "./components/Card";
import videos from 'json/db.json';
import styles from './Inicio.module.css';

function Inicio() {
    return (
        <>
            <Cabecalho />
            <Banner imagem="Home"/>
            <Titulo children="">
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
                <section className={styles.container}>
                {videos.map((video) => {
                return <Card {...video} key={video.id} />
                })}
            
            </section>
            
            <Rodape/>
        </>

    )
}

export default Inicio