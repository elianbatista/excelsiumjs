import React from 'react'

import { Container, TopoInfo } from './styles'

import RoutesList from '../RoutesList'

const Layout: React.FC = () => {
  return (
    <Container>
      <TopoInfo>
        Excelsium.js
      </TopoInfo>
      <RoutesList />
    </Container>
  )
}

export default Layout