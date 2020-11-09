import React from 'react';
import styled  from 'styled-components';
import ContentEditable from 'react-contenteditable';
import { baseInputStyles } from './components/Inputs';
import { bodyTextStyles, focusModeOutTransitions, placeholderTextStyles } from './components/SharedStyles';

const StyledContentEditable = styled(ContentEditable)`
  ${bodyTextStyles};
  min-height: max(400px, 70vh);
  padding: ${props => props.theme.spacing.inputPadding};
  position: relative; /* Needed for absolute positioning the placeholder text */
  z-index: 1;

  &:focus:not(:disabled) {
    outline: none;
  }

  &::selection,
  & *::selection {
    background-color:
      ${props => !props.showTextEnabled ?
        props.theme.colors.textHighlightBackground :
        'transparent'};
  }

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

    ${baseInputStyles};
    z-index: -1;
    opacity: ${props => props.focusModeEnabled ? '0' : '1' };
    transition: opacity ${props => props.theme.transitionTiming.focusMode};

    ${focusModeOutTransitions};
  }

  &:focus:not(:disabled)::after {
    border-color: ${props => props.theme.colors.inputBorderFocus};
  }
`;

const Placeholder = styled.p`
  ${placeholderTextStyles};
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: ${props => props.theme.spacing.inputPadding};
  pointer-events: none;
  z-index: 10;

  opacity: ${props => props.textEntered ? '0' : '1'};
  transition: opacity ${props => props.theme.transitionTiming.snappiest};
`;

const FrostedGlass = styled.div`
    position: absolute;
    top: 1px;
    left: 1px;
    width: calc(100% - 2px); /* 2px for both borders */
    height: calc(100% - 2px);

    background-color: hsl(0deg 0% 100% / 50%);
    backdrop-filter: blur(10px);
    border-radius: ${props => props.theme.borderRadii.standard};
    pointer-events: none;
    z-index: 10;

    transition: opacity ${props => props.theme.transitionTiming.snappy};
    opacity: ${props => props.showText || !props.textEntered ? 0 : 1};
`;

const NUM_BACKSPACES_ALLOWED = 3;

export class EditorCE extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numBackspacesPressed: 0,
    };

    this.editorDiv = React.createRef();

    this.handleFocus = this.handleFocus.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleFocus() {
    // There's an error in here because there can be child
    // nodes, so setting range in that case will fail,
    // so I need some sort of recursive function
    try {
      if (!this.props.showText) {
        const range = document.createRange();
        const sel = window.getSelection();
        let lastChild = this.editorDiv.current.childNodes[this.editorDiv.current.childNodes.length - 1];

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
    } catch (error) {
      console.warn("Error putting cursor at the end due to nested html.");
      console.log(error);
    }
  }

  handleKeyDown(event) {
    const BACKSPACE = 8;
    const preventedKeystrokes = [
      BACKSPACE,
      37,
      38,
      39,
      40 // Bottom arrow
    ];

    const numBackspacesPressed = this.state.numBackspacesPressed;

    /**
     * Check if it's a prevented keystroke.
     * If so, check if it's backspace, and make an exception
     * for backspacing 3 times. Otherwise, prevent the keystroke.
     * Allowed keystrokes should decrement the backspace counter.
     */
    if (preventedKeystrokes.includes(event.keyCode)) {
      if (event.keyCode === BACKSPACE &&
        numBackspacesPressed < NUM_BACKSPACES_ALLOWED) {
        this.setState({
          numBackspacesPressed: numBackspacesPressed + 1,
        });
        return;
      }

      event.preventDefault();
    } else {
      this.setState({
        numBackspacesPressed: Math.max(numBackspacesPressed - 1, 0),
      });
    }
  }

  handleOnChange(event) {
    this.props.handleUpdateText(event.target.value);
  }

  render() {
    const relative = {
      position: 'relative',
    };

    return (
      <div style={relative}>
        <StyledContentEditable
          disabled={this.props.showText ? true : false}
          focusModeEnabled={this.props.focusModeEnabled}
          onFocus={this.handleFocus}
          onKeyDown={this.handleKeyDown}
          onChange={this.handleOnChange}
          html={this.props.text}
          innerRef={this.editorDiv}
          spellCheck={false} />
        <FrostedGlass
          showText={this.props.showText}
          textEntered={this.props.text !== ''}></FrostedGlass>
        <Placeholder textEntered={this.props.text !== ''}>
          As you type, your writing will disappear so you can get into a stream-of-consciousness flow.
        </Placeholder>
      </div>
    );
  }
}
