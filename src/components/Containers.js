import styled from 'styled-components';
import { focusModeOutTransitions } from './SharedStyles';

const sideColumnWidth = '170px';

export const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(${sideColumnWidth}, auto) minmax(auto, 700px) minmax(${sideColumnWidth}, auto);
  grid-template-rows: auto auto auto;
  column-gap: ${props => props.theme.spacing.horizontal};
  width: 100%;
  min-height: 100%;
  min-width: 400px;
  margin: 0;
  padding: ${props => props.theme.spacing.vertical};

  & > * {
    grid-column-start: 2;
    margin-bottom: ${props => props.theme.spacing.vertical};
  }

  @media screen and (max-width: ${props => props.theme.breakpoint}) {
    grid-template-columns: 70% auto;

    & > * {
      grid-column-start: 1;
    }
  }
`;

export const EditorContainer = styled.div`
  margin: 0;
  grid-column-start: 2;

  & > * {
    margin-bottom: ${props => props.theme.spacing.vertical};
  }

  @media screen and (max-width: ${props => props.theme.breakpoint}) {
    grid-column-start: 1;
  }
`;

export const ToolbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-column-start: 3;
  grid-row-start: 3;

  transition: opacity ${props => props.theme.transitionTiming.focusMode};
  opacity: ${props => props.focusModeEnabled ? 0 : 1};
  ${focusModeOutTransitions};

  @media screen and (max-width: ${props => props.theme.breakpoint}) {
    grid-column-start: 2;
  }

  button {
    margin-bottom: ${props => props.theme.spacing.vertical};
  }
`;
