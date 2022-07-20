import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import MainLayout from '@/layout/MainLayout'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <Component {...pageProps} />
        <GlobalStyle />
      </MainLayout>
    </ThemeProvider>
  )
}

export default MyApp