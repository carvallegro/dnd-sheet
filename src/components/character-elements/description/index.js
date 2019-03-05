import {
  updateAge,
  updateBonds,
  updateEyes,
  updateFlaws,
  updateHair,
  updateHeight,
  updateIdeals,
  updatePersonalityTraits,
  updateSkin,
  updateWeight
} from '@redux/description/actions'
import { connectToInput, connectToTextArea } from '../utils'

export const Age = connectToInput(
  'Age',
  updateAge,
  state => state.description.age
)
export const Eyes = connectToInput(
  'Eyes',
  updateEyes,
  state => state.description.eyes
)
export const Hair = connectToInput(
  'Hair',
  updateHair,
  state => state.description.hair
)
export const Height = connectToInput(
  'Height',
  updateHeight,
  state => state.description.height
)
export const Skin = connectToInput(
  'Skin',
  updateSkin,
  state => state.description.skin
)
export const Weight = connectToInput(
  'Weight',
  updateWeight,
  state => state.description.weight
)

export const PersonalityTraits = connectToTextArea(
  'Personality Traits',
  updatePersonalityTraits,
  state => state.description.personalityTraits
)

export const Bonds = connectToTextArea(
  'Bonds',
  updateBonds,
  state => state.description.bonds
)

export const Ideals = connectToTextArea(
  'Ideals',
  updateIdeals,
  state => state.description.ideals
)

export const Flaws = connectToTextArea(
  'Flaws',
  updateFlaws,
  state => state.description.flaws
)
