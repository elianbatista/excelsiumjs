import React from 'react'

import { 
  Container, 
  FilterField, 
  ContentIcons, 
  AddIcon, 
  ArrowIcon,
  BoxAdd,
  ButtonAdd,
  Title,
  FolderIcon } from './styles'

const FilterBar: React.FC = () => {
  return (
    <Container>
      <FilterField placeholder="filter" />
      <ContentIcons>
        <AddIcon />
        <ArrowIcon />
        <BoxAdd>
          <ButtonAdd>
            <AddIcon />
            <Title>
              Nova Requisição
            </Title>
            <Title>
              Nova Requisição
            </Title>
            <Title>
              Nova Requisição
            </Title>
            <Title>
              Nova Requisição
            </Title>
            <Title>
              Nova Requisição
            </Title>
          </ButtonAdd>
          <ButtonAdd>
            <FolderIcon />
            <Title>
              Nova Pasta
            </Title>
          </ButtonAdd>
        </BoxAdd>
      </ContentIcons>
    </Container>
  )
}

export default FilterBar