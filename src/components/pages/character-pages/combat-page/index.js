import React from 'react'
import styled from 'styled-components'

import { Column } from '@common/layout'
import Card, { CardBody } from '@common/card'

import { fonts } from '@styles'
import SelectField from '@common/fields/select-field'
import { Race } from '@character-elements/general'
import Skills from '@character-elements/skills'
import SavingThrows from '@character-elements/saving-throws'
import Attributes, { AttributesWrapper } from '@character-elements/attributes'

import WeaponTable from '../../../weapon-table'
import Life from './life'
import Armor from './armor'

const Wrapper = styled.div`
  padding-top: 1.8rem;
  display: grid;
  grid-template-columns: 45fr 65fr;
  grid-auto-flow: column;
  grid-gap: 2rem;
`

const Text = styled.p`
  font-family: ${fonts.input};
`

const CombatPage = () => (
  <Wrapper>
    <Column>
      <Card title="Infos" gridColumn="primary">
        <CardBody>
          <SelectField label="Class" />
          <Race />
        </CardBody>
      </Card>

      <Card title="Life" gridColumn="primary">
        <CardBody>
          <Life />
        </CardBody>
      </Card>

      <Card title="Armor" gridColumn="primary">
        <CardBody>
          <Armor />
        </CardBody>
      </Card>

      <Card title="Proficiencies" gridColumn="primary">
        <CardBody>
          <Armor />
        </CardBody>
      </Card>

      <Card title="Saving Throws" gridColumn="primary">
        <CardBody>
          <SavingThrows rows={3} />
        </CardBody>
      </Card>

      <Card title="Skills" gridColumn="primary">
        <CardBody>
          <Skills rows={9} />
        </CardBody>
      </Card>
    </Column>

    <Column>
      <Card title="Abilities" gridColumn="primary">
        <CardBody>
          <AttributesWrapper>
            <Attributes />
          </AttributesWrapper>
        </CardBody>
      </Card>

      <Card title="Stats" gridColumn="primary">
        <CardBody />
      </Card>

      <Card title="Weapons" gridColumn="primary">
        <CardBody>
          <WeaponTable />
        </CardBody>
      </Card>

      <Card title="Bonus Actions" gridColumn="primary">
        <CardBody>
          <Text>
            <b>Martial Arts</b> Make an extra unarmed strike when you take
            Attack action.
          </Text>
          <Text>
            <b>Flurry of Blows</b> After you take Attack action, spend 1ki to
            make 2 unarmed strikes.
          </Text>
          <Text>
            <b>Patient Defense</b> Spend 1ki point to take the Dodge action.
          </Text>
          <Text>
            <b>Step of the Wind</b> Spend 1ki point to take the Disengage or
            Dash action and jump distance is doubled for the turn.
          </Text>
          <Text>
            <b>Stunning Strike</b> When you hit a creature with melee attack,
            spend 1ki point to stun the creature if it fails a DC 15 CON save.
          </Text>
        </CardBody>
      </Card>

      <Card title="Reactions" gridColumn="primary">
        <CardBody>
          <Text>
            <b>Deflect Missiles</b> When hit by a ranged attack, reduce the
            damage by 1d10+12. If you reduce it to 0, you can catch the missile
            and use it in a ranged attack as a monk weapon with range 20/60.
          </Text>
          <Text>
            <b>Slow Fall</b> Reduce falling damage by 50
          </Text>
        </CardBody>
      </Card>

      <Card title="Combat Traits" gridColumn="primary">
        <CardBody>
          <Text>
            <b>Evasion</b> When you succeed on a DEX save to take half damage,
            you take none, if you fail, you take half.
          </Text>
        </CardBody>
      </Card>
    </Column>
  </Wrapper>
)

export default CombatPage
