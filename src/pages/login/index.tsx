import Footer from '../../components/login/Footer';
import Header from '../../components/login/Header';
import LoginForm from '../../components/login/LForm';
import {ChallengeContainer} from '../mainStyle';


const LoginPage = () => {
    return(
        <ChallengeContainer>
            <Header />
            <LoginForm />
            <Footer/>
        </ChallengeContainer>
    )
}

export default LoginPage; 