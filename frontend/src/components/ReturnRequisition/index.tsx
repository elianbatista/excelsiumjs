import React from 'react'

import { Container, ReturnBar, Status, Tag } from './styles'

export interface Props {
  error?: boolean
}

const ReturnRequisition: React.FC = () => {
  return (
    <Container>
      <ReturnBar>
        <div className="content-tags">
          <Tag>
            192 ms
          </Tag>
          <Tag>
            965 mb
          </Tag>
        </div>
        <Status error>
          <strong>404</strong> Not Found 
        </Status>
      </ReturnBar>
    </Container>
  )
}

export default ReturnRequisition