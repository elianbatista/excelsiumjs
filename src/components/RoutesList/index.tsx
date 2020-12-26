import React from 'react'

import { 
  Container, 
  InfoBar, 
  FilterBar, 
  FilterField, 
  WorkspaceList ,
  PrincipalFolder,
  Folder,
  InfoFolder,
  FolderIcon,
  FolderTitle,
  Request,
  Tipo,
  Nome
} from './styles'

const RoutesList: React.FC = () => {
  return (
    <Container>
      <InfoBar>
        excelsiumjs
      </InfoBar>
      <FilterBar>
        <FilterField placeholder="filter" />
      </FilterBar>
      <WorkspaceList>
        <PrincipalFolder>
          <Folder>
            <InfoFolder>
              <FolderIcon />
              <FolderTitle>
                Usuários
              </FolderTitle>
            </InfoFolder>
            <Request>
              <Tipo id="get">
                get
              </Tipo>
              <Nome>
                List
              </Nome>
            </Request>
            <Request>
              <Tipo id="del">
                del
              </Tipo>
              <Nome>
                Destroy
              </Nome>
            </Request>
            <Request>
              <Tipo id="put">
                put
              </Tipo>
              <Nome>
                Update
              </Nome>
            </Request>
            <Request>
              <Tipo id="post">
                post
              </Tipo>
              <Nome>
                Store
              </Nome>
            </Request>
          </Folder>
          <Folder>
            <InfoFolder>
              <FolderIcon />
              <FolderTitle>
                Estabelecimentos
              </FolderTitle>
            </InfoFolder>
            <Request>
              <Tipo id="get">
                get
              </Tipo>
              <Nome>
                List
              </Nome>
            </Request>
            <Request>
              <Tipo id="del">
                del
              </Tipo>
              <Nome>
                Destroy
              </Nome>
            </Request>
            <Request>
              <Tipo id="put">
                put
              </Tipo>
              <Nome>
                Update
              </Nome>
            </Request>
            <Request>
              <Tipo id="post">
                post
              </Tipo>
              <Nome>
                Store
              </Nome>
            </Request>
          </Folder>
          <Folder>
            <InfoFolder>
              <FolderIcon />
              <FolderTitle>
                Restaurantes
              </FolderTitle>
            </InfoFolder>
            <Request>
              <Tipo id="get">
                get
              </Tipo>
              <Nome>
                List
              </Nome>
            </Request>
            <Request>
              <Tipo id="del">
                del
              </Tipo>
              <Nome>
                Destroy
              </Nome>
            </Request>
            <Request>
              <Tipo id="put">
                put
              </Tipo>
              <Nome>
                Update
              </Nome>
            </Request>
            <Request>
              <Tipo id="post">
                post
              </Tipo>
              <Nome>
                Store
              </Nome>
            </Request>
          </Folder>
          <Folder>
            <InfoFolder>
              <FolderIcon />
              <FolderTitle>
                Funcionários
              </FolderTitle>
            </InfoFolder>
            <Request>
              <Tipo id="get">
                get
              </Tipo>
              <Nome>
                List
              </Nome>
            </Request>
            <Request>
              <Tipo id="del">
                del
              </Tipo>
              <Nome>
                Destroy
              </Nome>
            </Request>
            <Request>
              <Tipo id="put">
                put
              </Tipo>
              <Nome>
                Update
              </Nome>
            </Request>
            <Request>
              <Tipo id="post">
                post
              </Tipo>
              <Nome>
                Store
              </Nome>
            </Request>
          </Folder>
          <Folder>
            <InfoFolder>
              <FolderIcon />
              <FolderTitle>
                Empresas
              </FolderTitle>
            </InfoFolder>
            <Request>
              <Tipo id="get">
                get
              </Tipo>
              <Nome>
                List
              </Nome>
            </Request>
            <Request>
              <Tipo id="del">
                del
              </Tipo>
              <Nome>
                Destroy
              </Nome>
            </Request>
            <Request>
              <Tipo id="put">
                put
              </Tipo>
              <Nome>
                Update
              </Nome>
            </Request>
            <Request>
              <Tipo id="post">
                post
              </Tipo>
              <Nome>
                Store
              </Nome>
            </Request>
          </Folder>
          <Request>
            <Tipo id="post">
              post
            </Tipo>
            <Nome>
              Registrar
            </Nome>
          </Request>
        </PrincipalFolder>
      </WorkspaceList>
    </Container>
  )
}

export default RoutesList