import React, { useState, useEffect, useRef } from 'react'
import Prism from 'prismjs'

import '../../../styles/prism.css'

import { Container } from './styles'

export interface Props {
  language: string
}

const CodeEditor: React.FC<Props> = ({
  language
}) => {
  const [content, setContent] = useState("")
  const [cursorPosition, setCursorPosition] = useState(0)

  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const codeOutputRef = useRef<HTMLPreElement>(null)

  const handleKeyDown = (evt: any) => {
    let value = content,
        selStartPos = evt.currentTarget.selectionStart

    setCursorPosition(0.1)

    if (evt.key === "{") {
      evt.preventDefault()

      const initSelect = evt.currentTarget.selectionStart
      const endSelect = evt.currentTarget.selectionEnd
      let endValue
      if(initSelect != endSelect) {
        endValue = content.substring(0, initSelect - 1) + "{" + content.substring(initSelect, endSelect) + "}" + content.substring(endSelect + 1, content.length)
        setContent(endValue)
      } else {
        value = content.substring(0, selStartPos) + "{\n\n}" + value.substring(selStartPos, content.length)

        setContent(value)
        setCursorPosition(selStartPos + 2)
      }
    }

    if(evt.key === "Tab") {
      evt.preventDefault()
      
      value = content.substring(0, selStartPos) + "    " + value.substring(selStartPos, content.length)
      
      setContent(value)
      setCursorPosition(selStartPos + 4)
    }
  }

  useEffect(() => {
    if(cursorPosition != 0.1) {
      textareaRef.current?.setSelectionRange(cursorPosition, cursorPosition)
    }
  }, [cursorPosition])

  useEffect(() => {
    Prism.highlightAll()
  }, [language, content])

  useEffect(() => {
    textareaRef.current?.addEventListener('scroll', (event) => {
      event.preventDefault()
      var scrollcode = textareaRef.current?.scrollTop ? textareaRef.current?.scrollTop : 0
      codeOutputRef.current?.scroll(0, scrollcode)
    })
  }, [textareaRef])

  return (
    <Container>
      <div className="code-edit-container">
        <textarea
          ref={textareaRef}
          className="code-input"
          value={content}
          onChange={evt => setContent(evt.target.value)}
          onKeyDown={handleKeyDown}
          spellCheck="false"
        />
        <pre className="code-output" ref={codeOutputRef}>
          <code className={`language-${language}`}>{content}</code>
        </pre>  
      </div>
    </ Container>
  )
} 

export default CodeEditor