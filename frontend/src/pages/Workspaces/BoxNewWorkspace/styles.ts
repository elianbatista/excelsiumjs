import styled from 'styled-components'

import { FaTimes } from 'react-icons/fa'

export const Container = styled.div`
  position: absolute;
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  visibility: hidden;

  > .background {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--background);
    opacity: 0;
    visibility: hidden;
    cursor: pointer;
    transition: all .2s;
  }

  > .content-box {
    position: absolute;
    z-index: 3;
    top: 60%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);

    opacity: 0;
    visibility: hidden;

    width: 40%;
    background-color: var(--background2);

    padding: 3rem;
    padding-bottom: 5rem;
    transition: all .4s;
  }

  > .content-box button.close {
    position: absolute;
    top: 0;
    right: 0;
    transform: translateY(-24%) translateX(24%);

    background-color: var(--red);

    width: 2.6rem;
    height: 2.6rem;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    transition: filter .2s;

    &:hover {
      filter: brightness(0.8);
    }
  }

  > .content-box h2 {
    font-size: 2rem;
    text-align: center;
    color: var(--red);
    margin-bottom: 2rem;
  }

  > .content-box form .field-input label {
    font-size: 0.9rem;
    text-transform: uppercase;
    font-weight: 600;
    color: var(--light-gray);
  }
  
  > .content-box form .field-input input {
    width: 100%;
    background-color: rgba(255,255,255,0.1);
    font-size: 1.2rem;
    padding: 1rem;
    margin-top: 0.3rem;
    color: var(--light-gray);
    border-radius: 2px;
  }

  > .content-box form .field-button {
    margin-top: 2rem;
  }

  > .content-box form .field-button button {
    width: 100%;
    text-align: center;
    color: var(--foreground);
    background-color: var(--red);
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 700;
    padding: 1.2rem;
    border-radius: 2px;
    cursor: pointer;
    transition: filter .2s;

    &:hover {
      filter: brightness(0.8);
    }
  }

  &.active {
    visibility: visible;
  }

  &.active > .background {
    opacity: 0.6;
    visibility: visible;
  }

  &.active > .content-box {
    opacity: 1;
    visibility: visible;
    top: 50%;
  }
`

export const CloseIcon = styled(FaTimes)`
  width: 1.6rem;
  height: 1.6rem;
  color: var(--foreground);
`