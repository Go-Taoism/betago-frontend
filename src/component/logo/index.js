import React, { useEffect, useState, Fragment } from "react";
import styled from 'styled-components'
import img from '../../assets/logo.png';
// import "./index.css";

const Logos = styled.div`
    display: flex;
    align-items: center;
` 

const Icon = styled.div`
    width: 180px;
    height: 100px;
    background: url(${img});
    background-size: cover;
    background-repeat: no-repeat;
`
const Title = styled.div`
    color: rgb(159, 185, 192);
    font-size: 30px;
`
const SubTitle = styled.div`
    color: rgb(159, 185, 192);
    font-size:25px;
`

const Logo = (props) => {
  return (
    <Logos>
      <Icon></Icon>
      <div style={{ marginTop: "30px" }}>
        <Title>BetaGo Online</Title>
        <SubTitle>在线对弈</SubTitle>
      </div>
    </Logos>   
  )
}

export default Logo
