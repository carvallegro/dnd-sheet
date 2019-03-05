import React from 'react'

import { Icon } from 'react-icons-kit'
import { bold } from 'react-icons-kit/icomoon/bold'
import { underline } from 'react-icons-kit/icomoon/underline'
import { italic } from 'react-icons-kit/icomoon/italic'
import { listNumbered } from 'react-icons-kit/icomoon/listNumbered'
import { list } from 'react-icons-kit/icomoon/list'
import { checkmark as tick } from 'react-icons-kit/icomoon/checkmark'
import { header } from 'react-icons-kit/fa/header'
import { quoteRight } from 'react-icons-kit/fa/quoteRight'

import { markTypes, nodeTypes } from './enums'
import { hasBlock, hasMark } from './editor-utils'

import { ToolbarButton, ToolbarWrapper } from './toolbar.styles'
import { SaveButton } from '@common/text-editor/toolbar.styles'

export const MarkButton = ({ value, type, onClick, icon }) => {
  const isActive = hasMark(type, value)

  return (
    <ToolbarButton
      active={isActive}
      onMouseDown={event => onClick(event, type)}
    >
      <Icon icon={icon} />
    </ToolbarButton>
  )
}

export const BlockButton = ({ type, icon, value, onClick, children }) => {
  let isActive = hasBlock(type, value)

  if ([nodeTypes.NUMBERED_LIST, nodeTypes.BULLETED_LIST].includes(type)) {
    const { document, blocks } = value

    if (blocks && blocks.size > 0) {
      const parent = document.getParent(blocks.first().key)
      isActive =
        hasBlock(nodeTypes.LIST_ITEM, value) && parent && parent.type === type
    }
  }

  return (
    <ToolbarButton
      active={isActive}
      onMouseDown={event => onClick(event, type)}
    >
      <Icon icon={icon} />
      <span>{children}</span>
    </ToolbarButton>
  )
}

export default ({ value, onClickBlock, onClickMark, onClickSave }) => (
  <ToolbarWrapper>
    <MarkButton
      type={markTypes.BOLD}
      icon={bold}
      value={value}
      onClick={onClickMark}
    />
    <MarkButton
      type={markTypes.ITALIC}
      icon={italic}
      value={value}
      onClick={onClickMark}
    />
    <MarkButton
      type={markTypes.UNDERLINED}
      icon={underline}
      value={value}
      onClick={onClickMark}
    />
    <BlockButton
      type={nodeTypes.HEADING_ONE}
      icon={header}
      value={value}
      onClick={onClickBlock}
    >
      1
    </BlockButton>
    <BlockButton
      type={nodeTypes.HEADING_TWO}
      icon={header}
      value={value}
      onClick={onClickBlock}
    >
      2
    </BlockButton>
    <BlockButton
      type={nodeTypes.BLOCK_QUOTE}
      icon={quoteRight}
      value={value}
      onClick={onClickBlock}
    />
    <BlockButton
      type={nodeTypes.NUMBERED_LIST}
      icon={listNumbered}
      value={value}
      onClick={onClickBlock}
    />
    <BlockButton
      type={nodeTypes.BULLETED_LIST}
      icon={list}
      value={value}
      onClick={onClickBlock}
    />

    <SaveButton onMouseDown={onClickSave}>
      <Icon icon={tick} />
    </SaveButton>
  </ToolbarWrapper>
)
