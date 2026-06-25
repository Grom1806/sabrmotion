'use client'

import { useLanguage } from '@/lib/LanguageContext'
import { motion } from 'framer-motion'

export default function Footer() {
	const { t } = useLanguage()

	const navLinks = [
		{ label: t.nav.home, href: '#hero' },
		{ label: t.nav.services, href: '#services' },
		{ label: t.nav.projects, href: '#projects' },
		{ label: t.nav.contact, href: '#contact' },
	]

	const serviceLinks = t.services.items.map(item => ({
		label: item.title,
		href: '#services',
	}))

	const contactLinks = [
		{ label: 'Telegram', href: 'https://t.me/sabrmot1on', external: true },
	]

	const cols = [
		{ title: t.footer.nav_label, links: navLinks },
		{ title: t.footer.services_label, links: serviceLinks },
		{ title: t.footer.contact_label, links: contactLinks },
	]

	return (
		<footer
			style={{
				background: 'var(--bg)',
				borderTop: '1px solid var(--border)',
			}}
		>
			<div
				className='section-container'
				style={{ padding: '4rem 1.5rem 2rem' }}
			>
				{/* Top row */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					style={{
						display: 'grid',
						gap: '3rem',
						alignItems: 'start',
						marginBottom: '4rem',
					}}
					className='footer-grid'
				>
					{/* Brand */}
					<div>
						<a
							href='#hero'
							style={{
								display: 'flex',
								alignItems: 'center',
								gap: '0.625rem',
								textDecoration: 'none',
								marginBottom: '1rem',
							}}
						>
							<div
								style={{
									width: '36px',
									height: '36px',
									borderRadius: '50%',
									background: 'var(--accent)',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									fontFamily: 'var(--font-syne)',
									fontWeight: 800,
									fontSize: '1rem',
									color: '#0a0a0a',
									flexShrink: 0,
								}}
							>
								S
							</div>
							<span
								style={{
									fontFamily: 'var(--font-syne)',
									fontWeight: 700,
									fontSize: '1.05rem',
									color: 'var(--text)',
								}}
							>
								sabrmot1on
							</span>
						</a>
						<p
							style={{
								fontFamily: 'var(--font-inter)',
								fontSize: '0.875rem',
								color: 'var(--muted)',
								lineHeight: 1.7,
								maxWidth: '260px',
							}}
						>
							{t.footer.tagline}
						</p>
					</div>

					{/* Nav columns */}
					{cols.map(({ title, links }) => (
						<div key={title}>
							<p
								style={{
									fontFamily: 'var(--font-jetbrains)',
									fontSize: '0.6rem',
									letterSpacing: '0.2em',
									textTransform: 'uppercase',
									color: 'var(--muted)',
									marginBottom: '1.25rem',
								}}
							>
								{title}
							</p>
							<ul
								style={{
									listStyle: 'none',
									padding: 0,
									margin: 0,
									display: 'flex',
									flexDirection: 'column',
									gap: '0.75rem',
								}}
							>
								{links.map(({ label, href, ...rest }) => (
									<li key={label}>
										<a
											href={href}
											target={
												'external' in rest && rest.external
													? '_blank'
													: undefined
											}
											rel={
												'external' in rest && rest.external
													? 'noopener noreferrer'
													: undefined
											}
											style={{
												fontFamily: 'var(--font-inter)',
												fontSize: '0.875rem',
												color: 'var(--muted)',
												textDecoration: 'none',
												transition: 'color 0.2s ease',
											}}
											onMouseEnter={e =>
												((e.currentTarget as HTMLElement).style.color =
													'var(--text)')
											}
											onMouseLeave={e =>
												((e.currentTarget as HTMLElement).style.color =
													'var(--muted)')
											}
										>
											{label}
										</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</motion.div>

				{/* Bottom bar */}
				<div
					style={{
						borderTop: '1px solid var(--border)',
						paddingTop: '1.5rem',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						flexWrap: 'wrap',
						gap: '0.75rem',
					}}
				>
					<p
						style={{
							fontFamily: 'var(--font-inter)',
							fontSize: '0.8rem',
							color: 'var(--muted)',
						}}
					>
						{t.footer.copyright}
					</p>
					<p
						style={{
							fontFamily: 'var(--font-jetbrains)',
							fontSize: '0.65rem',
							color: 'rgba(74,222,128,0.35)',
							letterSpacing: '0.1em',
						}}
					>
						{t.footer.built_with}
					</p>
				</div>
			</div>
		</footer>
	)
}
