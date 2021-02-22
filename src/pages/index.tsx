import React from 'react';
import {useRouter} from 'next/router';
import {
	HomeButton, 
	WrapperButton,
  	ChallengeContainer, 
  	Title, Subtitle, IconImage
} from '../styles/mainStyle';

const SmileImagePath = '/images/smile.png';

 const Home = () => {
  	const router = useRouter();

  	const handleClickCheckButton = () => {
    	router.push('/login');
 	}

	return (
		<ChallengeContainer>
			<Title style={{textAlign: 'center'}}>Welcome to my Login Challenge!</Title>
			<Subtitle style={{padding: '15px'}}>
				I hope you like the code and the experience!
				<br/>
				This challenge was developed with care, love and happiness :)
			</Subtitle>
			<br/>
			<Subtitle>
				Smile! You are being... my evaluator.
			</Subtitle>
			<br/>
			<IconImage src={SmileImagePath} alt="Do smile!" />
			<HomeButton type="primary" onClick={handleClickCheckButton}>
				CHECK THIS OUT!
			</HomeButton>
		</ChallengeContainer>
	)
}


export default Home;
