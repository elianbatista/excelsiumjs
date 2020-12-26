import React, { useState } from 'react'

import { 
  Container, 
  InfoBar, 
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

import FilterBar from '../FilterBar'

const RoutesList: React.FC = () => {
  const [folders, setFolders] = useState([
    {
      id: 1,
      title: 'Usuários',
      open: true,
      requests: [
        {
          tipo: 'get',
          nome: 'List'
        },
        {
          tipo: 'del',
          nome: 'Destroy'
        },
        {
          tipo: 'put',
          nome: 'Update'
        },
        {
          tipo: 'post',
          nome: 'Store'
        }
      ]
    },
    {
      id: 2,
      title: 'Estabelecimentos',
      open: true,
      requests: [
        {
          tipo: 'get',
          nome: 'List'
        },
        {
          tipo: 'del',
          nome: 'Destroy'
        },
        {
          tipo: 'put',
          nome: 'Update'
        },
        {
          tipo: 'post',
          nome: 'Store'
        }
      ]
    },
    {
      id: 3,
      title: 'Restaurantes',
      open: true,
      requests: [
        {
          tipo: 'get',
          nome: 'List'
        },
        {
          tipo: 'del',
          nome: 'Destroy'
        },
        {
          tipo: 'put',
          nome: 'Update'
        },
        {
          tipo: 'post',
          nome: 'Store'
        }
      ]
    },
    {
      id: 4,
      title: 'Funcionários',
      open: true,
      requests: [
        {
          tipo: 'get',
          nome: 'List'
        },
        {
          tipo: 'del',
          nome: 'Destroy'
        },
        {
          tipo: 'put',
          nome: 'Update'
        },
        {
          tipo: 'post',
          nome: 'Store'
        }
      ]
    },
    {
      id: 5,
      title: 'Empresas',
      open: true,
      requests: [
        {
          tipo: 'get',
          nome: 'List'
        },
        {
          tipo: 'del',
          nome: 'Destroy'
        },
        {
          tipo: 'put',
          nome: 'Update'
        },
        {
          tipo: 'post',
          nome: 'Store'
        }
      ]
    }
  ])

  function handleOpen(id: number) {
    const attFolders = folders.map(folder => {
      return folder.id === id ? { ...folder, open: !folder.open } : folder
    })

    setFolders(attFolders)
  }

  return (
    <Container>
      <InfoBar>
        excelsiumjs
      </InfoBar>
      <FilterBar />
      <WorkspaceList>
        <PrincipalFolder>
          {
            folders.map(folder => (
              <Folder className={folder.open ? 'open' : ''} key={folder.id}>
                <InfoFolder onClick={() => handleOpen(folder.id)}>
                  <FolderIcon />
                  <FolderTitle>
                    { folder.title }
                  </FolderTitle>
                </InfoFolder>
                {
                  folder.requests.map(request => (
                    <Request>
                      <Tipo id={ request.tipo }>
                        { request.tipo }
                      </Tipo>
                      <Nome>
                        { request.nome }
                      </Nome>
                    </Request>
                  ))
                }
              </Folder>
            ))
          }
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