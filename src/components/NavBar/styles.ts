import styled from 'styled-components'
import { FiChevronDown } from 'react-icons/fi'

export const Container = styled.div`
  width: 100%;
  background-color: var(--background2);
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  height: 4rem;
  display: flex;
  align-items: center;
  z-index: 5;
`

export const InfoBar = styled.div`
  width: 22%;
  font-weight: 600;
  color: var(--foreground);
  font-size: 1.4rem;
  padding: 0rem 1.6rem;
  z-index: 3;
  border-right: 2px solid var(--red);
`

export const RequisicaoHeader = styled.div`
  width: 56%;
  padding: 0 1.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div.requisicao__info {
    width: 100%;
    display: flex;
    align-items: center;
  }
`

export const RequisicaoType = styled.div`
  text-transform: uppercase;
  color: var(--light-gray);
  margin-right: 1rem;
  display: flex;
  padding: 0.6rem 0.6rem 0.6rem 0.8rem;
  cursor: pointer;
  transition: background-color .2s;

  > span {
    margin-right: 0.2rem;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &.post {
    color: var(--cyan);
  }

  &.get {
    color: var(--purple);
  }

  &.del {
    color: var(--red);
  }

  &.put {
    color: var(--pink);
  }
`

export const ArrowIcon = styled(FiChevronDown)`
  width: 18px;
  height: 18px;
  color: var(--light-gray);

  &.post {
    color: var(--cyan);
  }

  &.get {
    color: var(--purple);
  }

  &.del {
    color: var(--red);
  }

  &.put {
    color: var(--pink);
  }
`

export const RequisicaoUrl = styled.input`
  color: var(--light-gray);
  background-color: transparent;
  font-size: 1.1rem;
  width: 100%;
`

export const RequisicaoSend = styled.button `
  background-color: transparent;
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  color: var(--light-gray);
  cursor: pointer;
  transition: background-color .2s;

  &:hover {
    background-color: var(--red);
  }
`

