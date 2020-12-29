import React, { useState } from 'react'

import { Container, InfoBar, RequisicaoHeader, RequisicaoType, RequisicaoUrl, RequisicaoSend, ArrowIcon, ListTypes, Type } from './styles'

export interface Props {
  tipo: string
  url: string
}

const NavBar: React.FC<Props> = ({
  tipo,
  url
}) => {

  const [types, setTypes] = useState([
    {
      id: 1,
      name: 'get'
    },
    {
      id: 2,
      name: 'post'
    },
    {
      id: 3,
      name: 'put'
    },
    {
      id: 4,
      name: 'del'
    }
  ])

  const [selectedType, setSelectedType] = useState(tipo)
  const [viewListTypes, setViewListTypes] = useState(false)

  function handleListTypes() {
    setViewListTypes(!viewListTypes)
  }

  function handleSelectedType(id: number) {
    types.map(type => {
      if (type.id === id) setSelectedType(type.name)
    })
    handleListTypes()
  }

  return (
    <Container>
      <InfoBar>
        excelsiumjs
      </InfoBar>
      <RequisicaoHeader>
        <div className="requisicao__info">
          <RequisicaoType onClick={() => handleListTypes()}>
            <span>
              { selectedType }
            </span>
            <ArrowIcon />
          </RequisicaoType>
          <RequisicaoUrl value={url} />
        </div>
        <RequisicaoSend>
          Enviar
        </RequisicaoSend>
        <ListTypes className={viewListTypes ? 'active' : ''}>
          {
            types.map(type => (
              <Type key={type.id} onClick={() => handleSelectedType(type.id)}>
                {type.name}
              </Type>
            ))
          }
        </ListTypes>
      </RequisicaoHeader>
    </Container>
  )
}

export default NavBar