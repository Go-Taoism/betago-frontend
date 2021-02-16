/**
 * Created by zengtao on 2017/5/19.
 */
import React, {useEffect, useState} from 'react';
import './index.scss'
import {history, Link} from 'react-router-pro'
import {inject, observer} from 'mobx-react';
import  Gobutton from '../../components/button/button';
import BackgroundCanvas from '../../components/canvas/login-bg';

const index = (props) => {
    const {userStore} = props;

    return (
        <div className = "home-container">
            <div className = 'login'>
                <div className = 'logos'> 
                    <div className = 'logos-bg'></div>
                    <div style={{marginTop: '30px'}}> 
                        <div className = 'title'>BetaGo Online</div>
                        <div className = 'sub-title'>在线对弈</div>
                    </div>
                </div>
                <div className = 'button-wrapper'> 
                    <Gobutton>登录</Gobutton>
                    <Gobutton>免费注册</Gobutton>
                </div>
            </div>
            <BackgroundCanvas />
        </div>
    );
}

export default inject('userStore')(observer(index));
