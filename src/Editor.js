import React from 'react';

export default class Editor extends React.Component {
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

  handleClick() {
    if (!this.props.showText) {
      this.textInput.current.focus();
    }
  }

  render() {
    const classes = 'text ' +
      (this.props.showText ? '' : 'writing-mode '); // +


    // (this.props.textInputFocused ? 'currently-writing' : '');
    return ( <
      div className = "editor" >

      <
      textarea className = "text-input"
      onKeyDown = {
        this.handleKeyDown
      }
      onChange = {
        this.handleChange
      }
      value = {
        this.props.text
      }
      ref = {
        this.textInput
      } > < /textarea> <
      div onClick = {
        this.handleClick
      }
      className = {
        classes
      } >
      <
      span className = "text-wrapper" > {
        this.props.text
      } <
      /span> <
      /div> <
      /div>
    );
  }
}
