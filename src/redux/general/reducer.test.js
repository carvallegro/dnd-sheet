import { getProficiencyBonus, levelUp, levelUpByXP } from './reducer'

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

    describe('#levelUp', () => {
      it('test that the min level is 1 and the min level experience is 0', () => {
        const actual = levelUp(-1000)
        expect(actual).toMatchObject({
          experiencePoints: 0,
          globalLevel: 1
        })
      })

      it('test that the max level is 20 and there is no max XP', () => {
        const actual = levelUp(999999999)
        expect(actual).toMatchObject({
          experiencePoints: 355000,
          globalLevel: 20
        })
      })

      it('test that the level is 2 when XP is 380', () => {
        const actual = levelUp(2)
        expect(actual).toMatchObject({
          experiencePoints: 300,
          globalLevel: 2
        })
      })
    })

    describe('#getProficiencyBonus', () => {
      it('should return +2 when level is <= 4', () => {
        expect(getProficiencyBonus(1)).toBe(2)
        expect(getProficiencyBonus(2)).toBe(2)
        expect(getProficiencyBonus(3)).toBe(2)
        expect(getProficiencyBonus(4)).toBe(2)
      })

      it('should return +3 when level is > 4 and <= 8', () => {
        expect(getProficiencyBonus(5)).toBe(3)
        expect(getProficiencyBonus(6)).toBe(3)
        expect(getProficiencyBonus(7)).toBe(3)
        expect(getProficiencyBonus(8)).toBe(3)
      })

      it('should return +4 when level is > 8 and <= 12', () => {
        expect(getProficiencyBonus(9)).toBe(4)
        expect(getProficiencyBonus(10)).toBe(4)
        expect(getProficiencyBonus(11)).toBe(4)
        expect(getProficiencyBonus(12)).toBe(4)
      })

      it('should return +5 when level is > 12 and <= 16', () => {
        expect(getProficiencyBonus(13)).toBe(5)
        expect(getProficiencyBonus(14)).toBe(5)
        expect(getProficiencyBonus(15)).toBe(5)
        expect(getProficiencyBonus(16)).toBe(5)
      })

      it('should return +5 when level is > 16 and <= 20', () => {
        expect(getProficiencyBonus(17)).toBe(6)
        expect(getProficiencyBonus(18)).toBe(6)
        expect(getProficiencyBonus(19)).toBe(6)
        expect(getProficiencyBonus(20)).toBe(6)
      })
    })
  })
})
