import styled from 'styled-components'

import { FaGithub } from 'react-icons/fa'

import { Props } from '.'

export const Container = styled.div`
  width: 100%;
  background-color: var(--background);
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  height: 4rem;
  padding: 0 1.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 5;

  > div.content {
    display: flex;
    align-items: center;
  }

  > div.content-logo {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  > div.content-logo img {
    width: 12rem;
  }
`

export const UsuariosList = styled.div`
  display: flex;
  align-items: center;
  padding-right: 0.2rem;
  border-right: 1px solid rgba(255,255,255,0.4);
`

export const Usuario = styled.div<Props>`
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.userImagem});
  margin-right: 1rem;
`

export const GitHub = styled(FaGithub)`
  width: 2rem;
  height: 2rem;
  margin-left: 1.2rem;
  color: rgba(255,255,255,0.4);
  cursor: pointer;
  transition: color .2s;

  &:hover {
    color: rgba(255,255,255,0.6);
  }
`


