import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background-color: var(--background);
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
`

