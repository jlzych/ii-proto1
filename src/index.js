import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Toolbar } from './Toolbar';
import { EditorCE } from './EditorCE';
import copy from 'copy-to-clipboard';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class InvisibleInk extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showText: false,
      text: '',
      previousText: '',
    };

    this.handleCopy = this.handleCopy.bind(this);
    this.handleUpdateText = this.handleUpdateText.bind(this);
    this.handleUndo = this.handleUndo.bind(this);
  }

  handleCopy() {
    let text = this.state.text;
    // Regex's taken from here, which has more
    // tag types if necessary
    // https://stackoverflow.com/questions/15180173/convert-html-to-plain-text-in-js-without-browser-environment/15180206

    // Replace div, p, and br tags with newlines
    text = text.replace(/<\/div>/ig, '\n');
    text = text.replace(/<br\s*[\/]?>/gi, '\n');
    text = text.replace(/<\/p>/ig, '\n');
    // Remove all other tags
    text = text.replace(/(<([^>]+)>)/gi, "");

    if (copy(text)) {
      toast("Copied text. Now get to editing!");
    } else {
      toast("Could not copy text :(");
    }
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
          handleCopy={() => this.handleCopy()}
          handleToggleShowText={() => this.handleToggleShowText()}
          handleUndo={this.handleUndo}
          textEmpty={this.state.text === ''}
          undoDisabled = {this.state.previousText ? false : true}
        />
        <h2>What are you writing about today?</h2>
        <input className="writing-prompt" />
        {/* <Editor
          handleUpdateText={this.handleUpdateText}
          showText={this.state.showText}
          text={this.state.text} /> */}

        <EditorCE
          handleUpdateText={this.handleUpdateText}
          showText={this.state.showText}
          text={this.state.text} />

        <ToastContainer
          autoClose={5000}
          position="bottom-left"
          hideProgressBar={true}
          transition={Slide}
        ></ToastContainer>
      </div>
    );
  }
}

ReactDOM.render(
  <InvisibleInk />,
  document.getElementById('root')
);
