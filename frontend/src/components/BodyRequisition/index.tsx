import React from 'react'
import { Container } from './styles'

import CodeEditor from './CodeEditor'
import HeaderRequisition from '../HeaderRequisition'

const BodyRequisition: React.FC = () => {

  return (
    <Container>
      <HeaderRequisition tipo="post" url="http://localhost:3333/api/pagamento" />
      <CodeEditor language="javascript" />
    </Container>
  )
}

export default BodyRequisition