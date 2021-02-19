import React from 'react';
import {useRouter} from 'next/router';
import styled from 'styled-components';
import {ChallengeButton, ChallengeContainer, Title, Subtitle} from './mainStyle';

const SmileImagePath = '/images/smile.png';

const SmileImage = styled.img`
  margin-bottom: 20px; 
`
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
        <Subtitle>
            Smile! You are being... my evaluator.
        </Subtitle>
        <SmileImage src={SmileImagePath} alt="Do smile!" />
        <ChallengeButton type="primary" onClick={handleClickCheckButton}>
            CHECK THIS OUT!
        </ChallengeButton>
      </ChallengeContainer>
  )
}


export default Home;
