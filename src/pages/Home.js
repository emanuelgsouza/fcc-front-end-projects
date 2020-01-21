import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page">
      <h1> Home </h1>

      <nav>
        <ul>
          <li>
            <Link to="/palindrome">Palindrome</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;

