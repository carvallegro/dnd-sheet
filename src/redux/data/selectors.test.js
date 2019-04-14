import {
  selectAllClasses,
  selectSelectedClassLevels,
  selectSelectedClassSpellcasting
} from './selectors'

const STUB_STATE = {
  classes: {
    selectedClass: {
      index: 1
    }
  },
  data: {
    classes: [
      {
        index: 1,
        name: 'classA'
      },
      {
        index: 2,
        name: 'classB'
      }
    ],
    subclasses: [],
    class_levels: [
      {
        level: 1,
        class: {
          id: 1
        },
        subclass: {}
      },
      {
        level: 2,
        class: {
          id: 1
        },
        subclass: {}
      },
      {
        level: 1,
        class: {
          id: 1
        },
        subclass: {
          id: 1
        }
      },
      {
        level: 1,
        class: {
          id: 2
        }
      }
    ],
    spellcasting: [
      {
        level: 1,
        class: {
          id: 1
        }
      },
      {
        level: 2,
        class: {
          id: 1
        }
      },
      {
        level: 3,
        class: {
          id: 1
        }
      },
      {
        level: 1,
        class: {
          id: 2
        }
      }
    ]
  }
}

describe('selectors for the Data Reducer', () => {
  describe('Class selectors', () => {
    describe('#selectAllClasses', () => {
      it('should return all class', () => {
        expect(selectAllClasses(STUB_STATE)).toHaveLength(2)
      })
    })
  })

  describe('Class Levels selectors', () => {
    describe('#selectSelectedClassLevels', () => {
      it('should return all class levels', () => {
        expect(selectSelectedClassLevels(STUB_STATE)).toHaveLength(2)
      })
    })
  })

  describe('Spellcasting selectors', () => {
    describe('#selectSelectedClassSpellcasting', () => {
      it('should return all spellcasting', () => {
        expect(selectSelectedClassSpellcasting(STUB_STATE)).toHaveLength(3)
      })
    })
  })
})
