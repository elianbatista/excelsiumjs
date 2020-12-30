import React from 'react'

import { Container } from './styles'

import NavBar from '../NavBar'
import RoutesList from '../RoutesList'
import BodyRequisition from '../BodyRequisition'
import ReturnRequisition from '../ReturnRequisition'

const Layout: React.FC = () => {
  return (
    <Container>
      <NavBar  />
      <RoutesList />
      <BodyRequisition />
      <ReturnRequisition />
    </Container>
  )
}

export default Layout