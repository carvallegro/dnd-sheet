import {
  updateCharacterName,
  updateFeaturesAndTraits,
  updateOtherProfLanguage,
  updatePlayerName,
  updateRace,
  updateXP
} from '@redux/general/actions'
import { connectToInput, connectToTextArea } from '../utils'
import { connectToTextEditor } from '@character-elements/utils'

export const CharacterName = connectToInput(
  'Character Name',
  updateCharacterName,
  state => state.general.name
)

export const PlayerName = connectToInput(
  'Player Name',
  updatePlayerName,
  state => state.general.playerName
)

export const Race = connectToInput(
  'Race',
  updateRace,
  state => state.general.race
)

export const XP = connectToInput(
  'Experience Points',
  updateXP,
  state => state.general.experiencePoints
)

export const OtherProfAndLanguages = connectToTextEditor(
  'Other Prof. & Languages',
  updateOtherProfLanguage,
  state => state.general.otherProfLanguage
)

export const FeaturesAndTraits = connectToTextEditor(
  'Features & Traits',
  updateFeaturesAndTraits,
  state => state.general.featuresAndTraits
)
