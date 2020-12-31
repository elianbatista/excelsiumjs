import React from 'react'

import { Container, EyeIcon } from './styles'

import CollaborateImg from '../../images/collaborate.png'

const WorkspacesPage: React.FC = () => {
  return (
    <Container>
      <div className="left-side">
        <img src={CollaborateImg} alt="Excelsium - The Future is Collaborative!"/>
        <h2>
          "The Future is Collaborative." <span>Red Hat</span>
        </h2>
      </div>
      <div className="right-side">
        <div className="box-workspace">
          <h1>
            Welcome, Elian!
          </h1>
          <h2>
            Your Workspaces
          </h2>
          <ul className="workspaces">
            <li className="workspace">
              <span>Venver</span>
              <EyeIcon />
            </li>
            <li className="workspace">
              <span>WPag</span>
              <EyeIcon />
            </li>
            <li className="workspace">
              <span>Teste de Workspace</span>
              <EyeIcon />
            </li>
            <li className="workspace">
              <span>Elian Batista</span>
              <EyeIcon />
            </li>
            <li className="workspace">
              <span>Olá Wolff Workspace</span>
              <EyeIcon />
            </li>
          </ul>
          <div className="content-buttons">
            <button>
              New Workspace
            </button>
            <button className="color">
              Enter Workspace
            </button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default WorkspacesPage