import styled from 'styled-components'
import { FaEye } from 'react-icons/fa'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;

  display: flex;

  > .left-side {
    width: 60%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #222533;
  }

  > .left-side img {
    margin-bottom: 2rem;
  }

  > .left-side h2 {
    color: var(--light-gray);
    font-weight: 500;
    font-size: 1.8rem;
  }

  > .left-side h2 span {
    color: var(--red);
    font-size: 1.2rem;
    font-weight: 600;
  }

  > .right-side {
    background-color: var(--background2);
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  > .right-side .box-workspace {
    width: 70%;
  }

  > .right-side .box-workspace h1 {
    font-size: 2rem;
    text-align: center;
    color: var(--red);
    margin-bottom: 2rem;
  }

  > .right-side .box-workspace h2 {
    font-size: 1.4rem;
    color: var(--light-gray);
    text-align: center;
    margin-bottom: 2rem;
  }

  > .right-side .box-workspace ul {
    list-style: none;
    width: 100%;
    height: 300px;
    background-color: var(--current);
    padding: 1.4rem;
    overflow-y: auto;
    border-radius: 3px;

    ::-webkit-scrollbar {
      width: 6px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: var(--red);
      border-radius: 4px;
    }
    ::-webkit-scrolbbar-track {
      background-color: var(--background);
    }
  }

  > .right-side .box-workspace ul li {
    width: 100%;
    background-color: var(--comment);
    padding: 1rem 1.4rem;
    margin-bottom: 1.2rem;
    border-radius: 2px;
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--foreground);
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: filter .2s;

    &:hover {
      filter: brightness(0.8);
    }
  }

  > .right-side .box-workspace .content-buttons {
    margin-top: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  > .right-side .box-workspace .content-buttons button {
    width: 48%;
    background-color: var(--red);
    text-align: center;
    color: var(--foreground);
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 700;
    padding: 1.2rem;
    border-radius: 2px;
    cursor: pointer;
    transition: filter .2s;

    &.color {
      background-color: var(--comment);
    }

    &:hover {
      filter: brightness(0.8);
    }
  }
`

export const EyeIcon = styled(FaEye)`
  width: 1.6rem;
  height: 1.6rem;
  color: var(--foreground);
`