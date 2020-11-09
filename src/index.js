import React from 'react';
import ReactDOM from 'react-dom';
import { Toolbar } from './Toolbar';
import { EditorCE } from './EditorCE';
import copy from 'copy-to-clipboard';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TurndownService from 'turndown';

import { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from './Theme';
import { LayoutContainer, EditorContainer } from './components/Containers';
import { Title } from './components/Titles';
import { Input } from './components/Inputs';
import waves1 from './components/images/waves1.svg';
import waves2 from './components/images/waves2.svg';

const GlobalStyle = createGlobalStyle`
  html, body {
    background-color: ${props => props.theme.colors.background};
    font-size: ${props => props.theme.typography.baseSize};
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  #root {
    background-color: ${props => props.theme.colors.background};
    background-image:
      url(${waves2}),
      url(${waves1}),
      ${props => props.theme.colors.backgroundGradient};
    background-position: left 175vh, left 85vh, top left;
    background-repeat: no-repeat;
    background-size: cover, cover, cover;
    margin: 0;
    min-height: 100%;
    width: 100%;
  }
`;

class InvisibleInk extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showText: false,
      text: '',
      previousText: '',
      focusModeEnabled: false,
    };

    this.handleCopy = this.handleCopy.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleUpdateText = this.handleUpdateText.bind(this);
    this.handleUndo = this.handleUndo.bind(this);
  }

  handleCopy() {
    let turndownService = new TurndownService();
    let markdown = turndownService.turndown(this.state.text);

    try {
      copy(markdown, {
        format: 'text/plain'
      });
      toast("Copied text. Now get to editing!");
    } catch (error) {
      console.warning("Error copying text");
      console.log(error);
    }
  }

  handleClearText() {
    let previousText = this.state.text;
    this.setState({
      text: '',
      previousText: previousText,
    });
  }

  handleMouseMove() {
    if (!this.state.showText) {
      this.setState({
        focusModeEnabled: false,
      });
    }
  }

  handleToggleShowText() {
    const showText = this.state.showText;
    this.setState({
      showText: !showText,
      focusModeEnabled: false,
    });
  }

  handleUpdateText(text) {
    this.setState({
      text: text,
      previousText: '',
      focusModeEnabled: true,
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
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <LayoutContainer onMouseMove={() => this.handleMouseMove()}>
          <Title focusModeEnabled={this.state.focusModeEnabled}>Invisible Ink</Title>
          <Input
            placeholder="What are you writing about today?"
            focusModeEnabled={this.state.focusModeEnabled} />

          <EditorContainer>
            <EditorCE
              handleUpdateText={this.handleUpdateText}
              focusModeEnabled={this.state.focusModeEnabled}
              showText={this.state.showText}
              text={this.state.text} />
          </EditorContainer>
          <Toolbar
            focusModeEnabled={this.state.focusModeEnabled}
            showText={this.state.showText}
            handleClearText={() => this.handleClearText()}
            handleCopy={() => this.handleCopy()}
            handleToggleShowText={() => this.handleToggleShowText()}
            handleUndo={this.handleUndo}
            textEmpty={this.state.text === ''}
            undoDisabled = {this.state.previousText ? false : true}
            />
        </LayoutContainer>
        <ToastContainer
          autoClose={5000}
          position="bottom-left"
          hideProgressBar={true}
          transition={Slide}
        ></ToastContainer>
      </ThemeProvider>
    );
  }
}

ReactDOM.render(
  <InvisibleInk />,
  document.getElementById('root')
);
