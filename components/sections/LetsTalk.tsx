'use client'

import { useLanguage } from '@/lib/LanguageContext'
import type { Lang } from '@/lib/translations'
import { motion } from 'framer-motion'

const TG_HANDLE = 'sabrmot1on'

const labels: Record<
	Lang,
	{ contactMe: string; replyTime: string }
> = {
	ru: {
		contactMe: 'Написать мне',
		replyTime: 'Отвечаю в течение нескольких часов',
	},
	en: {
		contactMe: 'Contact me',
		replyTime: 'I reply within a few hours',
	},
	de: {
		contactMe: 'Kontakt aufnehmen',
		replyTime: 'Ich antworte innerhalb weniger Stunden',
	},
}

export default function LetsTalk() {
	const { t, lang } = useLanguage()
	const lb = labels[lang]

	return (
		<section
			id='contact'
			className='section-pad'
			style={{
				background: 'var(--bg-section)',
				borderTop: '1px solid var(--border)',
				borderBottom: '1px solid var(--border)',
				position: 'relative',
				overflow: 'hidden',
			}}
		>
			{/* Ambient glow */}
			<div
				style={{
					position: 'absolute',
					bottom: '-80px',
					left: '50%',
					transform: 'translateX(-50%)',
					width: '700px',
					height: '260px',
					background:
						'radial-gradient(ellipse, rgba(74,222,128,0.07) 0%, transparent 65%)',
					pointerEvents: 'none',
				}}
			/>

			<div className='section-container' style={{ position: 'relative' }}>
				{/* Eyebrow */}
				<motion.p
					initial={{ opacity: 0, y: -10 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.45 }}
					className='section-eyebrow'
				>
					{t.contact.eyebrow}
				</motion.p>

				{/* Two-column grid */}
				<div style={{ display: 'grid', gap: '4rem', alignItems: 'center' }} className='contact-grid'>
					{/* ── Left: heading + description ───────────────── */}
					<div>
						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.08 }}
							style={{
								fontFamily: 'var(--font-syne)',
								fontWeight: 800,
								fontSize: 'clamp(1.75rem, 3.5vw, 3rem)',
								letterSpacing: '-0.02em',
								lineHeight: 1.15,
								color: 'var(--text)',
								marginBottom: '1.25rem',
							}}
						>
							{t.contact.headline}
						</motion.h2>

						<motion.p
							initial={{ opacity: 0, y: 16 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.55, delay: 0.16 }}
							style={{
								fontFamily: 'var(--font-inter)',
								fontSize: '0.95rem',
								color: 'var(--muted)',
								lineHeight: 1.7,
								maxWidth: '46ch',
							}}
						>
							{t.contact.description}
						</motion.p>
					</div>

					{/* ── Right: Telegram contact card ────────────── */}
					<motion.div
						initial={{ opacity: 0, x: 24 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.55, delay: 0.22 }}
						style={{
							padding: '2.25rem',
							background: 'var(--card)',
							border: '1px solid var(--border)',
							borderRadius: '1.25rem',
							borderLeft: '3px solid var(--accent)',
						}}
					>
						{/* Telegram icon */}
						<div
							style={{
								width: '48px',
								height: '48px',
								borderRadius: '0.875rem',
								background: 'rgba(74,222,128,0.1)',
								border: '1px solid rgba(74,222,128,0.2)',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								fontSize: '1.4rem',
								marginBottom: '1.25rem',
							}}
						>
							✈️
						</div>

						<p
							style={{
								fontFamily: 'var(--font-jetbrains)',
								fontSize: '0.6rem',
								letterSpacing: '0.16em',
								textTransform: 'uppercase',
								color: 'var(--accent)',
								marginBottom: '0.5rem',
							}}
						>
							Telegram
						</p>

						<p
							style={{
								fontFamily: 'var(--font-syne)',
								fontWeight: 700,
								fontSize: '1.4rem',
								color: 'var(--text)',
								marginBottom: '0.5rem',
								letterSpacing: '-0.01em',
							}}
						>
							@{TG_HANDLE}
						</p>

						<p
							style={{
								fontFamily: 'var(--font-inter)',
								fontSize: '0.83rem',
								color: 'var(--muted)',
								lineHeight: 1.6,
								marginBottom: '1.75rem',
							}}
						>
							{lb.replyTime}
						</p>

						<a
							href={`https://t.me/${TG_HANDLE}`}
							target='_blank'
							rel='noopener noreferrer'
							className='btn-primary'
							style={{ width: '100%', justifyContent: 'center', fontSize: '0.85rem' }}
						>
							{lb.contactMe} →
						</a>
					</motion.div>
				</div>
			</div>
		</section>
	)
}
