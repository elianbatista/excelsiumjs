import React from 'react'
import { Container } from './styles'
import SyntaxHighlighter from 'react-syntax-highlighter'

const RequisicaoInfo: React.FC = () => {
  const codeString = {
    teste: 'teste'
  }

  return (
    <Container>
      <SyntaxHighlighter language="json">
        {JSON.stringify(codeString)}
      </SyntaxHighlighter>
    </Container>
  )
}

export default RequisicaoInfo