import { extendTheme, theme as base, withDefaultVariant } from "@chakra-ui/react"

const breakpoints = {
  sm: '320px',
  md: '500px',
  lg: '720px',
  xl: '960px',
  '2xl': '1200px',
}

export const theme = extendTheme({
  initialColorMode: 'light',
  useSystemColorMode: false,
  breakpoints, 
  fonts: {
    heading: `'Roboto Slab', ${base.fonts.heading}`,
    body: `'Montserrat', sans-serif`,
  },
  styles: {
    global: {
        body: {
            bg: 'pink.60'
        }
    }
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'blue',
      }
    },
    Input:{
      defaultProps: {
        focusBorderColor: 'blue.500'
      }
    },
    Select:{
      baseStyle: {
        _focus: {
          borderColor: 'indigo.500'
        }
      }
    },
    Textarea:{
      defaultProps: {
        focusBorderColor: 'indigo.500'
      }
    }
  }
});