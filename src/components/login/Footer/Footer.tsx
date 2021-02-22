import {LoginLink, ContainerFooter, TextFooter} from '../style';

const Footer = () => {
    return(
        <ContainerFooter>
            <TextFooter data-testid={"question-footer"}>Esqueceu seu login ou senha?</TextFooter>
            <TextFooter>Clique <LoginLink href="#" data-testid={"link-footer"}>aqui</LoginLink></TextFooter>
        </ContainerFooter>
    )
}

export default Footer;