import React from 'react'

import { Container } from './styles'

import RoutesList from '../RoutesList'
import RequisicaoInfo from '../RequisicaoInfo'

const Layout: React.FC = () => {
  return (
    <Container>
      <RoutesList />
      <RequisicaoInfo />
    </Container>
  )
}

export default Layout