import React from 'react'
import { storiesOf } from '@storybook/react'
import { number } from '@storybook/addon-knobs'

import MagicSpells from './index'
import Spell from '@common/magic-spells/spell'

storiesOf('Magic Spells', module)
  .add('default', () => (
    <MagicSpells
      spellLevel={number('Spell Level', 0)}
      slotExtended={number('Slot Extended', 0)}
      slotTotal={number('Slot Total', 0)}
    />
  ))
  .add('with Spells', () => (
    <MagicSpells
      spellLevel={number('Spell Level', 0)}
      slotExtended={number('Slot Extended', 0)}
      slotTotal={number('Slot Total', 0)}
    >
      <Spell />
      <Spell />
      <Spell />
      <Spell />
      <Spell />
      <Spell />
    </MagicSpells>
  ))
  .add('with Spells and columns', () => (
    <MagicSpells
      spellLevel={number('Spell Level', 0)}
      slotExtended={number('Slot Extended', 0)}
      slotTotal={number('Slot Total', 0)}
      columns={2}
    >
      <Spell />
      <Spell />
      <Spell />
      <Spell />
      <Spell />
      <Spell />
      <Spell />
    </MagicSpells>
  ))
