import React from 'react';
import ContentEditable from 'react-contenteditable';

export class EditorCE extends React.Component {
  constructor(props) {
    super(props);

    this.editorDiv = React.createRef();

    this.handleFocus = this.handleFocus.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleFocus() {
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
  }

  handleKeyDown(event) {
    const preventedKeystrokes = [
      8,
      37,
      38,
      39,
      40 // Bottom arrow
    ];

    if (preventedKeystrokes.includes(event.keyCode)) {
      event.preventDefault();
    }

  }

  handleOnChange(event) {
    this.props.handleUpdateText(event.target.value);
  }

  render() {
    const classes = "text" +
      (this.props.showText ? "" : " writing-mode");

    return (
      <div>
        <h2>Editor</h2>
        <ContentEditable
          className={classes}
          disabled={this.props.showText ? true : false}
          onFocus={this.handleFocus}
          onKeyDown={this.handleKeyDown}
          onChange={this.handleOnChange}
          html={this.props.text}
          innerRef={this.editorDiv}
          spellCheck={false} />
      </div>
    );
  }
}
