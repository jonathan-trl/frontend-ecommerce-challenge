import { extendTheme } from '@chakra-ui/react'
import { Saira, Saira_Stencil_One } from 'next/font/google'

const saira = Saira({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
})

const sairaStencil = Saira_Stencil_One({
  subsets: ['latin'],
  weight: '400',
})

const colors = {
  title: '#5D5D6D',
  dark: '#09090A',
  green: '#51B853',
}

const theme = extendTheme({
  colors,
  styles: {
    global: {
      body: {
        bg: '#F0F0F5',
        color: '#41414D',
      },
    },
  },
  fonts: {
    body: saira.style.fontFamily,
    heading: sairaStencil.style.fontFamily,
  },
})

export default theme
