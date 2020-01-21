import React, { Component } from 'react';
import { Link } from "react-router-dom";
import palindromeCheck from './utils/palindrome';

export default class PalindromeApplication extends Component {
  constructor (props) {
    super(props);

    this.state = {
      word: null
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleClick () {
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
    return (
      <div className="palindrome-application">
        <h1> Palindrome Application </h1>

        <Link to="/"> Back to home </Link>

        <p> According to <a href="https://en.wikipedia.org/wiki/Palindrome"> Wikipedia </a>, a palindrome is a word, number, phrase, or other sequence of characters which reads the same backward as forward, such as <span className="is-italic">madam</span>, <span className="is-italic">racecar</span>, or the number 10801. </p>

        <p> Bellow, you can check if any word or sentence is a palindrome. </p>

        <label className="label" for="word">
          Type a word or a sentence
        </label>

        <input
          className="input"
          type="text"
          id="word"
          placeholder="Type a word or a sentence"
          autofocus
          required
          name="word"
          value={this.state.word}
          onChange={this.handleInputChange}
        />

        <button
          type="submit"
          onClick={this.handleClick}
        > Check!
        </button>
      </div>
    )
  }
}
