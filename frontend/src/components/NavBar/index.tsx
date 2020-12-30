import React from 'react'

import { Container, InfoBar, UsuariosList, Usuario, GitHub } from './styles'

export interface Props {
  userImagem?: string
}

const NavBar: React.FC<Props> = ({
  userImagem
}) => {
  return (
    <Container>
      <InfoBar>
        excelsiumjs
      </InfoBar>
      <div className="content">
        <UsuariosList>
          <Usuario userImagem={'https://avatars2.githubusercontent.com/u/49127170?s=460&u=c76b3ceb05db028102e9fbb26143471068fc0a47&v=4'} />
          <Usuario userImagem={'https://avatars2.githubusercontent.com/u/49127170?s=460&u=c76b3ceb05db028102e9fbb26143471068fc0a47&v=4'} />
          <Usuario userImagem={'https://avatars2.githubusercontent.com/u/49127170?s=460&u=c76b3ceb05db028102e9fbb26143471068fc0a47&v=4'} />
          <Usuario userImagem={'https://avatars2.githubusercontent.com/u/49127170?s=460&u=c76b3ceb05db028102e9fbb26143471068fc0a47&v=4'} />
        </UsuariosList>
        <a href="https://github.com/elianbatista/excelsiumjs" target="_blank">
          <GitHub />
        </a>
      </div>
    </Container>
  )
}

export default NavBar