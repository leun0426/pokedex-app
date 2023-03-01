import { inputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'
import { borderColor} from './pokemon-color-style';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  field: {
    outline: `3px solid ${borderColor}`,
  },
})

export const inputTheme = defineMultiStyleConfig({ baseStyle })