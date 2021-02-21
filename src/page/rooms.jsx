import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { history } from 'react-router-dom';
import { Button } from 'antd';
import styled from 'styled-components'
import Goboard from '../component/goboard';
import { goBoard } from '@anarchy_zzh/goboard';
import io from 'socket.io-client';

// const signMap = [
//   [1, -1, 0, -1, -1, -1, 1, 0, 1, 1, -1, -1, 0, -1, 0, -1, -1, 1, 0],
//   [0, 0, -1, 0, -1, 1, 1, 1, 0, 1, -1, 0, -1, -1, -1, -1, 1, 1, 0],
//   [0, 0, -1, -1, -1, 1, 1, 0, 0, 1, 1, -1, -1, 1, -1, 1, 0, 1, 0],
//   [0, 0, 0, 0, -1, -1, 1, 0, 1, -1, 1, 1, 1, 1, 1, 0, 1, 0, 0],
//   [0, 0, 0, 0, -1, 0, -1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0],
//   [0, 0, -1, 0, 0, -1, -1, 1, 0, -1, -1, 1, -1, -1, 0, 1, 0, 0, 1],
//   [0, 0, 0, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, 1, 1, 1],
//   [0, 0, -1, 1, 1, 0, 1, -1, -1, 1, 0, 1, -1, 0, 1, -1, -1, -1, 1],
//   [0, 0, -1, -1, 1, 1, 1, 0, -1, 1, -1, -1, 0, -1, -1, 1, 1, 1, 1],
//   [0, 0, -1, 1, 1, -1, -1, -1, -1, 1, 1, 1, -1, -1, -1, -1, 1, -1, -1],
//   [-1, -1, -1, -1, 1, 1, 1, -1, 0, -1, 1, -1, -1, 0, -1, 1, 1, -1, 0],
//   [-1, 1, -1, 0, -1, -1, -1, -1, -1, -1, 1, -1, 0, -1, -1, 1, -1, 0, -1],
//   [1, 1, 1, 1, -1, 1, 1, 1, -1, 1, 0, 1, -1, 0, -1, 1, -1, -1, 0],
//   [0, 1, -1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, -1, 1, 1, -1, 1],
//   [0, 0, 0, 0, 0, 0, 1, 1, -1, -1, 0, 1, -1, 1, -1, 1, -1, 0, -1],
//   [0, 0, 0, 0, 0, 0, 1, 1, 1, -1, -1, 1, -1, -1, 1, -1, -1, -1, 0],
//   [0, 0, 0, 0, 0, 1, 0, 1, -1, 0, -1, -1, 1, 1, 1, 1, -1, -1, -1],
//   [0, 0, 0, 0, 0, 1, 1, -1, 0, -1, -1, 1, 1, 1, 1, 0, 1, -1, 1],
//   [0, 0, 0, 0, 0, -1, -1, -1, -1, 0, -1, -1, 1, 1, 0, 1, 0, 0, 0]
// ]
const signMap = new Array(19).fill(undefined).map(_ => new Array(19).fill(0));
const vertexSize = 24;
const width = 19; 
const height = 19;
const xs = new Array(19).fill(0).map((_, index) => index); 
const ys = new Array(19).fill(0).map((_, index) => index);
const hoshis = [];

const socket = io('ws://localhost:3000/games')
@inject("homeStore")
@observer
class Room extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: new goBoard(width, signMap)
    };
  }

  componentDidMount() {
    socket.emit('start', localStorage.getItem('access_token'))
    socket.on('move', (data) => {
      console.log(data);  
      this.state.board.board = data.board;
      this.state.board._koInfo = data._koInfo;    
      this.setState({
        board: this.state.board
      })
    })
  }

  handleMove = ([x, y], color) => {;
    let newBoard = this.state.board.putChess([x, y], color);
    this.setState({
      board: newBoard
    })
    socket.emit('move', newBoard);
  }


  render() {
    return (
      <Goboard
        vertexSize={vertexSize}
        width={width}
        height={height}
        xs={xs}
        ys={ys}
        hoshis={hoshis}
        player={1}
        signMap={this.state.board}
        onMove={this.handleMove}
      />
    )
  }
}
export default Room;