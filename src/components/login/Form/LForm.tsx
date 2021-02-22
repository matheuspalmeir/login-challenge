import React, {useState} from 'react';

import { Form } from 'antd';
import FormErrorMessage from '../../utils/FormErrorMessage';
import {ChallengeButton } from '../../../pages/mainStyle';
import {InputLogin, FormItemLabel} from '../style';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

export type FormValuesLogin = {
    email: string;
    password: string;  
}

export type LFormProps = {
    handleFormLoginFinished: (credentials: FormValuesLogin) => void;
    loading?: boolean;
}

const LForm = (props: LFormProps) => {
    //const [email, setEmail] = useState<string>('');
    //const [password, setPassword] = useState<string>('');

    return (
        <Form
            data-testid="login-form"
            name="normal_login"
            className="login-form"
            layout={'vertical'}
            requiredMark={false}
            initialValues={{email: "", password: ""}}
            onFinish={props.handleFormLoginFinished}
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
                    data-testid="input-email"
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
                    data-testid="input-password"
                />
            </Form.Item>
            <Form.Item>
                <ChallengeButton loading={props.loading} data-testid="submit-button" htmlType="submit" type="primary" >ENTRAR</ChallengeButton> 
            </Form.Item>
        </Form>
    )
}

export default LForm;