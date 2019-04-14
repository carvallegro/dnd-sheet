import { selectSelectedClass } from './selectors'
import { selectSelectedClassIndex } from '@redux/classes/selectors'

const STUB_STATE = {
  classes: {
    selectedClass: {
      index: 1
    }
  }
}

describe('Classes selectors', () => {
  describe('#selectSelectedClass', () => {
    it('should return the selectedClass Object', () => {
      expect(selectSelectedClass(STUB_STATE)).toEqual({
        index: 1
      })
    })
  })

  describe('#selectSelectedClassIndex', () => {
    it('should return 1', () => {
      expect(selectSelectedClassIndex(STUB_STATE)).toBe(1)
    })
  })
})
