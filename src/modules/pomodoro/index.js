import React, { Component } from 'react';
import styled from 'styled-components';

import * as C from '../../components';
import * as S from '../../styles';

const ListContainerButton = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;

  button:first-child {
    margin-right: 10px;
  }
`;

const ListButtons = props => {
  const showStop = props.isStarted && !props.isStoped && !props.isFinished
  const showStart = !props.isStarted && !props.isStoped && !props.isFinished
  const showContinue = props.isStoped && !props.isStarted && !props.isFinished
  const isFinished = props.isFinished

  return (
    <ListContainerButton>
      { showStop && <S.Button onClick={props.stop}> Stop </S.Button> }

      { showStop && <S.Button onClick={props.reset}> Reset </S.Button> }

      { showStart && <S.Button onClick={props.start}> Begin </S.Button> }

      { showContinue && <S.Button onClick={props.start}> Continue </S.Button> }

      { isFinished && <S.Button onClick={props.restart}> Restart </S.Button> }
    </ListContainerButton>
  )
}

const Timer = styled.div`
  p {
    font-size: 48px;
    text-align: center;
  }
`;

export default class PalindromeApplication extends Component {
  constructor (props) {
    super(props);

    this.state = {
      seconds: 0,
      minutes: 25,
      intervalData: null,
      isStarted: false,
      isStoped: false,
      isFinished: false
    };

    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
    this.start = this.start.bind(this);
    this.restart = this.restart.bind(this);
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

  restart () {
    this.setState({
      seconds: 0,
      minutes: 25,
      intervalData: null,
      isStarted: false,
      isStoped: false,
      isFinished: false
    }, this.start)
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

    if (minutes === 0 && seconds === 0) {
      return {
        minutes: 0,
        seconds: 0
      }
    }

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
    if (minutes === 0 && seconds === 0) {
      this.setState({
        minutes,
        seconds,
        isFinished: true
      })

      clearInterval(this.state.intervalData)

      return
    }

    this.setState({
      minutes,
      seconds
    })
  }

  render() {
    return (
      <C.Card title="Pomodoro">
        <Timer>
          <p> {this.getClock()} </p>
        </Timer>

        <ListButtons
          stop={this.stop}
          reset={this.reset}
          start={this.start}
          restart={this.restart}
          isStarted={this.state.isStarted}
          isStoped={this.state.isStoped}
          isFinished={this.state.isFinished}
        />
      </C.Card>
    );
  }
}
