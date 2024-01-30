import React from 'react';
// import './TypingEffect.css'; // Import the CSS file for the typing effect

class TypingEffect extends React.Component {
  state = {
    codeSnippet: [
      "// JavaScript code snippet",
      "function greet() {",
      "  console.log('Hello, world!');",
      "}"
    ]
  };

  render() {
    return (
      <div className="typing-effect">
        {this.state.codeSnippet.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    );
  }
}

export default TypingEffect;