import React from 'react'

import { Container } from './styles'

import NavBar from '../NavBar'
import RoutesList from '../RoutesList'
import BodyRequisition from '../BodyRequisition'

const Layout: React.FC = () => {
  return (
    <Container>
      <NavBar tipo="post" url="http://localhost:3333/api/pagamento" />
      <RoutesList />
      <BodyRequisition />
    </Container>
  )
}

export default Layout