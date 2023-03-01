import { cardAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'
import { borderColor, cardBackgroundColor } from './pokemon-color-style'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys)

const baseStyle = definePartsStyle({
  // define the part you're going to style
  container: {
    backgroundColor: cardBackgroundColor,
    border: `4px solid ${borderColor}`,
    height: '340px',
    margin: 'auto',
    padding: '15px',
  },

})

export const cardTheme = defineMultiStyleConfig({ baseStyle})