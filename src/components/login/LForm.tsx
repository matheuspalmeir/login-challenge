import {Form} from 'antd';
import {ChallengeButton } from '../../pages/mainStyle';
import {InputLogin, FormItemLabel} from './style';
import { UserOutlined, LockOutlined } from '@ant-design/icons';


const LForm = () => {
    return (<Form
        layout={'vertical'}
        requiredMark={false}
    >
        <Form.Item
            label={<FormItemLabel>E-MAIL</FormItemLabel>}
            rules={[
                {
                    required: true,
                    message: 'Por favor, digite seu e-mail!',
                },
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
                    message: 'Por favor, digite sua senha!',
                }
            ]}
        >
            <InputLogin 
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="*********"
                size="small"
            />
        </Form.Item>
        <Form.Item>
            <ChallengeButton type="primary" >ENTRAR</ChallengeButton> 
        </Form.Item>
    </Form>
    )
}

export default LForm;