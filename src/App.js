import Header from './componentes/Header';
import Pesquisa from './componentes/Pesquisa';
import styled from 'styled-components';

// usando styled para estilizar
const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002f52 35%, #326589);
  overflow: auto;
`

function App() {
  return (
    <AppContainer>
      <Header/>
      <Pesquisa/>
    </AppContainer>
  );
}

export default App;
