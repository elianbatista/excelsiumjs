import styled from 'styled-components'

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

  > .right-side .content-logo {
    text-align: center;
    margin-bottom: 3rem;
  }

  > .right-side .content-logo img {
    width: 80%;
  }

  > .right-side .box-login {
    width: 70%;
  }

  > .right-side .box-login form {
    width: 100%;
  }

  > .right-side .box-login form .field-input {
    margin-bottom: 2rem;
  }

  > .right-side .box-login form .field-input label {
    font-size: 0.9rem;
    text-transform: uppercase;
    font-weight: 600;
    color: var(--light-gray);
  }

  > .right-side .box-login form .field-input input {
    width: 100%;
    background-color: rgba(255,255,255,0.1);
    font-size: 1.2rem;
    padding: 1rem;
    margin-top: 0.3rem;
    color: var(--light-gray);
    border-radius: 2px;
  }

  > .right-side .box-login form .field-button {
    margin-top: 2.4rem;
  }

  > .right-side .box-login form .field-button button {
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

  > .right-side .box-login p {
    font-size: 1rem;
    color: var(--light-gray);
    margin-top: 2rem;
    text-align: center;
  }

  > .right-side .box-login p a {
    color: var(--cyan);
    text-decoration: none;
  }
`