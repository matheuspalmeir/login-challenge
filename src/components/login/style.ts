import styled from 'styled-components';
import {Input, Button} from 'antd';

export const LoginButton = styled(Button)`
    width: 256px;
    height: 48px;
    left: 877px;
    top: 511px;
    background: linear-gradient(267.79deg, #383E71 0%, #9D25B0 99.18%);
    box-shadow: 0px 10px 25px #CF99DB;
    border-radius: 8px;
    color: #FFFF;
`;

export const FormItemLabel = styled.label`
    font-size: 10px !important;
    padding-left: 10px;
`

export const InputLogin = styled(Input)`
    border: 1px solid #989FDB;
    box-sizing: border-box;
    border-radius: 8px;
    line-height: 45px;
    width: 256px;
    font-size: 11px;
    color: #989FDB;
`

export const LoginLink = styled.a`
    color: #bb74cb;
    font-weight: bold;
    text-decoration: underline;

    :hover, :active{
        color: #9D25B0;
    }
`

export const ContainerHeader = styled.div`
    width: 256px;
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-bottom: 27px;

    @media screen and (max-width: 414px){
        margin-bottom: 10px;
        align-items: center;
    }
`

export const ContainerFooter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    @media screen and (max-width: 414px){
        position: absolute;
        bottom: -20%;
    }
`

export const TextFooter = styled.p`

    color: #989FDB;
    padding: 0px;
    margin: 0px;
    
`