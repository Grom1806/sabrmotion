import { LanguageProvider } from '@/lib/LanguageContext'
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono, Syne } from 'next/font/google'
import './globals.css'

const syne = Syne({
	subsets: ['latin'],
	variable: '--font-syne',
	weight: ['400', '500', '600', '700', '800'],
})

const jetbrainsMono = JetBrains_Mono({
	subsets: ['latin'],
	variable: '--font-jetbrains',
	weight: ['300', '400', '500'],
})

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
	weight: ['300', '400', '500', '600'],
})

export const metadata: Metadata = {
	title: 'sabrmot1on — Web Development',
	description:
		'Telegram bots, websites and widget bots that generate leads and drive sales',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html
			lang='ru'
			className={`${syne.variable} ${jetbrainsMono.variable} ${inter.variable} antialiased`}
		>
			<body>
				<LanguageProvider>{children}</LanguageProvider>
			</body>
		</html>
	)
}
