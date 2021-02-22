import Footer from '../../components/login/Footer/Footer';
import Header from '../../components/login/Header/Header';
import {message} from 'antd';
import {useState} from 'react';
import LoginForm, {FormValuesLogin} from '../../components/login/Form/LForm';
import AuthService from '../../services/auth/Auth';
import {ChallengeContainer} from '../mainStyle';

const LoginPage = () => {
    const [loading, setLoading] = useState(false);

    const handleFormLoginFinished = async(credentials: FormValuesLogin) => {
        setLoading(true);

        const dataResponse = await AuthService.login();

        if(!dataResponse){
            showMessage('error', 'Não foi possível logar!');
            setLoading(false);
            return;
        }

        showMessage('success', 'Bem-vindo ao sistema!');
        setLoading(false);
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
            <LoginForm {...{handleFormLoginFinished, loading}}/>
            <Footer/>
        </ChallengeContainer>
    )
}

export default LoginPage; 