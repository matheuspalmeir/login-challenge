import styled,{createGlobalStyle} from 'styled-components';
import {Input, Button} from 'antd';

//import GlobalStyle from './mainStyle';
const MontserratRegular = '/fonts/Montserrat/Montserrat-Regular.woff';
const MontserratThin = '/fonts/Montserrat/Montserrat-Thin.woff';
const MontserratSemiBold = '/fonts/Montserrat/Montserrat-SemiBold.woff';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Montserrat-Regular';
        src: local('Montserrat-Regular'), url(${MontserratRegular}) format('woff');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Montserrat-SemiBold';
        src: local('Montserrat-SemiBold'), url(${MontserratSemiBold}) format('woff');
        font-weight: 400;
        font-style: normal;
    }

    @font-face{
        font-family: 'Montserrat-Thin';
        src: local('Montserrat-Thin'), url(${MontserratThin}) format('woff');
        font-weight: 400;
        font-style: normal;
    }

    body{
        font-family: 'Montserrat-Thin', 'Montserrat-Regular', 'Montserrat-SemiBold';
        color: #383E71
    }

     button{ 
        border:none; 
        text-decoration: none;
        cursor: pointer;

        :focus {
            outline: none;
        }

    } 
`;

export const ChallengeButton = styled(Button)`
    width: 256px;
    height: 48px;
    left: 877px;
    top: 511px;
    font-weight: 600;
    font-family:'Montserrat-Thin';
    background: linear-gradient(267.79deg, #383E71 0%, #9D25B0 99.18%);
    box-shadow: 0px 10px 25px #CF99DB;
    border-radius: 8px;
    color: #FFFF;

    :hover{
        background: linear-gradient(267.79deg, #313661 5%, #9623a7 95.18%);
    }
`;

export const ChallengeContainer = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top: 25px;
`