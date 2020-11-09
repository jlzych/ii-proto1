import styled, { keyframes } from 'styled-components';

const popIn = keyframes`
  0% {
    transform: scale3d(0.5, 0.5, 0.5);
    opacity: 0.7; }
  20% {
    opacity: 1; }
  40% {
    animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
    transform: scale3d(1.08, 1.08, 1.08); }
  60% {
    animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
    transform: scale3d(1, 1, 1); }
  80% {
    animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
    transform: scale3d(1.03, 1.03, 1.03); }
  100% {
    animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transform: scale3d(1, 1, 1); } }
`;

export const IconButton = styled.button`
  border-radius: 500px; /* Making this a large radius ensures the pill shape */
  background-color:
    ${props => props.inverted ?
      props.theme.colors.buttonBackgroundInverted :
      props.theme.colors.buttonBackground};
  color:
    ${props => props.inverted ?
      props.theme.colors.buttonTextInverted :
      props.theme.colors.buttonText};
  font-family: ${props => props.theme.typography.controlsFontFamily};
  font-size: ${props => props.theme.typography.controlsFontSize};
  border: none;
  border-bottom: 1px solid transparent;
  box-shadow: ${props => props.theme.shadows.button};
  line-height: 1;
  width: fit-content;

  padding: 0.4em 1em 0.4em 0.4em;
  display: flex;
  align-items: center;

  clip-path: circle(1em at 1em); /* About half the font size + vertical padding */
  transition: background-color ${props => props.theme.transitionTiming.snappy},
    border-color ${props => props.theme.transitionTiming.snappy},
    clip-path ${props => props.theme.transitionTiming.snappy};

  svg {
    path {
      fill: ${props => props.inverted ?
        props.theme.colors.buttonTextInverted :
        props.theme.colors.buttonText};
    }
  }

  span {
    margin-left: 0.5em;
    opacity: 0;
    transition: opacity ${props => props.theme.transitionTiming.snappy};
  }

  &:disabled {
    opacity: 0.4;
  }

  &:hover:not(:disabled) {
    outline: 0;
    background-color:
      ${props => props.inverted ?
        props.theme.colors.buttonBackgroundInvertedHover :
        props.theme.colors.buttonBackgroundHover};

    svg {
      animation: ${popIn} 600ms;
      animation-iteration-count: 1;
    }
  }

  &:hover {
    border-color: ${props => props.theme.colors.buttonBorder};
    clip-path: circle(100%);

    span {
      opacity: 1;
    }
  }

  &:focus:not(:disabled) {
    outline: 0;
  }

  &:active:not(:disabled) {
    border-color: transparent;
    background-color:
      ${props => props.inverted ?
        props.theme.colors.buttonBackgroundInvertedActive :
        props.theme.colors.buttonBackgroundActive};
  }
`;
