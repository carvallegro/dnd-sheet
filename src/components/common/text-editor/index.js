import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { Editor } from 'slate-react'
import { isKeyHotkey } from 'is-hotkey'

import { fonts } from '@styles'
import { hasBlock, renderMark, renderNode } from './editor-utils'
import Toolbar from './toolbar'
import { markTypes, nodeTypes } from './enums'
import Serializer from './serializer'

const EditorWrapper = styled.div`
  position: relative;
  overflow: scroll;

  display: flex;
  flex-direction: column;

  font-family: ${fonts.input};
`

const DEFAULT_NODE = nodeTypes.PARAGRAPH

const isBoldHotkey = isKeyHotkey('mod+b')
const isItalicHotkey = isKeyHotkey('mod+i')
const isUnderlinedHotkey = isKeyHotkey('mod+u')

const onKeyDown = (event, editor, next) => {
  let mark

  if (isBoldHotkey(event)) {
    mark = markTypes.BOLD
  } else if (isItalicHotkey(event)) {
    mark = markTypes.ITALIC
  } else if (isUnderlinedHotkey(event)) {
    mark = markTypes.UNDERLINED
  } else {
    return next()
  }

  event.preventDefault()
  editor.toggleMark(mark)
}

const onClickBlock = (event, type, editorRef, value) => {
  event.preventDefault()

  const editor = editorRef.current
  const { document } = editor.value
  const isList = hasBlock(nodeTypes.LIST_ITEM, value)

  if (![nodeTypes.BULLETED_LIST, nodeTypes.NUMBERED_LIST].includes(type)) {
    const isActive = hasBlock(type, value)

    editor.setBlocks(isActive ? DEFAULT_NODE : type)
    if (isList) {
      editor
        .unwrapBlock(nodeTypes.BULLETED_LIST)
        .unwrapBlock(nodeTypes.NUMBERED_LIST)
    }

    return
  }

  const isType = editor.value.blocks.some(block => {
    return !!document.getClosest(block.key, parent => parent.type == type)
  })

  if (isList && isType) {
    editor
      .setBlocks(DEFAULT_NODE)
      .unwrapBlock(nodeTypes.BULLETED_LIST)
      .unwrapBlock(nodeTypes.NUMBERED_LIST)
  } else if (isList) {
    editor
      .unwrapBlock(
        type == nodeTypes.BULLETED_LIST
          ? nodeTypes.NUMBERED_LIST
          : nodeTypes.BULLETED_LIST
      )
      .wrapBlock(type)
  } else {
    editor.setBlocks(nodeTypes.LIST_ITEM).wrapBlock(type)
  }
}

export const TextEditor = ({ initialValue, onSave }) => {
  const editor = useRef()
  const [editorValue, setEditorValue] = useState(
    Serializer.deserialize(initialValue)
  )
  const onClickSave = () => {
    onSave(Serializer.serialize(editorValue))
  }

  const onClickMark = (event, type) => {
    event.preventDefault()
    editor.current.toggleMark(type)
  }

  const onChange = ({ value }) => setEditorValue(value)

  return (
    <EditorWrapper>
      <Toolbar
        value={editorValue}
        onClickBlock={(event, type) =>
          onClickBlock(event, type, editor, editorValue)
        }
        onClickMark={onClickMark}
        onClickSave={onClickSave}
      />
      <Editor
        spellCheck
        autoFocus
        placeholder="Enter some rich text..."
        ref={editor}
        value={editorValue}
        onChange={onChange}
        onKeyDown={onKeyDown}
        renderNode={renderNode}
        renderMark={renderMark}
      />
    </EditorWrapper>
  )
}

TextEditor.defaultProps = {
  initialValue: ''
}

export default TextEditor
