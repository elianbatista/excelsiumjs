import styled from 'styled-components'
import { FaRegFolder } from 'react-icons/fa'

export const Container = styled.div`
  width: 22%;
  background-color: var(--background2);
  height: calc(100% - 4rem);
  display: flex;
  z-index: 4;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  border-right: 2px solid var(--background);
  flex-direction: column;
`

export const WorkspaceList = styled.div`
  flex-grow: 1;
  overflow-y: scroll;
  padding: 1.3rem 1rem;
  z-index: 1;

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