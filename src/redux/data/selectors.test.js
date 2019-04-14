import { selectAllClasses } from './selectors'

const STUB_STATE = {
  data: {
    classes: [
      {
        index: 1,
        name: 'classA'
      }
    ],
    subclasses: [],
    class_levels: [],
    spellcasting: []
  }
}

describe('selectors for the Data Reducer', () => {
  describe('Class selectors', () => {
    describe('#selectAllClasses', () => {
      it('should return all class', () => {
        expect(selectAllClasses(STUB_STATE)).toHaveLength(1)
      })
    })
  })
})
