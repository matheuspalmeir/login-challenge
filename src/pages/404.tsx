import {useRouter} from 'next/router';
import {
    ChallengeButton, 
    ChallengeContainer, 
    Title, Subtitle, IconImage
} from '../styles/mainStyle';

const SadImagePath = '/images/sad.png';

const Page404 = () => {
    const router = useRouter();

    const handleClickGoHome = () => {
      router.replace('/');
    }

    return(
        <ChallengeContainer>
        <Title size="40px" >Ops! Check the URL, this page was not found!</Title>
        <Subtitle>
            But, don't give up! Do you want go home and try again? 
        </Subtitle>
        <br/>
        <IconImage src={SadImagePath} alt="Do smile!" />
        <ChallengeButton type="primary" onClick={handleClickGoHome}>
            Let's go home!
        </ChallengeButton>
      </ChallengeContainer>
    )
}

export default Page404;