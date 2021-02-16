import React, {useEffect, useState} from 'react';
import { Circle, currentCirle } from './canvas';
import './login-bg.scss';

class BackgroundCanvas extends React.Component {

    componentDidMount() {
        let canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d');
        this.w = canvas.width = canvas.offsetWidth;
        this.h = canvas.height = canvas.offsetHeight;
        this.circles = [];
        this.current_circle = new currentCirle(0, 0);
        this.init(60);
    }

    init = (num) => {
        for (var i = 0; i < num; i++) {
            this.circles.push(new Circle(Math.random() * this.w, Math.random() * this.h));
        }
        this.draw();
    }

    draw = () => {
        this.ctx.clearRect(0, 0, this.w, this.h);
        for (let i = 0; i < this.circles.length; i++) {
            this.circles[i].move(this.w, this.h);
            this.circles[i].drawCircle(this.ctx);
            for ( let j = i + 1; j < this.circles.length; j++) {
                this.circles[i].drawLine(this.ctx, this.circles[j])
            }
        }
        if (this.current_circle.x) {
            this.current_circle.drawCircle(this.ctx);
            for (var k = 1; k < this.circles.length; k++) {
                this.current_circle.drawLine(this.ctx, this.circles[k])
            }
        }
        requestAnimationFrame(this.draw)
    }

    // const { type } = props
    render() {
        return (
            <canvas id="canvas" className = 'canvas'></canvas>
        )
    }
}

export default BackgroundCanvas