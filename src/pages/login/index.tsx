import Footer from '../../components/login/Footer';
import Header from '../../components/login/Header';
import LoginForm from '../../components/login/LForm';
import {ChallengeContainer} from '../mainStyle';
import AuthService from '../../services/auth/Auth';

const LoginPage = (props: any) => {


    const handleFormLoginFinished = async() => {
        const dataResponse = await AuthService.login();
        console.log("Res:", dataResponse);
    }


    return(
        <ChallengeContainer>
            <Header />
            <LoginForm {...handleFormLoginFinished}/>
            <Footer/>
        </ChallengeContainer>
    )
}

export default LoginPage; 