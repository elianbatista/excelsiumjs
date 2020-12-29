import React from 'react'
import { Container } from './styles'

import CodeEditor from './CodeEditor'

const BodyRequisition: React.FC = () => {

  return (
    <Container>
      <CodeEditor language="javascript" />
    </Container>
  )
}

export default BodyRequisition