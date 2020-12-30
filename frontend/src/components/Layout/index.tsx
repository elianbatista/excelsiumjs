import React from 'react'

import { Container } from './styles'

import NavBar from '../NavBar'
import RoutesList from '../RoutesList'
import BodyRequisition from '../BodyRequisition'

const Layout: React.FC = () => {
  return (
    <Container>
      <NavBar  />
      <RoutesList />
      <BodyRequisition />
    </Container>
  )
}

export default Layout