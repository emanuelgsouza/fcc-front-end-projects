import React, { Component } from 'react';
import { Link } from "react-router-dom";
import palindromeCheck from './utils/palindrome';
import styled from 'styled-components';

import { Title } from '../../styles';

const Container = styled.div`
  max-width: 600px;
  margin: 5rem auto 0 auto;
  padding: 2rem 1.5rem;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.24);
  border: 2px solid #3A3335;
  background-color: #3A3335;
  color: white;

  hr {
    max-width: 250px;
    margin: 1rem auto;
  }

  label {
    display: block;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  input {
    font-size: 1.2rem;
    display: block;
    width: 100%;
    margin-bottom: 0.5rem;
    padding: 0.3rem 0.5rem 0.3rem 0;
    background-color: #3A3335;
    border: none;
    border-bottom: 2px solid #FDF0D5;
    color: #FDF0D5;
    margin-bottom: 10px;
  }

  button {
    display: block;
    font-size: 1.2rem;
    padding: 0.3rem 0.8rem;
    border: none;
    border-radius: 2px;
    background-color: #3A3335;
    color: #FDF0D5;
    border: 1px solid #FDF0D5;

    &:hover,
    &:focus {
      color: #3A3335;
      background-color: #FDF0D5;
    }
  }
`;

const BackToHome = styled(Link)`
  text-align: center;
  margin: 0 auto;
  display: block;
  max-width: 200px;
  font-size: 1rem;
`;

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
      <Container>
        <Title> Palindrome Application </Title>

        <BackToHome to="/"> Back to home </BackToHome>

        <hr />

        <p> According to <a href="https://en.wikipedia.org/wiki/Palindrome"> Wikipedia </a>, a palindrome is a word, number, phrase, or other sequence of characters which reads the same backward as forward, such as <span className="is-italic">madam</span>, <span className="is-italic">racecar</span>, or the number 10801. </p>

        <p> Bellow, you can check if any word or sentence is a palindrome. </p>

        <hr />

        <div className="field">
          <label className="label" htmlFor="word">
            Type a word or a sentence
          </label>

          <input
            className="input"
            type="text"
            id="word"
            placeholder="Waiting for some word..."
            required
            name="word"
            value={this.state.word}
            onChange={this.handleInputChange}
          />
        </div>

        <button
          type="submit"
          onClick={this.handleClick}
          disabled={inputDisabled}
        > Check!
        </button>
      </Container>
    );
  }
}
