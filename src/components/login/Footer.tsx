import {LoginLink, ContainerFooter} from './style';

const Footer = () => {
    return(
        <ContainerFooter>
            <p>Esqueceu seu login ou senha?</p>
            <p>Clique <LoginLink>aqui</LoginLink></p>
        </ContainerFooter>
    )
}

export default Footer;