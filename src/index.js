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
