import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
`

export const TopoInfo = styled.div`
  width: 100%;
  background-color: var(--comment);
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  color: var(--foreground);
  font-size: 1.4rem;
  padding: 1.1rem 1.6rem;
  font-weight: 600;
  text-align: center;
  z-index: 5;
`