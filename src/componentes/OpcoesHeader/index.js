import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Opcoes = styled.ul`
    display: flex;
`
const Opcao = styled.li`
    min-width: 120px;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
`

// const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'ESTANTE']
const textoOpcoes = [
  {
    texto:'CATEGORIAS',
    rota: '/categorias'
  },
  {
    texto: 'FAVORITOS',
    rota: '/favoritos'
  },
  {
    texto:'MINHA ESTANTE',
    rota:'/estante'
  }
]


function OpcoesHeader(params) {
    return(
        <Opcoes>
          {/* Usando javascript para varrer um array */}
          {textoOpcoes.map((opcao) => (
              <Link to={opcao.rota} key={opcao.texto}>
              <Opcao>
                <p>{opcao.texto}</p>
              </Opcao>
            </Link>
          ))}
        </Opcoes>
    );
}

export default OpcoesHeader;