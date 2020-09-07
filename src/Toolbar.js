import React from 'react';

export class Toolbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleShowText = this.props.handleToggleShowText.bind(this);
  }

  render() {
    return (
      <div className="toolbar">
        <label>
          <input
            type="checkbox"
            checked={this.props.showText}
            onChange={this.handleToggleShowText} />
          Show text
        </label>
        <button
          onClick={this.props.handleClearText}
        >
          Clear
        </button>
        <button
          onClick={this.props.handleUndo}
          disabled={this.props.undoDisabled}
        >
          Undo Clear
        </button>
      </div>
    );
  }
}
