import React from 'react'
import { Container } from './styles'
import ReactJson from 'react-json-view'
import JSONInput from 'react-json-editor-ajrm'
import locale from 'react-json-editor-ajrm/locale/pt'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const RequisicaoInfo = () => {
  const codeString = {
    teste: 'teste'
  }

  return (
    <Container>
      {/* <ReactJson src={codeString} theme="monokai" displayDataTypes={false} /> */}
      <JSONInput 
        id = '123'
        placeholder = { codeString }
        colors = { dracula }
        locale = { locale }
        height = '550px'
      />
    </Container>
  )
}

export default RequisicaoInfo