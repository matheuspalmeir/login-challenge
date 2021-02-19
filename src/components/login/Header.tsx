import {Title, Subtitle} from '../../pages/mainStyle';
import {ContainerHeader} from './style';

const Header = () => {
    return(
        <ContainerHeader>
            <Title size={'40px'}>
                Olá, seja bem-vindo!
            </Title>
            <Subtitle aligment={'left'} fontColor={'#989FDB'}>
                Para acessar a plataforma faça seu login.
            </Subtitle>
        </ContainerHeader>
    )
}

export default Header;