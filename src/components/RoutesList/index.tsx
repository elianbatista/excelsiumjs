import React from 'react'

import { Container, InfoBar, FilterBar, FilterField } from './styles'

const RoutesList: React.FC = () => {
  return (
    <Container>
      <InfoBar>
        Excelsiumjs
      </InfoBar>
      <FilterBar>
        <FilterField />
      </FilterBar>
    </Container>
  )
}

export default RoutesList