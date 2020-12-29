import React, { useState } from 'react'
import { Container } from './styles'
import MonacoEditor from 'react-monaco-editor'

const RequisicaoInfo: React.FC = () => {
  const [code, setCode] = useState()

  return (
    <Container>
      <MonacoEditor
        language="html"
        value={code}
        height='600'
        options={{
          selectOnLineNumbers: true,
          roundedSelection: false,
          cursorStyle: 'line',
          automaticLayout: false,
          theme: 'vs-dark',
        }}
      />
    </Container>
  )
}

export default RequisicaoInfo