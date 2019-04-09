import styled from 'styled-components'
import { Page } from '@components/layout'

export const Description = styled(Page)`
  grid-template:
    'heading heading heading heading heading heading' 10rem
    'alliesOrganisations alliesOrganisations alliesOrganisations alliesOrganisations alliesOrganisations alliesOrganisations' 25%
    'backgroundDescription backgroundDescription backgroundDescription backgroundDescription backgroundDescription backgroundDescription' auto
    / 1fr 1fr 1fr 1fr 1fr 1fr;
`
export const HeadingWrapper = styled.div`
  position: relative;
  grid-area: heading;

  display: grid;
  grid-template-columns: 40% auto;
`
export const Heading = styled.div``
export const DescriptionHeader = styled.div`
  position: relative;
  display: grid;
  //grid-gap: 1rem;
  grid-template:
    'background background background alignment alignment alignment' 3.6rem
    'skin skin eyes eyes hair hair' 3.6rem
    'age age height height weight weight' 3.6rem
    / 1fr 1fr 1fr 1fr 1fr 1fr;
`
