import { levelUpByXP } from './reducer'

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

      it('test that the max level is 20 and there is no max XP', () => {
        const actual = levelUpByXP(999999999)
        expect(actual).toMatchObject({
          experiencePoints: 999999999,
          globalLevel: 20
        })
      })

      it('test that the level is 2 when XP is 380', () => {
        const actual = levelUpByXP(380)
        expect(actual).toMatchObject({
          experiencePoints: 380,
          globalLevel: 2
        })
      })
    })
  })
})
