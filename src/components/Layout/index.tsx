import React from 'react'

import { Container } from './styles'

import NavBar from '../NavBar'
import RoutesList from '../RoutesList'
import RequisicaoInfo from '../RequisicaoInfo'

const Layout: React.FC = () => {
  return (
    <Container>
      <NavBar tipo={2} url="http://localhost:3333/api/pagamento" />
      <RoutesList />
      <RequisicaoInfo />
    </Container>
  )
}

export default Layout