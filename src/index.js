import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Toolbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleShowText = this.props.handleToggleShowText.bind(this);
  }

  render() {
    return(
      <div className="toolbar">
        <label>
          <input
            type="checkbox"
            checked={this.props.showText}
            onChange={this.handleToggleShowText}
          />
          Show text
        </label>
        <button
          onClick = {this.props.handleClearText}
        >
          Clear
        </button>
      </div>
    );
  }
}

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.props.handleUpdateText(event.target.value);
  }

  handleKeyDown(event) {
    const preventedKeystrokes = [
      8,  // Backspace
      37, // Left arrow
      38, // Top arrow
      39, // Right arrow
      40  // Bottom arrow
    ];

    if (preventedKeystrokes.includes(event.keyCode)) {
      event.preventDefault();
    }
  }

  handleClick() {
    if (!this.props.showText) {
      this.textInput.current.focus();
    }
  }

  render() {
    const classes = 'text ' +
      (this.props.showText ? '' : 'writing-mode '); // +
      // (this.props.textInputFocused ? 'currently-writing' : '');

    return (
      <div className="editor">
        <h2>What are you writing about today?</h2>
        <input className="writing-prompt" />
        <textarea
          className="text-input"
          onKeyDown={this.handleKeyDown}
          onChange={this.handleChange}
          value={this.props.text}
          ref={this.textInput}></textarea>
        <div
          onClick={this.handleClick}
          className={classes}
        >
          <span className="text-wrapper">
            {this.props.text}
          </span>
        </div>
      </div>
    );
  }
}

class InvisibleInk extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showText: false,
      text: '',
    };

    this.handleUpdateText = this.handleUpdateText.bind(this);
  }

  handleClearText() {
    this.setState({
      text: '',
    });
  }

  handleToggleShowText() {
    const showText = this.state.showText;
    this.setState({
      showText: !showText,
    });
  }

  handleUpdateText(text) {
    this.setState({
      text: text,
    });
  }

  render() {
    return (
      <div>
        <h1>🖋 Invisible Ink</h1>
        <Toolbar
          showText={this.state.showText}
          handleClearText={() => this.handleClearText()}
          handleToggleShowText={() => this.handleToggleShowText()}
        />
        <Editor
          handleUpdateText={this.handleUpdateText}
          showText={this.state.showText}
          text={this.state.text} />
      </div>
    );
  }
}

ReactDOM.render(
  <InvisibleInk />,
  document.getElementById('root')
);
