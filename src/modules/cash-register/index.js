import React, { Component } from 'react';

import {
  checkCashRegister
} from './lib';

import * as C from '../../components';
import * as S from '../../styles';

import * as IC from './components';

export default class CashRegisterApplication extends Component {
  constructor (props) {
    super(props);

    this.state = {
      price: 0,
      cash: 0,
      actualCashRegisterState: [
        ["PENNY", 1.01],
        ["NICKEL", 2.05],
        ["DIME", 3.1],
        ["QUARTER", 4.25],
        ["ONE", 90],
        ["FIVE", 55],
        ["TEN", 20],
        ["TWENTY", 60],
        ["ONE HUNDRED", 100]
      ],
      result: {}
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleClick () {
    const result = checkCashRegister(
      this.state.price,
      this.state.cash,
      this.state.actualCashRegisterState
    )
    
    this.setState({ result })
  }

  handleInputChange (event, prop) {
    const value = event.target.value

    this.setState({
      result: {},
      [prop]: value
    })
  }

  render() {
    const result = this.state.result
    const showNotification = Object.keys(result).length > 0

    return (
      <C.Card title="Cash Register">
        <C.Input
          type="number"
          id="price"
          placeholder="Waiting for purchase price..."
          label="Purchase price"
          required
          name="price"
          min={1}
          value={this.state.price}
          onChange={event => this.handleInputChange(event, 'price')}
        />

        <C.Input
          type="number"
          id="cash"
          placeholder="Waiting for cash..."
          label="Cash to pay"
          required
          name="cash"
          min={1}
          value={this.state.cash}
          onChange={event => this.handleInputChange(event, 'cash')}
        />

        <S.Button onClick={this.handleClick}>
          Check!
        </S.Button>

        {
          showNotification &&
          (
            <>
              <br />
              <br />
              <IC.ShowResult result={result} />
            </>
          )
        }
      </C.Card>
    );
  }
}
