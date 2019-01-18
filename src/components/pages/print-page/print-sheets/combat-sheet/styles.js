import styled from 'styled-components'

import { Page } from '@common/layout/index'

export const Combat = styled(Page)`
  grid-template:
    'heading heading heading heading heading heading' 8rem
    'stats stats stats stats stats stats ' 10rem
    'attackAndSpell attackAndSpell attackAndSpell attackAndSpell attackAndSpell attackAndSpell ' auto
    'combatTraitsFeature combatTraitsFeature combatTraitsFeature combatTraitsFeature combatTraitsFeature combatTraitsFeature ' auto
    / 1fr 1fr 1fr 1fr 1fr 1fr;
`
export const HeadingWrapper = styled.div`
  position: relative;
  grid-area: heading;

  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 3fr;
`
export const Heading = styled.div``
export const HeadingStats = styled.div`
  position: relative;
  display: grid;
  grid-gap: 1rem;
  overflow: hidden;
  grid-template:
    'ac ac initiative initiative perception perception' auto
    / 1fr 1fr 1fr 1fr 1fr 1fr;
`
export const StatGroupWrapper = styled.div`
  grid-area: stats;
  max-width: 100%;
  display: grid;
  grid-column-gap: 1rem;
  grid-template-columns: 20% 15% 30% 20%;
  justify-content: center;
`
