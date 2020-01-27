import React, { Component } from 'react';

import convertToRomain from './lib'

import * as C from '../../components';
import * as S from '../../styles';

export default class RomanConverterApplication extends Component {
  constructor (props) {
    super(props);

    this.state = {
      number: '',
      message: ''
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleClick () {
    const roman = convertToRomain(this.state.number)

    this.setState({
      message: `The number ${this.state.number} in Roman numeral is ${roman}`
    })
  }

  handleInputChange (event) {
    const value = event.target.value

    this.setState({
      number: value
    })
  }

  render() {
    const inputDisabled = !this.state.number
    const showNotification = this.state.message

    return (
      <C.Card title="Roman Numeral Converter Application">
        <C.Input
          type="number"
          id="number"
          placeholder="Waiting for numeral..."
          label="Type a valid Roman numeral"
          required
          name="number"
          min={1}
          max={4999}
          value={this.state.number}
          onChange={this.handleInputChange}
        />

        <S.Button
          type="submit"
          onClick={this.handleClick}
          disabled={inputDisabled}
        > Check!
        </S.Button>

        

        { showNotification &&
          (
            <>
              <br />
              <br />
              <C.Notification message={this.state.message} type="secondary"/>
            </>
          )
        }
      </C.Card>
    );
  }
}
