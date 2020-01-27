import React, { Component } from 'react';

import palindromeCheck from './utils/palindrome';

import * as C from '../../components';
import * as S from '../../styles';

export default class PalindromeApplication extends Component {
  constructor (props) {
    super(props);

    this.state = {
      word: ''
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleClick () {
    if (!this.state.word) {
      return
    }

    if (palindromeCheck(this.state.word)) {
      alert(`It's a palindrome!`)
    } else {
      alert(`It's not a palindrome!`)
    }
  }

  handleInputChange (event) {
    const value = event.target.value

    this.setState({
      word: value
    })
  }

  render() {
    const inputDisabled = !this.state.word
    return (
      <C.Card
        title="Palindrome Application"
      >
        <p> According to <a href="https://en.wikipedia.org/wiki/Palindrome"> Wikipedia </a>, a palindrome is a word, number, phrase, or other sequence of characters which reads the same backward as forward, such as <span className="is-italic">madam</span>, <span className="is-italic">racecar</span>, or the number 10801. </p>

        <p> Bellow, you can check if any word or sentence is a palindrome. </p>

        <hr />

        <C.Input
          type="text"
          id="word"
          placeholder="Waiting for some word..."
          label="Type a word or a sentence"
          required
          name="word"
          value={this.state.word}
          onChange={this.handleInputChange}
        />

        <S.Button
          type="submit"
          onClick={this.handleClick}
          disabled={inputDisabled}
        > Check!
        </S.Button>
      </C.Card>
    );
  }
}
