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

class EditorCE extends React.Component {
  constructor(props) {
    super(props);

    this.editorDiv = React.createRef();

    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleClick() {
    if (!this.props.showText) {
      const range = document.createRange();
      const sel = window.getSelection();
      let lastChild = this.editorDiv.current.childNodes[
        this.editorDiv.current.childNodes.length - 1];

      // If the last child has more children, select that child
      if (lastChild && lastChild.childNodes && lastChild.childNodes.length > 0) {
        lastChild = lastChild.childNodes[lastChild.childNodes.length - 1];
      }

      if (lastChild && lastChild.textContent) {
        range.setStart(lastChild, lastChild.textContent.length);
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
      }
    }
  }

  handleKeyDown(event) {
    const preventedKeystrokes = [
      8, // Backspace
      37, // Left arrow
      38, // Top arrow
      39, // Right arrow
      40 // Bottom arrow
    ];

    if (preventedKeystrokes.includes(event.keyCode)) {
      event.preventDefault();
    }
  }

  render() {
    const classes = "text" +
      (this.props.showText ? "" : " writing-mode");

    return (
      <div>
        <h2>EditorCE</h2>
        <div
          className={classes}
          contentEditable={this.props.showText ? false : true}
          onClick={this.handleClick}
          onKeyDown={this.handleKeyDown}
          ref={this.editorDiv}
          spellCheck={false}>
          {/* {this.props.text} */}
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
        {/* <Editor
          handleUpdateText={this.handleUpdateText}
          showText={this.state.showText}
          text={this.state.text} /> */}

        <EditorCE
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
