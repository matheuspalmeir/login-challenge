import React, {useState} from 'react';
import FormErrorMessage from '../utils/FormErrorMessage';
import { Form, message } from 'antd';
import {ChallengeButton } from '../../pages/mainStyle';
import {InputLogin, FormItemLabel} from './style';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

export type FormValuesLogin = {
    email: string;
    password: string;    
}

const LForm = (props: any) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleFinishedForm = (values: FormValuesLogin) => {
        const isMobile = window.innerWidth <= 375;

        message.success({
            content: 'Bem-vindo ao sistema!',
            style: {
                marginTop: isMobile ? '20%' : '0',
                marginLeft: isMobile ? '10%' : '68%', 
                width: '300px'},
        });
    }

    return (
        <Form
            name="normal_login"
            className="login-form"
            layout={'vertical'}
            requiredMark={false}
            onFinish={handleFinishedForm}
        >
            <Form.Item
                name="email"
                label={<FormItemLabel>E-MAIL</FormItemLabel>}
                rules={[
                    {
                        required: true,
                        message: <FormErrorMessage txt='Por favor, digite seu e-mail!' />,

                    },
                    {
                        type: 'email',
                        message:  <FormErrorMessage txt='Por favor, digite um e-mail válido!'/>,
                    },
                ]} 
                hasFeedback
            >
                <InputLogin  
                    prefix={<UserOutlined className="site-form-item-icon" />} 
                    placeholder="user.name@gmail.com"
                    size="small"
                />
            </Form.Item>
            <Form.Item
                name="password"
                label={<FormItemLabel>SENHA</FormItemLabel>}
                rules={[
                    {
                        required: true,
                        message: <FormErrorMessage txt='Por favor, digite sua senha!'/>,
                    }
                ]}
                hasFeedback 
            >
                <InputLogin 
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="*********"
                    size="small" 
                />
            </Form.Item>
            <Form.Item>
                <ChallengeButton htmlType="submit" type="primary" >ENTRAR</ChallengeButton> 
            </Form.Item>
        </Form>
    )
}

export default LForm;