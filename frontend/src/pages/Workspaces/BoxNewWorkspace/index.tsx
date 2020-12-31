import React, { useState } from 'react'

import { Container, CloseIcon } from './styles'

interface Props {
  active: boolean
  handleActive: any
} 

const BoxNewWorkspace: React.FC<Props> = ({
  active,
  handleActive
}) => {

  function closeBoxNewWorkspace() {
    handleActive(false)
  }

  return (
    <Container className={active ? 'active' : ''}>
      <div className="background" onClick={closeBoxNewWorkspace}></div>
      <div className="content-box">
        <button className="close" onClick={closeBoxNewWorkspace}>
          <CloseIcon />
        </button>
        <h2>
          New Workspace
        </h2>
        <form>
          <div className="field-input">
            <label>
              Name
            </label>
            <input type="text"/>
          </div>
          <div className="field-button">
            <button>
              Create
            </button>
          </div>
        </form>
      </div>
    </Container>
  )
}

export default BoxNewWorkspace