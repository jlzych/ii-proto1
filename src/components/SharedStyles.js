import { css } from 'styled-components';

export const focusModeOutTransitions = css`
  ${props => (!props.focusModeEnabled ? css`
    transition-duration: 150ms;
    transition-timing: 'ease-out';
  ` : '')};
`;

export const bodyTextStyles = css`
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.typography.baseFontFamily};
  font-size: ${props => props.theme.typography.baseSize};
  font-weight: ${props => props.theme.typography.baseWeight};
  line-height: ${props => props.theme.typography.baseLineHeight};
`;

export const placeholderTextStyles = css`
  color: ${props => props.theme.colors.textPlaceholder};
  font-family: ${props => props.theme.typography.baseFontFamily};
  font-size: ${props => props.theme.typography.baseSize};
  font-style: italic;
  line-height: ${props => props.theme.typography.baseLineHeight};
`;
