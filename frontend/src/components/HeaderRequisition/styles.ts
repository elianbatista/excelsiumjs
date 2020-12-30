import styled from 'styled-components'
import { FiChevronDown } from 'react-icons/fi'

export const Container = styled.div`
  position: relative;
  height: 3.9rem;
  width: 100%;
  //background-color: var(--selection);
  background-color: rgba(255,255,255,0.06);
  padding: 0 1.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 2px solid var(--background);

  > div.requisicao__info {
    width: 100%;
    display: flex;
    align-items: center;
  }
`

export const RequisicaoType = styled.div`
  text-transform: uppercase;
  color: var(--red);
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.01rem;
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
`

export const ArrowIcon = styled(FiChevronDown)`
  width: 18px;
  height: 18px;
  color: var(--red);
`

export const RequisicaoUrl = styled.input`
  color: var(--light-gray);
  background-color: transparent;
  font-size: 1rem;
  width: 100%;
`

export const RequisicaoSend = styled.button `
  background-color: transparent;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: var(--light-gray);
  cursor: pointer;
  transition: background-color .2s;

  &:hover {
    background-color: var(--red);
  }
`

export const ListTypes = styled.ul`
  position: absolute;
  top: 6rem;
  left: 1rem;
  list-style: none;
  background-color: var(--background2);
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  width: 200px;
  border-radius: 4px;
  opacity: 0;
  visibility: hidden;
  transition: all .3s;
  z-index: 5;

  li:first-child {
    padding-top: 1.8rem;
  }

  &.active {
    top: 3.4rem;
    opacity: 1;
    visibility: visible;
  }
`

export const Type = styled.li`
  color: var(--light-gray);
  padding: 0rem 2rem;
  padding-bottom: 1.8rem;
  text-transform: uppercase;
  font-size: 1rem;
  cursor: pointer;
  transition: color .2s;

  &:hover {
    color: var(--red);
  }
`