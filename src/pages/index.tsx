import React from 'react';
import {useRouter} from 'next/router';
import styled from 'styled-components';
import {ChallengeButton, ChallengeContainer} from './mainStyle';

const SmileImagePath = '/images/smile.png';

const IndexTitle = styled.h1`
  font-size: 40px; 
  margin: 20px;
`

const Subtitle = styled.h4`
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
  font-family: 'Montserrat-SemiBold';
  
`

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
        <IndexTitle>Welcome to my Login Challenge!</IndexTitle>
        <Subtitle>
            I hope you like the code and the experience!
            <br/>
            This challenge was developed with care, love and happiness :)
        </Subtitle>
        <Subtitle>
            Smile! You are being... my evaluator.
        </Subtitle>
        <SmileImage src={SmileImagePath} alt="Do smile!" />
        <ChallengeButton onClick={handleClickCheckButton}>
            CHECK THIS OUT!
        </ChallengeButton>
      </ChallengeContainer>
  )
}


export default Home;
