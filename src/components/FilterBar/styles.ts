import styled from 'styled-components'
import { FaRegFolder, FaPlusCircle, FaSortDown } from 'react-icons/fa'

export const Container = styled.div`
  padding: 1rem;
  display: flex;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`

export const FilterField = styled.input`
  width: 100%;
  background-color: transparent;
  border: 1px solid var(--gray);
  border-radius: 3px;
  padding: 0.6rem 0.8rem;
  font-size: 1rem;
  color: var(--gray);
`

export const ContentIcons = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1.2rem;
  position: relative;
  cursor: pointer;
  &:hover {
    > ul {
      opacity: 1;
      visibility: visible;
      left: 10%;
    }
  }
`

export const AddIcon = styled(FaPlusCircle)`
  width: 16px;
  height: 16px;
  color: var(--foreground);
  margin-right: 0.2rem;
`

export const ArrowIcon = styled(FaSortDown)`
  width: 18px;
  height: 18px;
  color: var(--foreground);
`

export const BoxAdd = styled.ul`
  position: absolute;
  top: 100%;
  left: 20%;
  background-color: var(--background);
  list-style: none;
  width: 240px;
  padding: 1.3rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  z-index: 99;
  border-radius: 3px;
  opacity: 0;
  visibility: hidden;
  transition: all .3s;
  li:first-child {
    margin-bottom: 1.3rem;
  }
`

export const ButtonAdd = styled.li`
  display: flex;
  align-items: center;
  > svg {
    width: 1.rem;
    height: 1.2rem;
    color: var(--red);
    margin-right: 0.8rem;
  }
`

export const Title = styled.h3`
  font-weight: 500;
  font-size: 1rem;
  color: var(--light-gray)
`

export const FolderIcon = styled(FaRegFolder)``