import React, { useState } from 'react'
import { Container } from './styles'
import MonacoEditor from 'react-monaco-editor'

const RequisicaoInfo: React.FC = () => {
  const [code, setCode] = useState()

  const options = {
    selectOnLineNumbers: true
  };

  return (
    <Container>
      <MonacoEditor
        width="800"
        height="600"
        language="json"
        theme="vs-dark"
        value={code}
        options={options}
      />
    </Container>
  )
}

export default RequisicaoInfo