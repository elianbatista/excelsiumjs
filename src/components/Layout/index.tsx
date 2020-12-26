import React from 'react'

import { Container } from './styles'

import RoutesList from '../RoutesList'

const Layout: React.FC = () => {
  return (
    <Container>
      <RoutesList />
    </Container>
  )
}

export default Layout