import './index.scss'
import { Card, Form, Input, Button, message } from 'antd'
import logo from '@/assets/logo.png'
import { useDispatch } from 'react-redux'
import { fetchLogin } from '@/store/modules/user'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onFinish = async (values) => { // 表单提交且数据验证成功后回调
        console.log(values)
        // 触发异步 action fetchLogin 完成登录
        await dispatch(fetchLogin(values)) // 注意：这里配合async 等登录完成后再跳转页面
        // 1. 跳转首页
         navigate('/')
        // 2. 提示用户登录成功
        message.success('登录成功')
    }
    return (
        <div className="login" >
            <Card className="login-container" >
                <img className="login-logo" src={logo} alt="" />
                {/* 登录表单*/}
                <Form onFinish={onFinish} validateTrigger={['onBlur']} > { /* 要点：失去焦点时验证 */}
                    <Form.Item
                        name="mobile"
                        rules={[ // 要点：依次验证规则，直到全部通过
                            {
                                required: true,
                                message: '请输入手机号'
                            },
                            {
                                pattern: /^1[3-9]\d{9}$/, // 中国大陆手机号格式
                                // /^([569]\d{7}|[0-9]{8})$/, 香港号码格式
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
                                message: '请输入验证码, 测试请用 246810' // bug: 测试请用 246810
                            }]}
                    >
                        <Input size="large" placeholder="请输入验证码, 测试请用 246810" />
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