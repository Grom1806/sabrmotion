'use client'

import { useLanguage } from '@/lib/LanguageContext'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Hero() {
	const ref = useRef<HTMLElement>(null)
	const { t } = useLanguage()
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end start'],
	})
	const y = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])
	const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])

	return (
		<section
			ref={ref}
			id='hero'
			className='hero-section'
			style={{
				position: 'relative',
				display: 'flex',
				alignItems: 'center',
				paddingTop: '80px',
				overflow: 'hidden',
			}}
		>
			<motion.div style={{ y, opacity }} className='w-full'>
				<div className='section-container' style={{ paddingBottom: '5rem' }}>
					<div
						style={{ display: 'grid', gap: '3rem', alignItems: 'center' }}
						className='hero-grid'
					>
						{/* Left — text content */}
						<div style={{ minWidth: 0 }}>
							{/* Availability tag */}
							<motion.div
								initial={{ opacity: 0, y: -12 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.1 }}
								style={{
									display: 'inline-flex',
									alignItems: 'center',
									gap: '0.5rem',
									fontFamily: 'var(--font-jetbrains)',
									fontSize: '0.65rem',
									letterSpacing: '0.18em',
									textTransform: 'uppercase',
									color: 'var(--muted)',
									marginBottom: '1.75rem',
								}}
							>
								<span
									style={{
										width: '7px',
										height: '7px',
										borderRadius: '50%',
										background: 'var(--accent)',
										display: 'inline-block',
										boxShadow: '0 0 8px rgba(74,222,128,0.7)',
									}}
								/>
								{t.hero.tag}
							</motion.div>

							{/* Mixed-colour headline */}
							<motion.h1
								initial={{ opacity: 0, y: 28 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.75, delay: 0.2 }}
								style={{
									fontFamily: 'var(--font-syne)',
									fontWeight: 800,
									fontSize: 'clamp(2rem, 5vw, 4.5rem)',
									lineHeight: 1.05,
									letterSpacing: '-0.025em',
									marginBottom: '1.75rem',
									overflowWrap: 'break-word',
								}}
							>
								<span style={{ color: 'var(--text)' }}>{t.hero.line1}</span>
								<br />
								<span style={{ color: 'var(--accent)' }}>{t.hero.line2}</span>
								<br />
								<span style={{ color: 'var(--text)' }}>{t.hero.line3}</span>
							</motion.h1>

							{/* Description */}
							<motion.p
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.65, delay: 0.38 }}
								style={{
									fontFamily: 'var(--font-inter)',
									fontSize: '1rem',
									color: 'var(--muted)',
									lineHeight: 1.75,
									maxWidth: '500px',
									marginBottom: '2.5rem',
								}}
							>
								{t.hero.description}
							</motion.p>

							{/* CTAs */}
							<motion.div
								initial={{ opacity: 0, y: 16 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.52 }}
								style={{
									display: 'flex',
									flexWrap: 'wrap',
									alignItems: 'center',
									gap: '1.5rem',
								}}
							>
								<a href='#contact' className='btn-primary'>
									{t.hero.cta_primary}
								</a>
								<a
									href='#services'
									style={{
										fontFamily: 'var(--font-inter)',
										fontSize: '0.875rem',
										color: 'var(--muted)',
										textDecoration: 'none',
										display: 'flex',
										alignItems: 'center',
										gap: '0.25rem',
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
									{t.hero.cta_secondary} →
								</a>
							</motion.div>
						</div>

						{/* Right — brand card */}
						<motion.div
							initial={{ opacity: 0, x: 36, scale: 0.96 }}
							animate={{ opacity: 1, x: 0, scale: 1 }}
							transition={{
								duration: 0.85,
								delay: 0.28,
								ease: [0.25, 0.46, 0.45, 0.94],
							}}
							style={{ flexShrink: 0, justifyContent: 'center' }}
							className='hero-card'
						>
							<BrandCard />
						</motion.div>
					</div>
				</div>

				{/* Scroll indicator */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1.6 }}
					style={{
						position: 'absolute',
						bottom: '2rem',
						left: '50%',
						transform: 'translateX(-50%)',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						gap: '0.5rem',
					}}
				>
					<span
						style={{
							fontFamily: 'var(--font-jetbrains)',
							fontSize: '0.6rem',
							letterSpacing: '0.3em',
							textTransform: 'uppercase',
							color: 'var(--muted)',
						}}
					>
						Scroll
					</span>
					<motion.div
						animate={{ scaleY: [0, 1, 0] }}
						transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
						style={{
							width: '1px',
							height: '36px',
							background:
								'linear-gradient(to bottom, var(--accent), transparent)',
							transformOrigin: 'top',
						}}
					/>
				</motion.div>
			</motion.div>
		</section>
	)
}

function BrandCard() {
	return (
		<div
			style={{
				width: '320px',
				height: '400px',
				background: 'var(--card)',
				borderRadius: '1.5rem',
				border: '1px solid var(--border)',
				position: 'relative',
				overflow: 'hidden',
				flexShrink: 0,
			}}
		>
			{/* Radial glow */}
			<div
				style={{
					position: 'absolute',
					inset: 0,
					background:
						'radial-gradient(ellipse at 50% 40%, rgba(74,222,128,0.1) 0%, transparent 65%)',
				}}
			/>
			{/* Subtle grid */}
			<div
				style={{
					position: 'absolute',
					inset: 0,
					backgroundImage:
						'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
					backgroundSize: '36px 36px',
				}}
			/>
			{/* Logo mark */}
			<div
				style={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -62%)',
					width: '120px',
					height: '120px',
					borderRadius: '50%',
					background: 'rgba(74,222,128,0.08)',
					border: '1.5px solid rgba(74,222,128,0.3)',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					fontFamily: 'var(--font-syne)',
					fontWeight: 800,
					fontSize: '2.5rem',
					color: 'var(--accent)',
					letterSpacing: '-0.02em',
				}}
			>
				SM
			</div>
			{/* Brand name */}
			<div
				style={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, 25%)',
					fontFamily: 'var(--font-syne)',
					fontWeight: 700,
					fontSize: '1.1rem',
					letterSpacing: '0.05em',
					textTransform: 'uppercase',
					color: 'var(--text)',
					whiteSpace: 'nowrap',
				}}
			>
				sabrmot1on
			</div>
			{/* Available badge */}
			<div
				style={{
					position: 'absolute',
					bottom: '1.25rem',
					left: '50%',
					transform: 'translateX(-50%)',
					background: 'rgba(10,10,10,0.85)',
					backdropFilter: 'blur(8px)',
					border: '1px solid var(--border)',
					borderRadius: '9999px',
					padding: '0.45rem 1.1rem',
					display: 'flex',
					alignItems: 'center',
					gap: '0.5rem',
					whiteSpace: 'nowrap',
					fontFamily: 'var(--font-inter)',
					fontSize: '0.75rem',
					color: 'var(--text)',
				}}
			>
				<span
					style={{
						width: '8px',
						height: '8px',
						borderRadius: '50%',
						background: 'var(--accent)',
						display: 'inline-block',
						boxShadow: '0 0 8px rgba(74,222,128,0.7)',
					}}
				/>
				Open for new projects
			</div>
		</div>
	)
}
