import { extendTheme, } from "@chakra-ui/react";
import { cardTheme } from "./card-style";
import { backgroundColor, borderColor, fontColor, imgBackgroundColor, inputCaptureBackgroundColor, searchButtonBackgroundColor } from "./pokemon-color-style";


const defaultBorder = `3px solid ${borderColor}`;
const defaultBorderRadius = '5px';

export const PokedexTheme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: backgroundColor,
      },
      img: {
        bg: imgBackgroundColor,
        borderRadius: '5px',
      },
      '#pokemon-search-input': {
        backgroundColor: inputCaptureBackgroundColor,
        border: defaultBorder,
        borderRadius: defaultBorderRadius,
        marginRight: '10px' 
      },
      table: {
        fontSize: 'small',
        width: '100%',
        tbody: {
          margin: '10px 0px',
        },
        td: {
          textAlign: 'center',
        }
      },
      '#root': {
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        margin: 'auto',
        width: '100vh',

      },
      '.pokemon-app-wrapper': {
        display: 'flex',
      },
      '.pokemon-stats-wrapper': {
        color: fontColor,
        margin: 'auto 0px',
      },
      '.pokemon-capture-list-wrapper': {
        position: 'relative',
        left: '-4px',
        width: '111.5px',
        '.pokemon-list-img-wrapper': {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
        img: {
          cursor: 'pointer',
        }
      },
      '#pokemon-capture-button': {
        width: '100%',
      },
      '#pokemon-search-button': {
        color: fontColor,
        backgroundColor: searchButtonBackgroundColor,
      },
    })
  },
  components: {
    Button: {
      baseStyle: {
        border: defaultBorder,
        borderRadius: defaultBorderRadius,
      },
    },
    Card: cardTheme,
  },
});