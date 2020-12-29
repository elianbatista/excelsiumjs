import React, { useState } from 'react'

import { Container, InfoBar, RequisicaoHeader, RequisicaoType, RequisicaoUrl, RequisicaoSend, ArrowIcon } from './styles'

export interface Props {
  tipo: number
  url: string
}

const NavBar: React.FC<Props> = ({
  tipo,
  url
}) => {

  const [types, setTypes] = useState([
    {
      id: 1,
      name: 'get',
      selected: false
    },
    {
      id: 2,
      name: 'post',
      selected: false
    },
    {
      id: 3,
      name: 'put',
      selected: false
    },
    {
      id: 4,
      name: 'del',
      selected: false
    }
  ])
  
  let selectedType

  types.map(type => {
    if(type.id == tipo) {
      selectedType = type.name
    }
  })

  return (
    <Container>
      <InfoBar>
        excelsiumjs
      </InfoBar>
      <RequisicaoHeader>
        <div className="requisicao__info">
          <RequisicaoType className={selectedType}>
            <span>
              { selectedType }
            </span>
            <ArrowIcon className={selectedType} />
          </RequisicaoType>
          <RequisicaoUrl value={url} />
        </div>
        <RequisicaoSend>
          Enviar
        </RequisicaoSend>
      </RequisicaoHeader>
    </Container>
  )
}

export default NavBar