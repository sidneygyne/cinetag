import Banner from 'components/Banner'
import styles from './Favoritos.module.css'
import Titulo from 'components/Titulo'
import { useFavoritoContex } from 'components/contextos/Favoritos'
import Card from 'components/Card'

function Favoritos() {
    const { favorito } = useFavoritoContex()
    return (
        <>
            <Banner imagem="Favoritos" />
            <Titulo>
                <h1>Meus favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                {favorito.map((fav) => {
                    return <Card {...fav} key={fav.id} />
                })}
            </section>
        </>
    )
}

export default Favoritos