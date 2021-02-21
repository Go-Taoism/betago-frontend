import React, { Component } from "react";
import styled from 'styled-components';
import { Form, Input, Button, message } from 'antd';
import Logo from '../component/logo/index';
import BackgroundCanvas from '../component/canvas/login-bg';
import { registerApi } from '../api/index';

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

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  onFinish = async(values) => {
    console.log('Success:', values)
    let payload = {
      ...values,
      name: values.username
    }
    let res = await registerApi(payload);
    console.log(res)
    message.info(res.data.message)
    if (res.data.user) {
      this.props.history.push('/login');
    }
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
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="邮箱"
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="密码"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="confirm"
              label="确认密码"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      "The two passwords that you entered do not match!"
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                注册
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
export default Register