import Rodape from "components/Rodape";

const { default: Cabecalho } = require("components/Cabecalho");
const { default: Container } = require("components/Container/Container");
const { default: FavoritosProvider } = require("components/contextos/Favoritos");
const { Outlet } = require("react-router-dom");

function PaginaBase() {
    return (
        <main>
            <Cabecalho />
            <Container>
                <FavoritosProvider>
                    <Outlet />
                </FavoritosProvider>
            </Container>
            <Rodape />
        </main>
    )
}

export default PaginaBase