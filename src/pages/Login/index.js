import './index.scss'
import { Card, Form, Input, Button } from 'antd'
import logo from '@/assets/logo.png'

const Login = () => {
    const onFinish = (values) => { // 表单提交且数据验证成功后回调
        console.log(values);
    }
    return (
        <div className="login" >
            <Card className="login-container" >
                <img className="login-logo" src={logo} alt="" />
                {/* 登录表单*/}
                <Form  onFinish={onFinish} validateTrigger={['onBlur']} > { /* 要点：失去焦点时验证 */ }
                    <Form.Item
                        name="mobile"
                        rules={[ // 要点：依次验证规则，直到全部通过
                            {
                                required: true,
                                message: '请输入手机号'
                            },
                            {
                                pattern: /^([569]\d{7}|[0-9]{8})$/, 
                                message: '手机号格式不对'
                            }
                        ]}
                    >
                        <Input size="large" placeholder="请输入手机号" />
                    </Form.Item>
                    <Form.Item
                        name="code"
                        rules={[
                            {
                                required: true,
                                message: '请输入验证码'
                            }]}
                    >
                        <Input size="large" placeholder="请输入验证码" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" size="large" block>
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default Login