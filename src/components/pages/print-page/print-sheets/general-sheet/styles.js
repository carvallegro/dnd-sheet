import styled from 'styled-components'
import { Page } from '@common/layout/index'
import { AttributesWrapper } from '../../../../character-elements/attributes'

export const PageWrapper = styled(Page)`
  grid-template:
    'characterName characterName classLevel classLevel expPoints  expPoints' 3.2rem
    'characterName characterName race       race       playerName playerName' 3.2rem
    'attributes attributes attributes attributes attributes attributes' 6rem
    'calculatedValues calculatedValues calculatedValues calculatedValues calculatedValues calculatedValues' 2.4rem
    'savingThrows skills skills skills skills skills' 140px
    'featuresTraits featuresTraits featuresTraits featuresTraits profLanguages profLanguages' auto
    'personalityTrait personalityTrait personalityTrait ideals ideals ideals' minmax(
      40px,
      auto
    )
    'bonds bonds bonds flaws flaws flaws' minmax(40px, auto)
    / 1fr 1fr 1fr 1fr 1fr 1fr;
`

export const CalculatedValuesWrapper = styled(AttributesWrapper)`
  grid-area: calculatedValues;
  justify-content: space-between;
`
