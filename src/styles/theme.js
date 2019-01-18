import { colors } from './index'

export const defaultTheme = {
  backgroundColor: colors.white,
  textColor: colors.black
}

export const negativeTheme = theme => ({
  ...theme,
  backgroundColor: theme.textColor,
  textColor: theme.backgroundColor
})
