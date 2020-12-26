import styled from 'styled-components'
import { FaRegFolder, FaPlusCircle, FaSortDown } from 'react-icons/fa'

export const Container = styled.div`
  width: 22%;
  background-color: var(--current);
  display: flex;
  flex-direction: column;
`

export const InfoBar = styled.div`
  width: 100%;
  background-color: var(--background);
  font-weight: 600;
  color: var(--foreground);
  font-size: 1.5rem;
  padding: 1.3rem 1.6rem;
`

export const FilterBar = styled.div`
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

export const WorkspaceList = styled.div`
  height: 100%;
  overflow-y: scroll;
  padding: 0rem 1rem;

  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--purple);
    border-radius: 4px;
  }
  ::-webkit-scrolbbar-track {
    background-color: var(--background);
  }
`

export const PrincipalFolder = styled.ul`

`

export const Folder = styled.ul`
  padding: 0 1.2rem;
  user-select: none;
  > li {
    padding-left: 1.2rem;
    padding-right: 1.2rem;
    user-select: none;
    display: none;
  }
  &.open {
    > li {
      display: flex;
    }
  }
`

export const Request = styled.li`
  display: flex;
  align-items: center;
  padding: 0.6rem 1.2rem;
  cursor: pointer;
  transition: background-color .2s;
  &:hover {
    background-color: rgba(255,255,255,0.1);
  }
`

export const InfoFolder = styled.div`
  display: flex;
  align-items: center;
  padding: 0.6rem 0rem;
  cursor: pointer;
`

export const FolderIcon = styled(FaRegFolder)`
  width: 1.1rem;
  height: 1.1rem;
  color: var(--foreground);
  margin-right: 0.8rem;
`

export const FolderTitle = styled.h2`
  font-weight: 500;
  font-size: 0.95rem;
  color: var(--light-gray);
`

export const Tipo = styled.div`
  text-transform: uppercase;
  font-size: 0.6rem;
  width: 2.6rem;
  color: var(--foreground);
  &#get {
    color: var(--purple);
  }
  &#post {
    color: var(--cyan);
  }
  &#put {
    color: var(--pink);
  }
  &#del {
    color: var(--red);
  }
`

export const Nome = styled.h3`
  font-weight: 500;
  font-size: 0.9rem;
  color: var(--light-gray);
`