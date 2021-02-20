import React from 'react';
import {useRouter} from 'next/router';
import {
  	ChallengeButton, 
  	ChallengeContainer, 
  	Title, Subtitle, IconImage
} from './mainStyle';

const SmileImagePath = '/images/smile.png';

 const Home = () => {
  	const router = useRouter();

  	const handleClickCheckButton = () => {
    	router.push('/login');
 	}

	return (
		<ChallengeContainer>
			<Title>Welcome to my Login Challenge!</Title>
			<Subtitle>
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
			<ChallengeButton type="primary" onClick={handleClickCheckButton}>
				CHECK THIS OUT!
			</ChallengeButton>
		</ChallengeContainer>
	)
}


export default Home;
