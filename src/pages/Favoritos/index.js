import Banner from 'components/Banner'
import styles from './Favoritos.module.css'
import Titulo from 'components/Titulo'
import Card from 'components/Card'

function Favoritos () {
    return (
        <>
            <Banner imagem="Favoritos" />
            <Titulo>
                <h1>Meus favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                 <h1>conteudo favoritos</h1>
                
            </section>
        </>
    )
}

export default Favoritos