import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import { SkillLine, SkillGrid } from './index'

storiesOf('Skills/Skill Line', module)
  .addDecorator(withKnobs())
  .add('default', () => (
  <SkillLine
    name={text('Name', 'Intimidation')}
    attribute={text('Attribute', 'STR')}
    isProficient={boolean('Is Proficient', false)}
    value={text('Value', 4)}
    onProficiencyChange={action('onProficiencyChange')}
  />
))

storiesOf('Skills/Skill Grid', module)
  .add('default', () => (
    <SkillGrid>
      <SkillLine name="Skill 1" value={0} />
      <SkillLine name="Skill 2" value={0} />
      <SkillLine name="Skill 3" value={0} />
      <SkillLine name="Skill 4" value={0} />
      <SkillLine name="Skill 5" value={0} />
      <SkillLine name="Skill 6" value={0} />
    </SkillGrid>
  ))
  .add('with 2 rows', () => (
    <SkillGrid rows={2}>
      <SkillLine name="Skill 1" value={0} />
      <SkillLine name="Skill 2" value={0} />
      <SkillLine name="Skill 3" value={0} />
      <SkillLine name="Skill 4" value={0} />
      <SkillLine name="Skill 5" value={0} />
      <SkillLine name="Skill 6" value={0} />
    </SkillGrid>
  ))
