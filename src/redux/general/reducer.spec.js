import { levelUpByXP } from '@redux/general/reducer'

describe('Character general information Redux reducer', () => {
  describe('Util functions', () => {
    describe('#levelUpByXP', () => {
      it('test that the min level is 1 and the min level experience is 0', () => {
        const actual = levelUpByXP(-1000)
        expect(actual).toMatchObject({
          experiencePoints: 0,
          globalLevel: 1
        })
      })
    })
  })
})
