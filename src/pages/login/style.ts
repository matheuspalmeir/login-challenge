import style from 'styled-components';
import {Input, Button} from 'antd';


export const LoginButton = style(Button)`
    width: 256px;
    height: 48px;
    left: 877px;
    top: 511px;
    background: linear-gradient(267.79deg, #383E71 0%, #9D25B0 99.18%);
    box-shadow: 0px 10px 25px #CF99DB;
    border-radius: 8px;
    color: #FFFF;
`;

export const FormItemLabel = style.label`
    font-size: 10px;
    line-height: 48px;
`

export const ContainerLogin = style.div`
    display: flex;
    flex-wrap: wrap;
    width: 400px;
    justify-content: center;
    text-align: center;
    align-items: center;
`

export const InputLogin = style(Input)`
    border: 1px solid #989FDB;
    box-sizing: border-box;
    border-radius: 8px;
    font-size: 10px;
    line-height: 48px;
`

export const LoginLink = style.a`
    color: #bb74cb;

`

