const classes = {
  BARBARIAN: 'BARBARIAN',
  BARD: 'BARD',
  CLERIC: 'CLERIC',
  DRUID: 'DRUID',
  FIGHTER: 'FIGHTER',
  MONK: 'MONK',
  PALADIN: 'PALADIN',
  RANGER: 'RANGER',
  ROGUE: 'ROGUE',
  SORCERER: 'SORCERER',
  WARLOCK: 'WARLOCK',
  WIZARD: 'WIZARD'
}

export default classes

export const classSpecificLabels = {
  [classes.BARBARIAN]: {
    rage_count: 'Rage count',
    rage_damage_bonus: 'Rage Damage Bonus',
    brutal_critical_dice: 'Brutal Critical Dice'
  },
  [classes.BARD]: {
    bardic_inspiration_die: 'Bardic Inspiration die',
    song_of_rest_die: 'Song of Rest die',
    magical_secrets: 'Magical Secrets'
  },
  [classes.CLERIC]: {
    channel_divinity_charges: 'Channel Divinity charges',
    destroy_undead_cr: 'Destroy Undead CR'
  },
  [classes.DRUID]: {
    wild_shape_max_cr: 'Wild Shape CR',
    wild_shape_swim: 'Swimming Wild Shape',
    wild_shape_fly: 'Flying Wild Shape'
  },
  [classes.FIGHTER]: {
    action_surges: 'Action Surges',
    indomitable_uses: 'Indomitable use',
    extra_attacks: 'Extra Attacks'
  },
  [classes.MONK]: {},
  [classes.PALADIN]: {
    aura_range: 'Aura Range'
  },
  [classes.RANGER]: {
    favored_enemies: 'Favored Enemies',
    favored_terrain: 'Favored Terrain'
  },
  [classes.ROGUE]: {},
  [classes.SORCERER]: {},
  [classes.WARLOCK]: {},
  [classes.WIZARD]: {}
}
