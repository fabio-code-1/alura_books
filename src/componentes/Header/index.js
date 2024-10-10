import Logo from '../Logo';
import OpcoesHeader from '../OpcoesHeader';
import IconesHeader from '../IconesHeader';
import styled from 'styled-components';

const HeaderConteiner = styled.header`
    background-color: #fff;
    display: flex;
    justify-content: center;
`

function Header(params) {
    return(
        <HeaderConteiner>
            <Logo/>
            <OpcoesHeader/>
            <IconesHeader/>
        </HeaderConteiner>
    );
}

export default Header