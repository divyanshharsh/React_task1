import React, { useState } from 'react';
import './Wordcounter.css';

function WordCounter() {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const countWords = () => {
    const words = text.trim().split(/\s+/);
    return words.length;
  };

  return (
    <div className="word-counter">
      <h1>Responsive Paragraph Word Counter</h1>
      <div className="input-container">
        <textarea
          placeholder="Enter your paragraph here..."
          onChange={handleTextChange}
          value={text}
        ></textarea>
        <p className="word-count">
          Word Count: <span>{countWords()}</span>
        </p>
      </div>
    </div>
  );
}

export default WordCounter;
