import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

import { ThemeProvider } from 'styled-components'
import { greyTheme } from '@styles/theme'

import ClassDetails from './index'
import { colors } from '@styles'

const MOCK_CLASS = {
  index: 2,
  name: 'Bard',
  description:
    'Whether scholar, skald, or scoundrel, a bard weaves magic through words and music to inspire allies, demoralize foes, manipulate minds, create illusions, and even heal wounds. The bard is a master of song, speech, and the magic they contain.',
  hit_die: 8,
  proficiency_choices: [
    {
      choose: 3,
      type: 'proficiencies',
      from: [
        {
          id: '105',
          name: 'Acrobatics'
        },
        {
          id: '106',
          name: 'Animal Handling'
        },
        {
          id: '107',
          name: 'Arcana'
        },
        {
          id: '108',
          name: 'Athletics'
        },
        {
          id: '109',
          name: 'Deception'
        },
        {
          id: '110',
          name: 'History'
        },
        {
          id: '111',
          name: 'Insight'
        },
        {
          id: '112',
          name: 'Intimidation'
        },
        {
          id: '113',
          name: 'Investigation'
        },
        {
          id: '114',
          name: 'Medicine'
        },
        {
          id: '115',
          name: 'Nature'
        },
        {
          id: '116',
          name: 'Perception'
        },
        {
          id: '117',
          name: 'Performance'
        },
        {
          id: '118',
          name: 'Persuasion'
        },
        {
          id: '119',
          name: 'Religion'
        },
        {
          id: '120',
          name: 'Sleight of Hand'
        },
        {
          id: '121',
          name: 'Stealth'
        },
        {
          id: '122',
          name: 'Survival'
        }
      ]
    },
    {
      choose: 3,
      type: 'proficiencies',
      from: [
        {
          id: '81',
          name: 'Bagpipes'
        },
        {
          id: '82',
          name: 'Drum'
        },
        {
          id: '83',
          name: 'Dulcimer'
        },
        {
          id: '84',
          name: 'Flute'
        },
        {
          id: '85',
          name: 'Lute'
        },
        {
          id: '86',
          name: 'Lyre'
        },
        {
          id: '87',
          name: 'Horn'
        },
        {
          id: '88',
          name: 'Pan flute'
        },
        {
          id: '89',
          name: 'Shawm'
        },
        {
          id: '90',
          name: 'Viol'
        }
      ]
    }
  ],
  proficiencies: [
    {
      name: 'Light armor',
      id: '1'
    },
    {
      name: 'Simple weapons',
      id: '19'
    },
    {
      name: 'Longswords',
      id: '42'
    },
    {
      name: 'Rapiers',
      id: '46'
    },
    {
      name: 'Shortswords',
      id: '48'
    },
    {
      name: 'Crossbows, hand',
      id: '54'
    }
  ],
  saving_throws: [
    {
      name: 'DEX',
      id: '2'
    },
    {
      name: 'CHA',
      id: '6'
    }
  ],
  starting_equipment: {
    id: '2',
    class: 'Bard'
  },
  class_levels: {
    id: 'bard/levels',
    class: 'Bard'
  },
  subclasses: [
    {
      id: '2',
      name: 'Lore'
    }
  ],
  spellcasting: {
    id: '1',
    class: 'Bard'
  },
  id: '2'
}
const MOCK_LEVELS = [
  {
    level: 1,
    ability_score_bonuses: 0,
    prof_bonus: 2,
    feature_choices: [],
    features: [
      {
        name: 'Spellcasting',
        id: '25'
      },
      {
        name: 'Bardic Inspiration (d6)',
        id: '26'
      },
      {
        name: 'Superior Inspiration',
        id: '70'
      }
    ],
    spellcasting: {
      cantrips_known: 2,
      spells_known: 4,
      spell_slots_level_1: 2,
      spell_slots_level_2: 0,
      spell_slots_level_3: 0,
      spell_slots_level_4: 0,
      spell_slots_level_5: 0,
      spell_slots_level_6: 0,
      spell_slots_level_7: 0,
      spell_slots_level_8: 0,
      spell_slots_level_9: 0
    },
    class_specific: {
      bardic_inspiration_die: 6,
      song_of_rest_die: 0,
      magical_secrets_max_5: 0,
      magical_secrets_max_7: 0,
      magical_secrets_max_9: 0
    },
    index: 21,
    class: {
      name: 'Bard',
      id: 2
    },
    subclass: {},
    id: 'bard/level/1'
  },
  {
    level: 2,
    ability_score_bonuses: 0,
    prof_bonus: 2,
    feature_choices: [],
    features: [
      {
        name: 'Jack of All Trades',
        id: '27'
      },
      {
        name: 'Song of Rest (d6)',
        id: '28'
      }
    ],
    spellcasting: {
      cantrips_known: 2,
      spells_known: 5,
      spell_slots_level_1: 3,
      spell_slots_level_2: 0,
      spell_slots_level_3: 0,
      spell_slots_level_4: 0,
      spell_slots_level_5: 0,
      spell_slots_level_6: 0,
      spell_slots_level_7: 0,
      spell_slots_level_8: 0,
      spell_slots_level_9: 0
    },
    class_specific: {
      bardic_inspiration_die: 6,
      song_of_rest_die: 6,
      magical_secrets_max_5: 0,
      magical_secrets_max_7: 0,
      magical_secrets_max_9: 0
    },
    index: 22,
    class: {
      name: 'Bard',
      id: 2
    },
    subclass: {},
    id: 'bard/level/2'
  }
]
const MOCK_SPELLCASTING = [
  {
    index: 1,
    class: {
      id: '2',
      name: 'Bard'
    },
    level: 1,
    spellcasting_ability: {
      id: '6',
      name: 'CHA'
    },
    info: [
      {
        name: 'Cantrips',
        desc: [
          'You know two cantrips of your choice from the bard spell list. You learn additional bard cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Bard table.'
        ]
      },
      {
        name: 'Spell Slots',
        desc: [
          'The Bard table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell’s level or higher. You regain all expended spell slots when you finish a long rest.',
          'For example, if you know the 1st-level spell cure wounds and have a 1st-level and a 2nd-level spell slot available, you can cast cure wounds using either slot.'
        ]
      },
      {
        name: 'Spells Known of 1st Level and Higher',
        desc: [
          'You know four 1st-level spells of your choice from the bard spell list.',
          'The Spells Known column of the Bard table shows when you learn more bard spells of your choice.',
          'Each of these spells must be of a level for which you have spell slots, as shown on the table. For instance, when you reach 3rd level in this class, you can learn one new spell of 1st or 2nd level.',
          'Additionally, when you gain a level in this class, you can choose one of the bard spells you know and replace it with another spell from the bard spell list, which also must be of a level for which you have spell slots.'
        ]
      },
      {
        name: 'Spellcasting Ability',
        desc: [
          'Charisma is your spellcasting ability for your bard spells. Your magic comes from the heart and soul you pour into the performance of your music or oration. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a bard spell you cast and when making an attack roll with one.',
          'Spell save DC = 8 + your proficiency bonus + your Charisma modifier.',
          'Spell attack modifier = your proficiency bonus + your Charisma modifier.'
        ]
      },
      {
        name: 'Ritual Casting',
        desc: [
          'You can cast any bard spell you know as a ritual if that spell has the ritual tag.'
        ]
      },
      {
        name: 'Spellcasting Focus',
        desc: [
          'You can use a musical instrument (see Equipment) as a spellcasting focus for your bard spells.'
        ]
      }
    ],
    id: '1'
  }
]

const Wrapper = styled.div`
  background-color: ${colors.darkGrey}
  padding: 2rem;
  color: ${({ theme }) => theme.textColor};
`

storiesOf('Class Details')
  .addDecorator(storyFn => (
    <ThemeProvider theme={greyTheme}>
      <Wrapper>{storyFn()}</Wrapper>
    </ThemeProvider>
  ))
  .add('default', () => (
    <ClassDetails
      classDetail={MOCK_CLASS}
      classLevels={MOCK_LEVELS}
      spellcasting={MOCK_SPELLCASTING}
    />
  ))
