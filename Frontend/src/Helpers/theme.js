import { createTheme, responsiveFontSizes } from '@mui/material/styles'

const defaultOptions = {
}

let _theme = createTheme(defaultOptions)
_theme = responsiveFontSizes(_theme)

export const theme = _theme