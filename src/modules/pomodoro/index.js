import React, { Component } from 'react';
import styled from 'styled-components';

import * as C from '../../components';
import * as S from '../../styles';

const ListContainerButton = styled.div`
  display: flex;

  button:first-child {
    margin-right: 10px;
  }
`;

const ListButtons = props => {
  const showStop = props.isStarted && !props.isStoped
  const showStart = !props.isStarted && !props.isStoped
  const showContinue = props.isStoped && !props.isStarted

  return (
    <ListContainerButton>
      { showStop && <S.Button onClick={props.stop}> Stop </S.Button> }

      { showStop && <S.Button onClick={props.reset}> Reset </S.Button> }

      { showStart && <S.Button onClick={props.start}> Begin </S.Button> }

      { showContinue && <S.Button onClick={props.start}> Continue </S.Button> }
    </ListContainerButton>
  )
}

export default class PalindromeApplication extends Component {
  constructor (props) {
    super(props);

    this.state = {
      seconds: 0,
      minutes: 25,
      intervalData: null,
      isStarted: false,
      isStoped: false
    };

    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
    this.start = this.start.bind(this);
    this.getClock = this.getClock.bind(this);
    this.getMinutes = this.getMinutes.bind(this);
    this.getSeconds = this.getSeconds.bind(this);
    this.pomodoroClock = this.pomodoroClock.bind(this);
    this.getMinutesSeconds = this.getMinutesSeconds.bind(this);
  }

  start () {
    this.setState({
      intervalData: setInterval(this.pomodoroClock, 1000),
      isStarted: true,
      isStoped: false
    })
  }

  stop () {
    clearInterval(this.state.intervalData)

    this.setState({
      isStarted: false,
      isStoped: true
    })
  }

  reset () {
    clearInterval(this.state.intervalData)

    this.setState({
      minutes: 25,
      seconds: 0,
      isStarted: false,
      isStoped: false
    })
  }

  getMinutes () {
    const minutes = this.state.minutes
    return minutes < 10 ? `0${minutes}` : minutes
  }

  getSeconds () {
    const seconds = this.state.seconds
    return seconds < 10 ? `0${seconds}` : seconds
  }

  getClock () {
    return `${this.getMinutes()}:${this.getSeconds()}`
  }

  getMinutesSeconds () {
    const minutes = this.state.minutes
    const seconds = this.state.seconds

    if (seconds === 0) {
      return {
        minutes: minutes - 1,
        seconds: 59
      }
    }

    return {
      seconds: seconds - 1,
      minutes: minutes
    }
  }

  pomodoroClock () {
    const { minutes, seconds } = this.getMinutesSeconds()
    this.setState({
      minutes,
      seconds
    })
  }

  render() {
    return (
      <C.Card title="Pomodoro">
        <p> {this.getClock()} </p>

        <ListButtons
          stop={this.stop}
          reset={this.reset}
          start={this.start}
          isStarted={this.state.isStarted}
          isStoped={this.state.isStoped}
        />
      </C.Card>
    );
  }
}
