import styled from 'styled-components'
import { Page } from '@common/layout/index'

export const PageAWrapper = styled(Page)`
  grid-template:
    'heading heading money money money money' 3.2rem
    'heading heading money money money money' 3.2rem
    'treasure treasure treasure petsTransportation petsTransportation petsTransportation' auto
    'weaponsArmor weaponsArmor weaponsArmor weaponsArmor weaponsArmor weaponsArmor' 30%
    / 1fr 1fr 1fr 1fr 1fr 1fr;
`
export const HeaderWrapping = styled.div`
  grid-area: heading;
`

export const MoneyWrapping = styled.div`
  grid-area: money;
`

export const MoneyTopLine = styled.div`
  display: grid;
  grid-template-columns: auto 20% auto;
`
