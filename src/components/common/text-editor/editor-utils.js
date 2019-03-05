import React from 'react'
import { Value } from 'slate'
import { markTypes, nodeTypes } from './enums'

export const renderNode = (props, editor, next) => {
  const { attributes, children, node } = props

  switch (node.type) {
    case nodeTypes.BLOCK_QUOTE:
      return <blockquote {...attributes}>{children}</blockquote>
    case nodeTypes.BULLETED_LIST:
      return <ul {...attributes}>{children}</ul>
    case nodeTypes.HEADING_ONE:
      return <h1 {...attributes}>{children}</h1>
    case nodeTypes.HEADING_TWO:
      return <h2 {...attributes}>{children}</h2>
    case nodeTypes.LIST_ITEM:
      return <li {...attributes}>{children}</li>
    case nodeTypes.NUMBERED_LIST:
      return <ol {...attributes}>{children}</ol>
    default:
      return next()
  }
}

export const renderMark = (props, editor, next) => {
  const { children, mark, attributes } = props

  switch (mark.type) {
    case markTypes.BOLD:
      return <strong {...attributes}>{children}</strong>
    case markTypes.ITALIC:
      return <em {...attributes}>{children}</em>
    case markTypes.UNDERLINED:
      return <u {...attributes}>{children}</u>
    default:
      return next()
  }
}

export const hasMark = (type, value) => {
  return value.activeMarks && value.activeMarks.some(mark => mark.type == type)
}
export const hasBlock = (type, value) => {
  return value.blocks && value.blocks.some(node => node.type == type)
}
