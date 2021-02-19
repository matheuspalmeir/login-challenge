import {Form} from 'antd';
import {ChallengeButton, ChallengeContainer} from '../mainStyle';
import {InputLogin, FormItemLabel, InputPassword, LoginLink } from './style';


const LoginPage = () => {
    return(
        <ChallengeContainer>
            <Form>
                <Form.Item
                    label={<FormItemLabel>E-MAIL</FormItemLabel>}
                    rules={[
                        {
                        type: 'email',
                        message: 'Por favor, digite um e-mail válido!',
                        },
                        {
                        required: true,
                        message: 'Por favor, digite seu e-mail',
                        },
                    ]}
                >
                    <InputLogin />
                </Form.Item>
                <Form.Item
                    name="password"
                    label={<FormItemLabel>SENHA</FormItemLabel>}
                    rules={[
                    {
                        required: true,
                        message: 'Por favor, digite sua senha!',
                    },
                    ]}
                    hasFeedback
                >
                    <InputPassword />
                </Form.Item>
                <Form.Item>
                    <ChallengeButton>ENTRAR</ChallengeButton> 
                </Form.Item>
            </Form>
        </ChallengeContainer>
    )
}

export default LoginPage; 