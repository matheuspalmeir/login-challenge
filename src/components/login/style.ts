import style from 'styled-components';
import {Input, Button} from 'antd';


interface SiderImageProp {
    path: string;
}

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
    font-size: 10px !important;
    padding-left: 10px;
`

export const InputLogin = style(Input)`
    border: 1px solid #989FDB;
    box-sizing: border-box;
    border-radius: 8px;
    line-height: 45px;
    width: 256px;
    font-size: 11px;
    color: #989FDB;
`

export const LoginLink = style.a`
    color: #bb74cb;
    font-weight: bold;
    text-decoration: underline;

    :hover, :active{
        color: #9D25B0;
    }
`

export const ContainerHeader = style.div`
    width: 256px;
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-bottom: 27px;
`

export const ContainerFooter = style.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p{
        color: #989FDB;
        padding: 0px;
        margin: 0px;
    }
`

export const SiderImage = style.div<SiderImageProp>`
    background: #130525;
    background-image: url(${props => props.path}); /* fallback */
    background-image: url(${props => props.path}), linear-gradient(180deg, #130525 0%, rgba(105, 57, 153, 0) 100%); 
`