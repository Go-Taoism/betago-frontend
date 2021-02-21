import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { history } from 'react-router-dom';
import { Button } from 'antd';
import BackgroundCanvas from '../component/canvas/login-bg';
import Logo from '../component/logo/index';
import styled from 'styled-components'
import img from '../assets/white_bg.8195cd68.png';

const Container = styled.div`
  width: 100%;
  height: 100%;
`
const Middle = styled.div`
    z-index: 2;
    position: relative;
    width: 60vw;
    height: 100%;
    background: url(${img});
    background-repeat: no-repeat;
    background-size: 60vw 100vh;
    padding: 36vh 0 0 10vw;
    box-sizing: border-box;
`

const Wrapper = styled.div`
    margin-top:30px;
    button {
        margin-right:15px;
        margin-bottom: 8px
    }
`

@inject("homeStore")
@observer
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    let token = localStorage.getItem('access_token');
    if (token) {
      this.props.history.push('/room')
    } 
  }

  login = () => {
    this.props.history.push('./login')
  }

  register = () => {
    this.props.history.push('./register')
  }
  render() {
    return (
      <Container>
        <Middle>
          <Logo />
          <Wrapper>
            <Button type="primary" onClick={this.login} >登录</Button>
            <Button type="primary" onClick={this.register} >免费注册</Button>
          </Wrapper>
        </Middle>
        <BackgroundCanvas />
      </Container>
    )
  }
}
export default Home;