import { livros } from "./dadosUltimosLancamentos";
import styled from "styled-components";
import { Titulo } from "../Titulo/Index";
import CardRecomenda from "../CardRecomenda";
import livroImagem from '../../imagens/livro2.png'

const UltimosLancamentosContainer = styled.section`
  background-color: #EBECEE;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
`

const NovosLivrosContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px; /* Adiciona espaço entre as imagens */
`

const ImgLivro = styled.img`
  width: 250px; /* Ajuste o tamanho da imagem conforme necessário */
  height: auto;
`



function UltimosLancamentos() {
    return(
        <UltimosLancamentosContainer>
            <Titulo 
                cor="#EB9B00"
                tamanhoFonte="36px" 
                >
                    Últimos Lançamentos
                </Titulo>
            <NovosLivrosContainer>
                {livros.map((livro) => (
                <ImgLivro key={livro.id} src={livro.src} alt="Imagem Livro" />
                ))}
            </NovosLivrosContainer>
            <CardRecomenda 
                titulo='Talvez você se interesse por'
                subtitulo='Angular 11'
                decricao='Construindo uma aplicação integrada com a plataforma Google'
                img={livroImagem}
            />
        </UltimosLancamentosContainer>
    );
}

export default UltimosLancamentos