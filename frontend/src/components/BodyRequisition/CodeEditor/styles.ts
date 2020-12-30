import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: calc(100% - 4rem - 4.2rem);
  padding-left: 1.4rem;

  > .code-edit-container {
    position: relative;
    height: 100%;
    background-color: transparent;
    margin: 1em 0;
  }

  > .code-edit-container .code-input,
  > .code-edit-container .code-output {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 1rem;
    border: none;
    font-family: 'PT Mono', monospace !important;
    font-size: 0.8rem;
    background: transparent;
    white-space: pre-wrap;
    line-height: 1.5em;
    word-wrap: break-word;
    font-size: 1rem;
  }

  > .code-edit-container .code-input {
    margin: 0;
    color: rgba(255,255,255,0);
    resize: none;

    caret-color: var(--foreground);

    ::-webkit-scrollbar {
      width: 6px;
      cursor: pointer;
    }
    ::-webkit-scrollbar-thumb {
      background-color: var(--red);
      border-radius: 4px;
    }
    ::-webkit-scrolbbar-track {
      background-color: var(--background);
    }
  }

  > .code-edit-container .code-output {
    pointer-events: none;
    z-index: 3;
    margin: 0;
    overflow-y: auto;
    
    ::-webkit-scrollbar {
      width: 0px; 
      visibility: hidden;
      background: transparent;
    }
  }

  > .code-edit-container .code-output code {
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    padding: 1rem;
    display: block;
    color: var(--foreground);
    font-size: 1rem;
    font-family: "PT Mono", monospace !important;
  }

  > .code-edit-container :not(pre) code[class*="language-"],
  .code-edit-container pre[class*="language-"] {
    background: transparent;
    margin: 0;
  }
`