import styled from 'styled-components';
import { focusModeOutTransitions, bodyTextStyles } from './SharedStyles';

export const Title = styled.h1`
  ${bodyTextStyles};
  font-size: ${props => props.theme.typography.titleSize};
  font-weight: ${props => props.theme.typography.boldWeight};
  margin-top: 0;

  opacity: ${props => props.focusModeEnabled ? '0' : '1' };
  transition: opacity ${props => props.theme.transitionTiming.focusMode};

  ${focusModeOutTransitions};
`;
