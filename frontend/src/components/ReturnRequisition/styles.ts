import styled from 'styled-components'

import { Props } from '.'

export const Container = styled.div`
  width: 30%;
  height: 100%;
  background-color: var(--background2);
  border-left: 2px solid var(--background);
  z-index: 4;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`

export const ReturnBar = styled.div`
  height: 4.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 2px solid var(--background);
  border-bottom: 2px solid rgba(0,0,0,0.1);
  background-color: var(--background2);
  padding: 1rem 1.6rem;

  > div.content-tags {
    display: flex;
    align-items: center;
  }
`

export const Status = styled.div<Props>`
  font-size: 0.9rem;
  padding: 0.5rem 0.7rem;
  color: var(--foreground);
  background-color: ${props => props.error ? 'red' : '#43A047'};
  border-bottom:  ${props => props.error ? '#DD2C00' : '#388E3C'};
  border-right: ${props => props.error ? '#DD2C00' : '#388E3C'};

  > strong {
    font-weight: 600;
  }
`

export const Tag = styled.div`
  font-size: 0.9rem;
  padding: 0.4rem 0.7rem;
  margin-right: 0.8rem;
  color: #666;
  background-color: var(--light-gray);
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  border-right: 2px solid rgba(0, 0, 0, 0.1);

  :last-child {
    margin-right: 0;
  }
`