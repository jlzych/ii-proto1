import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Toolbar } from './Toolbar';
import { EditorCE } from './EditorCE';

class InvisibleInk extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showText: false,
      text: '',
      previousText: '',
    };

    this.handleUpdateText = this.handleUpdateText.bind(this);
    this.handleUndo = this.handleUndo.bind(this);
  }

  handleClearText() {
    let previousText = this.state.text;
    this.setState({
      text: '',
      previousText: previousText,
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
      previousText: '',
    });
  }

  handleUndo() {
    this.setState({
      text: this.state.previousText,
      previousText: '',
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
          handleUndo={this.handleUndo}
          undoDisabled = {this.state.previousText ? false : true}
        />
        <h2>What are you writing about today ?</h2>
        <input className = "writing-prompt" />
        {/* <Editor
          handleUpdateText={this.handleUpdateText}
          showText={this.state.showText}
          text={this.state.text} /> */}

        <EditorCE
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
