import styled, { css } from 'styled-components';
import { focusModeOutTransitions, bodyTextStyles } from './SharedStyles';

export const baseInputStyles = css`
  background: ${props => props.theme.colors.formControlBackground};
  border-radius: ${props => props.theme.borderRadii.standard};
  border: 1px solid transparent;
  box-shadow: ${props => props.theme.shadows.input};
  padding: ${props => props.theme.spacing.inputPadding};
  width: 100%;

  transition: border-color ${props => props.theme.transitionTiming.snappy},
    opacity ${props => props.theme.transitionTiming.focusMode};
  ${focusModeOutTransitions};

  &::placeholder {
    color: ${props => props.theme.colors.textPlaceholder};
    font-style: italic;
    transition: opacity 0.2s ease-in-out;
  }

  &:focus:not(:disabled) {
    border-color: ${props => props.theme.colors.inputBorderFocus};
    outline: none;
  }

  opacity: ${props => props.focusModeEnabled ? '0' : '1' };
`;

export const Input = styled.input`
  ${bodyTextStyles};
  ${baseInputStyles};
`;
