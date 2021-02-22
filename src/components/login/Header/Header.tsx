import {Title, Subtitle} from '../../../pages/mainStyle';
import {ContainerHeader} from '../style';

const Header = () => {
    return(
        <ContainerHeader>
            <Title data-testid={'welcome-message'} size={'40px'}>
                Olá, seja bem-vindo!
            </Title>
            <Subtitle data-testid="instruction-message" aligment={'left'} fontColor={'#989FDB'}>
                Para acessar a plataforma faça seu login.
            </Subtitle>
        </ContainerHeader>
    )
}

export default Header;