import React from 'react';
import { ToolbarContainer } from './components/Containers';
import { IconButton } from './components/Buttons';
import { ReactComponent as Lightbulb } from './LightBulb.svg';
import { ReactComponent as Copy } from './Copy.svg';
import { ReactComponent as Clear } from './Clear.svg';
import { ReactComponent as Undo } from './Undo.svg';

export class Toolbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleShowText = this.props.handleToggleShowText.bind(this);
  }

  render() {
    return (
      <ToolbarContainer focusModeEnabled={this.props.focusModeEnabled}>
        <IconButton
          onClick={this.handleToggleShowText}
          inverted={this.props.showText}>
          <Lightbulb />
          <span>
            { this.props.showText ? 'Writing Mode' : 'Show Text' }
          </span>
        </IconButton>
        <IconButton
          onClick={this.props.handleCopy}
          disabled={this.props.textEmpty}
        >
          <Copy />
          <span>Copy</span>
        </IconButton>
        <IconButton
          onClick={this.props.handleClearText}
          disabled={this.props.textEmpty}
        >
          <Clear />
          <span>Clear</span>
        </IconButton>
        <IconButton
          onClick={this.props.handleUndo}
          disabled={this.props.undoDisabled}
        >
          <Undo />
          <span>Undo Clear</span>
        </IconButton>
      </ToolbarContainer>
    );
  }
}
