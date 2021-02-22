import Footer from '../../components/login/Footer/Footer';
import Header from '../../components/login/Header/Header';
import {message} from 'antd';
import LoginForm, {FormValuesLogin} from '../../components/login/Form/LForm';
import AuthService from '../../services/auth/Auth';
import {ChallengeContainer} from '../mainStyle';

const LoginPage = () => {


    const handleFormLoginFinished = async(credentials: FormValuesLogin) => {
        const dataResponse = await AuthService.login();

        if(!dataResponse){
            showMessage('error', 'Não foi possível logar!');
            return;
        }

        showMessage('success', 'Bem-vindo ao sistema!');
    }

    const showMessage = (type : string, content : string) => {
        const isMobile = window.innerWidth <= 375;
        const style = {
            marginTop: isMobile ? '20%' : '0',
            marginLeft: isMobile ? '10%' : '68%', 
            width: '300px'
        };
        
        message[type]({content,style});
    }


    return(
        <ChallengeContainer>
            <Header />
            <LoginForm {...{handleFormLoginFinished}}/>
            <Footer/>
        </ChallengeContainer>
    )
}

export default LoginPage; 