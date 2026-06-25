'use client'

import { useLanguage } from '@/lib/LanguageContext'
import type { Lang } from '@/lib/translations'
import { motion } from 'framer-motion'
import { useState } from 'react'

const labels: Record<
	Lang,
	{
		name: string
		namePh: string
		message: string
		messagePh: string
		send: string
		contactMe: string
		replyTime: string
		directChat: string
	}
> = {
	ru: {
		name: 'Ваше имя',
		namePh: 'Как вас зовут?',
		message: 'Сообщение',
		messagePh: 'Расскажите о вашем проекте…',
		send: 'Написать в Telegram →',
		contactMe: 'Написать мне',
		replyTime: 'Отвечаю в течение нескольких часов',
		directChat: 'Открыть чат',
	},
	en: {
		name: 'Your name',
		namePh: "What's your name?",
		message: 'Message',
		messagePh: 'Tell me about your project…',
		send: 'Send via Telegram →',
		contactMe: 'Contact me',
		replyTime: 'I reply within a few hours',
		directChat: 'Open chat',
	},
	de: {
		name: 'Ihr Name',
		namePh: 'Wie heißen Sie?',
		message: 'Nachricht',
		messagePh: 'Erzählen Sie von Ihrem Projekt…',
		send: 'Via Telegram schreiben →',
		contactMe: 'Kontakt aufnehmen',
		replyTime: 'Ich antworte innerhalb weniger Stunden',
		directChat: 'Chat öffnen',
	},
}

export default function LetsTalk() {
	const { t, lang } = useLanguage()
	const lb = labels[lang]
	const [name, setName] = useState('')
	const [message, setMessage] = useState('')
	const [focusedName, setFocusedName] = useState(false)
	const [focusedMsg, setFocusedMsg] = useState(false)
	const [sent, setSent] = useState(false)

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		setSent(true)
		setTimeout(() => setSent(false), 2800)
		window.open('https://t.me/sabrmot1on', '_blank')
	}

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
				<div style={{ display: 'grid', gap: '4rem' }} className='contact-grid'>
					{/* ── Left: heading + form ────────────────────── */}
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
								marginBottom: '2rem',
							}}
						>
							{t.contact.headline}
						</motion.h2>

						<motion.form
							onSubmit={handleSubmit}
							initial={{ opacity: 0, y: 16 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.55, delay: 0.18 }}
							style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
						>
							{/* Name */}
							<div>
								<label
									style={{
										display: 'block',
										fontFamily: 'var(--font-inter)',
										fontSize: '0.75rem',
										color: 'var(--muted)',
										marginBottom: '0.4rem',
										letterSpacing: '0.04em',
									}}
								>
									{lb.name}
								</label>
								<input
									type='text'
									value={name}
									onChange={e => setName(e.target.value)}
									placeholder={lb.namePh}
									onFocus={() => setFocusedName(true)}
									onBlur={() => setFocusedName(false)}
									style={{
										width: '100%',
										background: 'var(--card)',
										border: `1px solid ${focusedName ? 'rgba(74,222,128,0.45)' : 'var(--border)'}`,
										borderRadius: '0.75rem',
										padding: '0.875rem 1.125rem',
										fontFamily: 'var(--font-inter)',
										fontSize: '0.9rem',
										color: 'var(--text)',
										outline: 'none',
										transition: 'border-color 0.2s',
										boxSizing: 'border-box',
									}}
								/>
							</div>

							{/* Message */}
							<div>
								<label
									style={{
										display: 'block',
										fontFamily: 'var(--font-inter)',
										fontSize: '0.75rem',
										color: 'var(--muted)',
										marginBottom: '0.4rem',
										letterSpacing: '0.04em',
									}}
								>
									{lb.message}
								</label>
								<textarea
									value={message}
									onChange={e => setMessage(e.target.value)}
									placeholder={lb.messagePh}
									rows={4}
									onFocus={() => setFocusedMsg(true)}
									onBlur={() => setFocusedMsg(false)}
									style={{
										width: '100%',
										background: 'var(--card)',
										border: `1px solid ${focusedMsg ? 'rgba(74,222,128,0.45)' : 'var(--border)'}`,
										borderRadius: '0.75rem',
										padding: '0.875rem 1.125rem',
										fontFamily: 'var(--font-inter)',
										fontSize: '0.9rem',
										color: 'var(--text)',
										outline: 'none',
										resize: 'none',
										transition: 'border-color 0.2s',
										boxSizing: 'border-box',
									}}
								/>
							</div>

							{/* Submit */}
							<motion.button
								type='submit'
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
								style={{
									width: '100%',
									padding: '0.95rem 1.5rem',
									background: sent ? 'rgba(74,222,128,0.2)' : 'var(--accent)',
									color: sent ? 'var(--accent)' : '#0a0a0a',
									fontFamily: 'var(--font-inter)',
									fontWeight: 600,
									fontSize: '0.9rem',
									borderRadius: '0.75rem',
									border: sent ? '1px solid rgba(74,222,128,0.4)' : 'none',
									cursor: 'pointer',
									transition: 'background 0.25s, color 0.25s',
									letterSpacing: '0.01em',
								}}
							>
								{sent ? '✓ Opening Telegram…' : lb.send}
							</motion.button>
						</motion.form>
					</div>

					{/* ── Right: Telegram contact card ────────────── */}
					<motion.div
						initial={{ opacity: 0, x: 24 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.55, delay: 0.22 }}
						style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
					>
						{/* Telegram card */}
						<div
							style={{
								padding: '2rem',
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
									fontSize: '1.25rem',
									color: 'var(--text)',
									marginBottom: '0.5rem',
									letterSpacing: '-0.01em',
								}}
							>
								@sabrmot1on
							</p>

							<p
								style={{
									fontFamily: 'var(--font-inter)',
									fontSize: '0.83rem',
									color: 'var(--muted)',
									lineHeight: 1.6,
									marginBottom: '1.5rem',
								}}
							>
								{lb.replyTime}
							</p>

							<a
								href='https://t.me/sabrmot1on'
								target='_blank'
								rel='noopener noreferrer'
								className='btn-primary'
								style={{ fontSize: '0.83rem', padding: '0.65rem 1.5rem' }}
							>
								{lb.contactMe} →
							</a>
						</div>

						{/* Description */}
						<p
							style={{
								fontFamily: 'var(--font-inter)',
								fontSize: '0.85rem',
								color: 'var(--muted)',
								lineHeight: 1.7,
							}}
						>
							{t.contact.description}
						</p>
					</motion.div>
				</div>
			</div>
		</section>
	)
}
