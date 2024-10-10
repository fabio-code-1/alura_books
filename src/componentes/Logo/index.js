import logo from '../../imagens/logo.svg'
import styled from 'styled-components';

// ATENÇÃO O NOME DA CONST NAO PODE TER O NOME DA FUNÇÃO
const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
`

const LogoImage = styled.img`
    margin-right: 10px;
`

function Logo() {
    return(
        <LogoContainer>
            <LogoImage src={logo} alt='Logo'/>
            <p><strong>Alura Books</strong></p>
        </LogoContainer>
    );
}

export default Logo;