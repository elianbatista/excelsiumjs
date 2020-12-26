import React from 'react'

import { Container, FilterField, ContentIcons, AddIcon, ArrowIcon } from './styles'

const FilterBar: React.FC = () => {
  return (
    <Container>
      <FilterField placeholder="filter" />
      <ContentIcons>
        <AddIcon />
        <ArrowIcon />
      </ContentIcons>
    </Container>
  )
}

export default FilterBar