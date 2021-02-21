import { Button } from 'antd';
import styled,{createGlobalStyle} from 'styled-components';

const MontserratRegular = '/fonts/Montserrat/Montserrat-Regular.woff';
const MontserratThin = '/fonts/Montserrat/Montserrat-Thin.woff';
const MontserratSemiBold = '/fonts/Montserrat/Montserrat-SemiBold.woff';

type FontSizeType = {
    size?: string,
    aligment?: string,
    fontColor?: string,
}

type ContainerProp = {
    aligment?: string,
}

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

    body,h1,h2,div{
        font-family: 'Montserrat-Regular', 'Montserrat-Thin', 'Montserrat-SemiBold';
        color: #383E71;
    }

     button, input{ 
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
    font-weight: 600;
    font-family:'Montserrat-Regular';
    background: linear-gradient(267.79deg, #383E71 0%, #9D25B0 99.18%);
    box-shadow: 0px 10px 25px #CF99DB;
    border-radius: 8px;
    color: #FFFF;
    border: none;

    :hover{
        background: linear-gradient(267.79deg, #313661 5%, #9623a7 95.18%);
    }

    :focus{
        background: linear-gradient(267.79deg, #313661 5%, #9623a7 95.18%);
        outline: none;
    }

    @keyframes pulse {
        from{ box-shadow: 0px 10px 25px #CF99DB;}
        to{box-shadow: 0px 0px 5px 5px #CF99DB;}
    }

    :after{
        animation: pulse 0.2s 1 ease-out;
    }

    @media screen and (max-width: 414px){
        position: absolute;
        width: 168px;
        left: 18%;
        top: 12px;
        box-shadow: none;
    };
`;

export const ChallengeContainer = styled.div<ContainerProp>`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: ${props => props.aligment || 'center'};;
    flex-direction: column;
    padding-top: 30px;
`

export const Title = styled.div<FontSizeType>`
    font-size: ${props => props.size || '48px'};
    line-height: 48px;
    color: ${props => props.fontColor};
    margin-bottom: 15px;

    @media screen and (max-width: 414px){
        width: 160px;
        font-size: 24px;
        line-height: 30px;
        margin-bottom: 5px;
    };

`

export const Subtitle = styled.div<FontSizeType>`
  font-size: ${props => props.size || '16px'};
  text-align: ${props => props.aligment || 'center'};
  color: ${props => props.fontColor};
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0em;

    @media screen and (max-width: 414px){
        font-size: 12px;
        line-height: 20px;
    };
  
`

export const IconImage = styled.img`
  margin-bottom: 20px; 
`