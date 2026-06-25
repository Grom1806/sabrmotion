'use client'

import { useLanguage } from '@/lib/LanguageContext'
import type { Lang } from '@/lib/translations'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Header() {
	const [scrolled, setScrolled] = useState(false)
	const [mobileOpen, setMobileOpen] = useState(false)
	const [activeSection, setActiveSection] = useState('hero')
	const { t, lang, setLang } = useLanguage()

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 24)
		window.addEventListener('scroll', onScroll, { passive: true })
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	useEffect(() => {
		const ids = ['hero', 'about', 'services', 'projects', 'contact']
		const observers: IntersectionObserver[] = []
		ids.forEach(id => {
			const el = document.getElementById(id)
			if (!el) return
			const obs = new IntersectionObserver(
				([entry]) => {
					if (entry.isIntersecting) setActiveSection(id)
				},
				{ rootMargin: '-45% 0px -45% 0px', threshold: 0 },
			)
			obs.observe(el)
			observers.push(obs)
		})
		return () => observers.forEach(o => o.disconnect())
	}, [])

	const navLinks = [
		{ label: t.nav.home, href: '#hero' },
		{ label: t.nav.about, href: '#about' },
		{ label: t.nav.services, href: '#services' },
		{ label: t.nav.projects, href: '#projects' },
		{ label: t.nav.contact, href: '#contact' },
	]

	return (
		<motion.header
			initial={{ y: -80, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
			style={{
				position: 'fixed',
				top: 0,
				left: 0,
				right: 0,
				zIndex: 200,
				background: scrolled ? 'rgba(10,10,10,0.92)' : 'transparent',
				backdropFilter: scrolled ? 'blur(20px)' : 'none',
				WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
				borderBottom: scrolled
					? '1px solid rgba(255,255,255,0.06)'
					: '1px solid transparent',
				transition: 'background 0.35s ease, border-color 0.35s ease',
			}}
		>
			<div
				className='section-container'
				style={{
					height: '68px',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					gap: '1.5rem',
				}}
			>
				{/* Logo */}
				<a
					href='#hero'
					style={{
						display: 'flex',
						alignItems: 'center',
						gap: '0.625rem',
						textDecoration: 'none',
						flexShrink: 0,
					}}
				>
					<div
						style={{
							width: '34px',
							height: '34px',
							borderRadius: '50%',
							background: 'var(--accent)',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							fontFamily: 'var(--font-syne)',
							fontWeight: 800,
							fontSize: '0.95rem',
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

				{/* Desktop nav */}
				<nav
					style={{
						gap: 'clamp(1rem, 2.5vw, 2rem)',
						alignItems: 'center',
						flex: 1,
						justifyContent: 'center',
					}}
					className='hidden md:flex'
				>
					{navLinks.map(({ label, href }) => {
						const sectionId = href.slice(1)
						const isActive = activeSection === sectionId
						return (
							<a
								key={href}
								href={href}
								style={{
									fontFamily: 'var(--font-inter)',
									fontSize: '0.875rem',
									color: isActive ? 'var(--accent)' : 'var(--muted)',
									textDecoration: 'none',
									transition: 'color 0.2s ease',
									whiteSpace: 'nowrap',
									position: 'relative',
								}}
								onMouseEnter={e => {
									if (!isActive)
										(e.currentTarget as HTMLElement).style.color = 'var(--text)'
								}}
								onMouseLeave={e => {
									;(e.currentTarget as HTMLElement).style.color = isActive
										? 'var(--accent)'
										: 'var(--muted)'
								}}
							>
								{label}
								{isActive && (
									<motion.span
										layoutId='nav-indicator'
										style={{
											position: 'absolute',
											bottom: '-4px',
											left: 0,
											right: 0,
											height: '1.5px',
											background: 'var(--accent)',
											borderRadius: '1px',
										}}
										transition={{ type: 'spring', stiffness: 380, damping: 30 }}
									/>
								)}
							</a>
						)
					})}
				</nav>

				{/* Language switcher + CTA */}
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						gap: '0.75rem',
						flexShrink: 0,
					}}
				>
					<div
						className='hidden lg:flex'
						style={{ gap: '0.2rem' }}
					>
						{(['ru', 'en', 'de'] as Lang[]).map(l => (
							<button
								key={l}
								onClick={() => setLang(l)}
								style={{
									fontFamily: 'var(--font-jetbrains)',
									fontSize: '0.6rem',
									letterSpacing: '0.1em',
									textTransform: 'uppercase',
									padding: '0.3rem 0.55rem',
									background:
										lang === l ? 'rgba(74,222,128,0.1)' : 'transparent',
									border:
										lang === l
											? '1px solid rgba(74,222,128,0.32)'
											: '1px solid transparent',
									borderRadius: '0.3rem',
									color: lang === l ? 'var(--accent)' : 'var(--muted)',
									cursor: 'pointer',
									transition: 'all 0.18s ease',
								}}
								onMouseEnter={e => {
									if (lang !== l)
										(e.currentTarget as HTMLElement).style.color = 'var(--text)'
								}}
								onMouseLeave={e => {
									if (lang !== l)
										(e.currentTarget as HTMLElement).style.color =
											'var(--muted)'
								}}
							>
								{l.toUpperCase()}
							</button>
						))}
					</div>

					<a
						href='#contact'
						className='btn-primary hidden md:inline-flex'
						style={{
							fontSize: '0.8rem',
							padding: '0.5rem 1.375rem',
							whiteSpace: 'nowrap',
						}}
					>
						{t.nav.cta}
					</a>

					{/* Mobile burger → X */}
					<button
						className='burger-btn'
						onClick={() => setMobileOpen(!mobileOpen)}
						aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
						aria-expanded={mobileOpen}
						style={{
							background: 'none',
							border: 'none',
							cursor: 'pointer',
							gap: '5px',
							padding: '4px',
						}}
					>
						{[0, 1, 2].map(i => (
							<span
								key={i}
								style={{
									display: 'block',
									width: '22px',
									height: '2px',
									background: 'var(--text)',
									borderRadius: '1px',
									transition: 'all 0.28s ease',
									opacity: mobileOpen && i === 1 ? 0 : 1,
									transform: mobileOpen
										? i === 0
											? 'rotate(45deg) translate(5px, 5px)'
											: i === 2
												? 'rotate(-45deg) translate(5px, -5px)'
												: 'none'
										: 'none',
								}}
							/>
						))}
					</button>
				</div>
			</div>

			{/* Mobile menu with slide animation */}
			<AnimatePresence>
				{mobileOpen && (
					<motion.div
						key='mobile-menu'
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
						style={{ overflow: 'hidden' }}
						className='md:hidden'
					>
						<div
							style={{
								background: 'rgba(10,10,10,0.97)',
								borderTop: '1px solid var(--border)',
								padding: '1.5rem',
								display: 'flex',
								flexDirection: 'column',
								gap: '1.25rem',
							}}
						>
							{/* Mobile language switcher */}
							<div style={{ display: 'flex', gap: '0.35rem' }}>
								{(['ru', 'en', 'de'] as Lang[]).map(l => (
									<button
										key={l}
										onClick={() => setLang(l)}
										style={{
											fontFamily: 'var(--font-jetbrains)',
											fontSize: '0.65rem',
											letterSpacing: '0.1em',
											textTransform: 'uppercase',
											padding: '0.35rem 0.7rem',
											background:
												lang === l
													? 'rgba(74,222,128,0.1)'
													: 'rgba(255,255,255,0.04)',
											border:
												lang === l
													? '1px solid rgba(74,222,128,0.32)'
													: '1px solid var(--border)',
											borderRadius: '0.375rem',
											color: lang === l ? 'var(--accent)' : 'var(--muted)',
											cursor: 'pointer',
										}}
									>
										{l.toUpperCase()}
									</button>
								))}
							</div>

							{navLinks.map(({ label, href }) => (
								<a
									key={href}
									href={href}
									onClick={() => setMobileOpen(false)}
									style={{
										fontFamily: 'var(--font-inter)',
										fontSize: '1rem',
										color:
											activeSection === href.slice(1)
												? 'var(--accent)'
												: 'var(--text)',
										textDecoration: 'none',
										transition: 'color 0.2s',
									}}
								>
									{label}
								</a>
							))}
							<a
								href='#contact'
								className='btn-primary'
								onClick={() => setMobileOpen(false)}
								style={{ marginTop: '0.5rem', textAlign: 'center' }}
							>
								{t.nav.cta}
							</a>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.header>
	)
}
