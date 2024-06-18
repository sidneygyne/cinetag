import Banner from 'components/Banner'
import styles from './Player.module.css'
import Titulo from 'components/Titulo'

function Player () {
    return (
        <>
            <Banner imagem="Player" />
            <Titulo children="">
                <h1>Player</h1>
            </Titulo>
            <section className={styles.container}>
                 <h1>conteudo favoritos</h1>
                
            </section>
        </>
    )
}

export default Player