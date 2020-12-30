import React, { useState, useEffect } from 'react'

import { Container, RequisicaoType, ArrowIcon, RequisicaoUrl, RequisicaoSend, ListTypes, Type } from './styles'

export interface Props {
  tipo: string
  url: string
}

const HeaderRequisition: React.FC<Props> = ({
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
  const [uurl, setUrl] = useState(url)

  function handleListTypes() {
    setViewListTypes(!viewListTypes)
  }

  function handleSelectedType(id: number) {
    types.map(type => {
      if (type.id === id) setSelectedType(type.name)
    })
    handleListTypes()
  }

  useEffect(() => {
    console.log(uurl)
  }, [uurl])

  return (
    <Container>
      <div className="requisicao__info">
        <RequisicaoType onClick={() => handleListTypes()}>
          <span>
            { selectedType }
          </span>
          <ArrowIcon />
        </RequisicaoType>
        <RequisicaoUrl type="text" value={uurl} onChange={(event) => setUrl(event.target.value)} />
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
    </Container>
  )
}

export default HeaderRequisition