import { CacheProvider, EmotionCache } from '@emotion/react'
import 'src/styles/globals.css'
import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'
import createEmotionCache from 'src/helpers/create-emotion-cache'
import Head from 'next/head'
import { ThemeProvider } from '@mui/material/styles'
import theme from 'src/helpers/theme'
import { CssBaseline } from '@mui/material'

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['300', '400', '500', '700'],
	style: ['normal', 'italic'],
})

const clientSideEmotionCach = createEmotionCache()

export interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache
}

function MyApp(props: MyAppProps) {
	const { Component, emotionCache = clientSideEmotionCach, pageProps } = props

	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<meta name='viewport' content='initial-scale=1, width=device-width' />
			</Head>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
		</CacheProvider>
	)
}

export default MyApp
