import styles from './Rodape.module.css'
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

function Rodape() {
    return (
        <footer className={styles.rodape}>
            <h2 className={styles.texto}>Desenvolvido por Sidney Rodrigues Magalhães</h2>
            <div className={styles.redes_sociais}>
                <a href="https://github.com/sidneygyne" target="_blank" rel="noopener noreferrer" >
                    <IoLogoGithub className={styles.icone} alt="imagem github" />
                </a>
                <a href="https://www.linkedin.com/in/sidneygyn" target="_blank" rel="noopener noreferrer" >
                    <IoLogoLinkedin className={styles.icone} alt="imagem linkedin" />
                </a>
                <a href="https://instragram.com/sidneygyn" target="_blank" rel="noopener noreferrer" >
                    <IoLogoInstagram className={styles.icone} alt="imagem instragram" />
                </a>
            </div>
        </footer>
    )
}

export default Rodape