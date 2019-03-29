import _ from 'lodash'

import storage from './storage'

import indexedItems from '../enums/indexedItems'

import AbilityScores from './stub-data/5e-SRD-Ability-Scores'
import Classes from './stub-data/5e-SRD-Classes'
import Conditions from './stub-data/5e-SRD-Conditions'
import DamageTypes from './stub-data/5e-SRD-Damage-Types'
import Equipment from './stub-data/5e-SRD-Equipment'
import EquipmentCategories from './stub-data/5e-SRD-Equipment-Categories'
import Features from './stub-data/5e-SRD-Features'
import Languages from './stub-data/5e-SRD-Languages'
import Levels from './stub-data/5e-SRD-Levels'
import MagicSchools from './stub-data/5e-SRD-Magic-Schools'
import Proficiencies from './stub-data/5e-SRD-Proficiencies'
import Races from './stub-data/5e-SRD-Races'
import Skills from './stub-data/5e-SRD-Skills'
import Spellcasting from './stub-data/5e-SRD-Spellcasting'
import Spells from './stub-data/5e-SRD-Spells'
import Subraces from './stub-data/5e-SRD-Subraces'
import Subclasses from './stub-data/5e-SRD-Subclasses'
import Traits from './stub-data/5e-SRD-Traits'
import WeaponProperties from './stub-data/5e-SRD-Weapon-Properties'

export const STUB_DATA_LOAD = {
  ABILITY_SCORE: AbilityScores,
  CLASS: Classes,
  CONDITIONS: Conditions,
  DAMAGE_TYPES: DamageTypes,
  EQUIPMENT: Equipment,
  EQUIPMENT_CATEGORIES: EquipmentCategories,
  FEATURES: Features,
  LANGUAGES: Languages,
  LEVELS: Levels,
  MAGIC_SCHOOL: MagicSchools,
  PROFICIENCIES: Proficiencies,
  RACES: Races,
  SKILLS: Skills,
  SPELLCASTING: Spellcasting,
  SPELLS: Spells,
  SUBCLASSSES: Subclasses,
  SUBRACES: Subraces,
  TRAITS: Traits,
  WEAPON_PROPERTIES: WeaponProperties
}

const loadSrdData = () =>
  Promise.all(
    _.map(indexedItems, key => storage.setItem(key, STUB_DATA_LOAD[key]))
  )

export default loadSrdData
