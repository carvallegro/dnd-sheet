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

export const greyTheme = theme => ({
  ...negativeTheme(theme),
  backgroundColor: colors['brownish-grey'],
  textColor: theme.backgroundColor
})
