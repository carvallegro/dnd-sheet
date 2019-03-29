import React, { Fragment } from 'react'
import styled from 'styled-components'
import InputField from '@common/fields/input-field'
import { SIZES as sizes } from '@styles'
import DeathSavesCheckboxes from '@common/death-saves-checkboxes'
import Label from '@common/typography/label'

const Wrapper = styled.div`
  display: flex;
`

const Life = () => (
  <Wrapper>
    <div>
      <InputField label="Max HP" value="59" size={sizes.small} />
      <InputField label="Temp HP" value="" size={sizes.small} />
    </div>
    <div>
      <Label>Death Saves</Label>
      <DeathSavesCheckboxes label="Successes" name="success-save" />
      <DeathSavesCheckboxes label="Failures" name="fail-save" reversed />
    </div>
    <div>
      <p>
        <b>Damage imunities:</b> poison
        <br />
      </p>
      <p>
        <b> Immunities:</b> disease
        <br />
      </p>
    </div>
  </Wrapper>
)

export default Life
