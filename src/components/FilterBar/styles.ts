import styled from 'styled-components'
import { FaPlusCircle, FaSortDown } from 'react-icons/fa'

export const Container = styled.div`
  padding: 1rem;
  display: flex;
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
  cursor: pointer;
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