import React, { useState } from 'react'
import { Container } from './styles'
import MonacoEditor from 'react-monaco-editor'

const RequisicaoInfo: React.FC = () => {
  const [code, setCode] = useState()

  const options = {
    selectOnLineNumbers: true,
    colorDecorators: true,
    columnSelection: true
  };

  return (
    <Container>
      <MonacoEditor
        height="600"
        language="json"
        theme="vs-dark"
        value={code}
      />
    </Container>
  )
}

export default RequisicaoInfo