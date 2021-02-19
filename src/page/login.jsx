import React, { Component } from "react";
import styled from 'styled-components';
import { Form, Input, Button, Checkbox } from 'antd';
import Logo from '../component/logo/index';
import BackgroundCanvas from '../component/canvas/login-bg';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

const Container = styled.div`
    width: 40%;
    margin: 0 auto;
    height: 100%;
`

const Formwrapper = styled.div`
    position: relative;
    z-index: 2;
    margin-top: 200px;
`
const LeftPad = styled.div`
    position: relative;
    left: -30%;
    margin-top: 40px;
`

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  onFinish = (values) => {
    console.log('Success:', values)
  }

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  render() {
    return (
      <Container>
        <Formwrapper>
          <Logo />
          <LeftPad>
            <Form
              {...layout}
              name="basic"
              initialValues={{ remember: true }}
              onFinish={this.onFinish}
              onFinishFailed={this.onFinishFailed}
            >
              <Form.Item
                label="用户名"
                name="username"
                rules={[
                  { required: true, message: 'Please input your username!' },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="密码"
                name="password"
                rules={[
                  { required: true, message: 'Please input your password!' },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  登录
                </Button>
              </Form.Item>
            </Form>
          </LeftPad>
        </Formwrapper>
        <BackgroundCanvas />
      </Container>
    )
  }
}
export default Login