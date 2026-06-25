'use client'
import { useLanguage } from '@/lib/LanguageContext'
import type { Lang } from '@/lib/translations'
import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useEffect, useRef, useState } from 'react'

/* ── Placeholders — замените на реальные данные ────────── */
const TG_HANDLE = '@sabrmot1on'
const TG_LINK = 'https://t.me/sabrmot1on'

interface Msg {
	from: 'bot' | 'user'
	text: string
}
interface Reply {
	label: string
	next: string
}
interface Step {
	bot: string[]
	replies?: Reply[]
}
type Flow = Record<string, Step>

/* ── Inline markdown: **bold** ────────────────────────── */
function renderInline(text: string, keyPrefix: string) {
	const parts = text.split(/(\*\*[^*]+\*\*)/g)
	return parts.map((part, i) => {
		if (part.startsWith('**') && part.endsWith('**')) {
			return (
				<strong
					key={`${keyPrefix}-${i}`}
					style={{ color: 'var(--text)', fontWeight: 700 }}
				>
					{part.slice(2, -2)}
				</strong>
			)
		}
		return <span key={`${keyPrefix}-${i}`}>{part}</span>
	})
}

/* ── Block markdown: line breaks, bullets, bold (strips stray #) ── */
function FormattedText({ text }: { text: string }) {
	const lines = text.split('\n')
	return (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
			{lines.map((raw, i) => {
				// strip any stray markdown heading markers
				const line = raw.replace(/^#{1,4}\s*/, '').trim()
				if (!line) return <div key={i} style={{ height: '0.4rem' }} />

				const bullet = line.match(/^[-*•]\s+(.*)$/)
				if (bullet) {
					return (
						<div
							key={i}
							style={{
								display: 'flex',
								gap: '0.5rem',
								alignItems: 'baseline',
								margin: '0.05rem 0',
							}}
						>
							<span
								style={{
									color: 'var(--accent)',
									flexShrink: 0,
									fontSize: '0.7rem',
								}}
							>
								▸
							</span>
							<span>{renderInline(bullet[1], `b-${i}`)}</span>
						</div>
					)
				}
				return <div key={i}>{renderInline(line, `p-${i}`)}</div>
			})}
		</div>
	)
}

/* ── Teaser rotation phrases ──────────────────────────── */
const teasers: Record<Lang, string[]> = {
	ru: [
		'Проконсультирую по вашему проекту 👋',
		'Нужен бот, который продаёт?',
		'Сделаю сайт или Telegram-бота под ключ',
		'Оставьте заявку — отвечу быстро ⚡',
		'Расскажу, как ИИ ускорит ваш бизнес 🤖',
	],
	en: [
		'Let me consult on your project 👋',
		'Need a bot that actually sells?',
		'Websites & Telegram bots, turnkey',
		'Leave a request — I reply fast ⚡',
		'Ask how AI can boost your business 🤖',
	],
	de: [
		'Ich berate Sie zu Ihrem Projekt 👋',
		'Brauchen Sie einen Bot, der verkauft?',
		'Websites & Telegram-Bots, schlüsselfertig',
		'Anfrage senden — ich antworte schnell ⚡',
		'Wie KI Ihr Business beschleunigt 🤖',
	],
}

/* ── Scripted marketing dialog per language ───────────── */
const flows: Record<Lang, Flow> = {
	ru: {
		start: {
			bot: [
				'Привет! 👋 Я бот-консультант Sabrmotion.',
				'Делаю **Telegram-ботов**, **сайты** и **виджет-боты** с ИИ-интеграциями. Опыт 3+ года, работаю напрямую — без менеджеров и посредников.',
				'Что вас интересует?',
			],
			replies: [
				{ label: '🤖 Telegram-бот', next: 'bot' },
				{ label: '🌐 Сайт / лендинг', next: 'site' },
				{ label: '⚙️ Виджет-бот', next: 'widget' },
				{ label: '💬 Просто вопрос', next: 'about' },
			],
		},
		bot: {
			bot: [
				'Отличный выбор! 🤖',
				'Боты на **Node.js** — без ограничений конструкторов: приём заявок и оплат, автоворонки, **CRM**, базы данных. Бот не просто отвечает, а ведёт клиента к покупке.',
				'Работаем по схеме **50/50**: предоплата перед стартом, остаток после сдачи. Честно для обеих сторон.',
				'Обсудим ваш проект?',
			],
			replies: [
				{ label: '📝 Оставить заявку', next: 'lead' },
				{ label: '✈️ Написать в Telegram', next: 'telegram' },
				{ label: '↩️ Назад', next: 'start' },
			],
		},
		site: {
			bot: [
				'Класс! 🌐',
				'Сайты пишу **с нуля**, а не из готовых блоков: лендинги, многостраничники, магазины. Чистый код, высокая скорость, **SEO** и удобная панель управления.',
				'Подключаю любые интеграции: оплаты, CRM, рассылки, внешние API.',
				'Хотите оценку под вашу задачу?',
			],
			replies: [
				{ label: '📝 Оставить заявку', next: 'lead' },
				{ label: '✈️ Написать в Telegram', next: 'telegram' },
				{ label: '↩️ Назад', next: 'start' },
			],
		},
		widget: {
			bot: [
				'Отличная идея! ⚙️',
				'Виджет-бот встраивается прямо на сайт и работает на конверсию: отвечает, собирает контакты, доводит до заявки. При желании усиливаю его **ИИ**.',
				'Кстати, вот такой виджет, как этот, я и делаю 😉',
				'Сделать такой для вашего сайта?',
			],
			replies: [
				{ label: '📝 Оставить заявку', next: 'lead' },
				{ label: '✈️ Написать в Telegram', next: 'telegram' },
				{ label: '↩️ Назад', next: 'start' },
			],
		},
		about: {
			bot: [
				'С радостью помогу 💬',
				'Sabrmotion — это разработка под ключ с упором на результат: боты, сайты и виджеты, которые приносят **заявки и продажи**, а не просто красиво выглядят.',
				'Работаю напрямую — вы общаетесь с тем, кто пишет код.',
				'Что выберем дальше?',
			],
			replies: [
				{ label: '🤖 Telegram-бот', next: 'bot' },
				{ label: '🌐 Сайт / лендинг', next: 'site' },
				{ label: '⚙️ Виджет-бот', next: 'widget' },
				{ label: '📝 Оставить заявку', next: 'lead' },
			],
		},
		lead: {
			bot: [
				'Супер! 🚀',
				`Напишите мне в Telegram **${TG_HANDLE}** — так отвечу быстрее всего, обычно в течение пары часов.`,
				'Жмите кнопку ниже 👇',
			],
			replies: [
				{ label: '✈️ Открыть Telegram', next: 'telegram' },
				{ label: '↩️ В начало', next: 'start' },
			],
		},
	},

	en: {
		start: {
			bot: [
				"Hi! 👋 I'm the Sabrmotion consultant bot.",
				'I build **Telegram bots**, **websites** and **widget bots** with AI integrations. 3+ years of experience, working directly — no managers, no middlemen.',
				'What are you interested in?',
			],
			replies: [
				{ label: '🤖 Telegram bot', next: 'bot' },
				{ label: '🌐 Website / landing', next: 'site' },
				{ label: '⚙️ Widget bot', next: 'widget' },
				{ label: '💬 Just a question', next: 'about' },
			],
		},
		bot: {
			bot: [
				'Great choice! 🤖',
				'Bots in **Node.js** — no builder limits: lead capture and payments, auto-funnels, **CRM**, databases. The bot guides the client all the way to purchase.',
				'We work on a **50/50** basis: deposit before start, the rest on delivery. Fair for both sides.',
				'Shall we discuss your project?',
			],
			replies: [
				{ label: '📝 Leave a request', next: 'lead' },
				{ label: '✈️ Message on Telegram', next: 'telegram' },
				{ label: '↩️ Back', next: 'start' },
			],
		},
		site: {
			bot: [
				'Awesome! 🌐',
				'I build sites **from scratch**, not from prefab blocks: landings, multi-page sites, stores. Clean code, high speed, **SEO** and an easy admin panel.',
				'I connect any integrations: payments, CRM, campaigns, external APIs.',
				'Want an estimate for your task?',
			],
			replies: [
				{ label: '📝 Leave a request', next: 'lead' },
				{ label: '✈️ Message on Telegram', next: 'telegram' },
				{ label: '↩️ Back', next: 'start' },
			],
		},
		widget: {
			bot: [
				'Great idea! ⚙️',
				'A widget bot embeds right on your site and works for conversion: answers, collects contacts, drives to a request. I can power it with **AI** too.',
				'By the way — a widget just like this one is exactly what I build 😉',
				'Want one for your site?',
			],
			replies: [
				{ label: '📝 Leave a request', next: 'lead' },
				{ label: '✈️ Message on Telegram', next: 'telegram' },
				{ label: '↩️ Back', next: 'start' },
			],
		},
		about: {
			bot: [
				'Happy to help 💬',
				'Sabrmotion is turnkey development focused on results: bots, sites and widgets that bring **leads and sales**, not just good looks.',
				'You work directly with the person who writes the code.',
				"What's next?",
			],
			replies: [
				{ label: '🤖 Telegram bot', next: 'bot' },
				{ label: '🌐 Website / landing', next: 'site' },
				{ label: '⚙️ Widget bot', next: 'widget' },
				{ label: '📝 Leave a request', next: 'lead' },
			],
		},
		lead: {
			bot: [
				'Awesome! 🚀',
				`Message me on Telegram **${TG_HANDLE}** — that's the fastest way, I usually reply within a couple of hours.`,
				'Tap the button below 👇',
			],
			replies: [
				{ label: '✈️ Open Telegram', next: 'telegram' },
				{ label: '↩️ Start over', next: 'start' },
			],
		},
	},

	de: {
		start: {
			bot: [
				'Hallo! 👋 Ich bin der Berater-Bot von Sabrmotion.',
				'Ich entwickle **Telegram-Bots**, **Websites** und **Widget-Bots** mit KI-Integrationen. 3+ Jahre Erfahrung, direkte Zusammenarbeit — ohne Manager, ohne Mittelsmänner.',
				'Wofür interessieren Sie sich?',
			],
			replies: [
				{ label: '🤖 Telegram-Bot', next: 'bot' },
				{ label: '🌐 Website / Landing', next: 'site' },
				{ label: '⚙️ Widget-Bot', next: 'widget' },
				{ label: '💬 Nur eine Frage', next: 'about' },
			],
		},
		bot: {
			bot: [
				'Gute Wahl! 🤖',
				'Bots in **Node.js** — ohne Baukasten-Grenzen: Lead-Erfassung und Zahlungen, Auto-Funnels, **CRM**, Datenbanken. Der Bot führt den Kunden bis zum Kauf.',
				'Wir arbeiten nach dem **50/50**-Prinzip: Anzahlung vor Start, Rest nach Abnahme. Fair für beide Seiten.',
				'Besprechen wir Ihr Projekt?',
			],
			replies: [
				{ label: '📝 Anfrage senden', next: 'lead' },
				{ label: '✈️ Auf Telegram schreiben', next: 'telegram' },
				{ label: '↩️ Zurück', next: 'start' },
			],
		},
		site: {
			bot: [
				'Klasse! 🌐',
				'Ich baue Websites **von Grund auf**, nicht aus Fertigbausteinen: Landings, Multipage-Seiten, Shops. Sauberer Code, hohe Geschwindigkeit, **SEO** und ein einfaches Admin-Panel.',
				'Ich binde beliebige Integrationen an: Zahlungen, CRM, Kampagnen, externe APIs.',
				'Möchten Sie eine Einschätzung für Ihre Aufgabe?',
			],
			replies: [
				{ label: '📝 Anfrage senden', next: 'lead' },
				{ label: '✈️ Auf Telegram schreiben', next: 'telegram' },
				{ label: '↩️ Zurück', next: 'start' },
			],
		},
		widget: {
			bot: [
				'Tolle Idee! ⚙️',
				'Ein Widget-Bot wird direkt auf Ihrer Website eingebettet und arbeitet für die Conversion: antwortet, sammelt Kontakte, führt zur Anfrage. Auf Wunsch mit **KI**.',
				'Übrigens — genau so einen Widget wie diesen baue ich 😉',
				'Soll ich einen für Ihre Website machen?',
			],
			replies: [
				{ label: '📝 Anfrage senden', next: 'lead' },
				{ label: '✈️ Auf Telegram schreiben', next: 'telegram' },
				{ label: '↩️ Zurück', next: 'start' },
			],
		},
		about: {
			bot: [
				'Gerne helfe ich 💬',
				'Sabrmotion ist schlüsselfertige Entwicklung mit Fokus auf Ergebnisse: Bots, Websites und Widgets, die **Leads und Umsatz** bringen — nicht nur gut aussehen.',
				'Sie arbeiten direkt mit der Person, die den Code schreibt.',
				'Wie geht es weiter?',
			],
			replies: [
				{ label: '🤖 Telegram-Bot', next: 'bot' },
				{ label: '🌐 Website / Landing', next: 'site' },
				{ label: '⚙️ Widget-Bot', next: 'widget' },
				{ label: '📝 Anfrage senden', next: 'lead' },
			],
		},
		lead: {
			bot: [
				'Super! 🚀',
				`Schreiben Sie mir auf Telegram **${TG_HANDLE}** — so antworte ich am schnellsten, meist innerhalb weniger Stunden.`,
				'Tippen Sie unten auf den Button 👇',
			],
			replies: [
				{ label: '✈️ Telegram öffnen', next: 'telegram' },
				{ label: '↩️ Von vorn', next: 'start' },
			],
		},
	},
}

const headerStatus: Record<Lang, string> = {
	ru: 'Консультант · Online',
	en: 'Consultant · Online',
	de: 'Berater · Online',
}

const inputPlaceholder: Record<Lang, string> = {
	ru: 'Напишите свой вопрос…',
	en: 'Type your question…',
	de: 'Ihre Frage eingeben…',
}

const errorText: Record<Lang, string> = {
	ru: '⚠️ Не удалось ответить. Напишите напрямую: @sabrmot1on',
	en: "⚠️ Couldn't respond. Message me directly: @sabrmot1on",
	de: '⚠️ Keine Antwort möglich. Schreiben Sie direkt: @sabrmot1on',
}

const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

export default function ChatBot() {
	const { lang } = useLanguage()
	const [open, setOpen] = useState(false)
	const [messages, setMessages] = useState<Msg[]>([])
	const [replies, setReplies] = useState<Reply[]>([])
	const [typing, setTyping] = useState(false)
	const [input, setInput] = useState('')
	const [loading, setLoading] = useState(false)

	// Teaser bubble
	const [teaserShown, setTeaserShown] = useState(false)
	const [teaserDismissed, setTeaserDismissed] = useState(false)
	const [teaserIdx, setTeaserIdx] = useState(0)

	const bottomRef = useRef<HTMLDivElement>(null)
	const inputRef = useRef<HTMLTextAreaElement>(null)
	const runId = useRef(0)

	/* Run a scripted step with typing indicator between bubbles */
	const runStep = useCallback(async (stepKey: string, currentLang: Lang) => {
		const myRun = ++runId.current
		const step = flows[currentLang][stepKey]
		if (!step) return
		setReplies([])
		for (const text of step.bot) {
			setTyping(true)
			await delay(Math.min(1100, 520 + text.length * 9))
			if (runId.current !== myRun) return
			setTyping(false)
			setMessages(prev => [...prev, { from: 'bot', text }])
			await delay(220)
			if (runId.current !== myRun) return
		}
		setReplies(step.replies ?? [])
	}, [])

	/* Open chat (also from Pricing custom event) */
	const openChat = useCallback(() => {
		setOpen(true)
		setTeaserDismissed(true)
	}, [])

	useEffect(() => {
		const handler = () => openChat()
		window.addEventListener('open-chatbot', handler)
		return () => window.removeEventListener('open-chatbot', handler)
	}, [openChat])

	/* Kick off the dialog the first time the panel opens */
	useEffect(() => {
		if (open && messages.length === 0 && !typing) {
			runStep('start', lang)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [open])

	/* Reset & restart conversation when language changes */
	useEffect(() => {
		runId.current++
		setMessages([])
		setReplies([])
		setTyping(false)
		setTeaserIdx(0)
		if (open) runStep('start', lang)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [lang])

	/* Teaser: show after a delay, then rotate phrases */
	useEffect(() => {
		const t = setTimeout(() => setTeaserShown(true), 2500)
		return () => clearTimeout(t)
	}, [])

	useEffect(() => {
		if (!teaserShown || teaserDismissed || open) return
		const id = setInterval(
			() => setTeaserIdx(i => (i + 1) % teasers[lang].length),
			5000,
		)
		return () => clearInterval(id)
	}, [teaserShown, teaserDismissed, open, lang])

	/* Auto-scroll */
	useEffect(() => {
		bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
	}, [messages, typing, replies])

	const onReply = (r: Reply) => {
		if (r.next === 'telegram') {
			window.open(TG_LINK, '_blank')
			return
		}
		setMessages(prev => [...prev, { from: 'user', text: r.label }])
		setReplies([])
		runStep(r.next, lang)
	}

	/* Free-text question → answered by the AI route, streamed */
	const sendFree = async (text: string) => {
		const trimmed = text.trim()
		if (!trimmed || loading) return
		runId.current++ // cancel any pending scripted step
		setReplies([])
		const history = [...messages, { from: 'user' as const, text: trimmed }]
		setMessages(history)
		setInput('')
		setLoading(true)
		setTyping(true)

		let started = false
		try {
			const res = await fetch('/api/chat', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					messages: history.map(m => ({
						role: m.from === 'user' ? 'user' : 'assistant',
						content: m.text,
					})),
				}),
			})
			if (!res.ok || !res.body) throw new Error('API error')

			const reader = res.body.getReader()
			const decoder = new TextDecoder()
			let reply = ''
			while (true) {
				const { done, value } = await reader.read()
				if (done) break
				reply += decoder.decode(value, { stream: true })
				if (!started) {
					setTyping(false)
					started = true
					setMessages(prev => [...prev, { from: 'bot', text: reply }])
				} else {
					setMessages(prev => {
						const u = [...prev]
						u[u.length - 1] = { from: 'bot', text: reply }
						return u
					})
				}
			}
		} catch {
			setTyping(false)
			setMessages(prev => [...prev, { from: 'bot', text: errorText[lang] }])
		} finally {
			setLoading(false)
			setTyping(false)
		}
	}

	const onInputKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault()
			sendFree(input)
		}
	}

	const showTeaser = teaserShown && !teaserDismissed && !open

	return (
		<>
			{/* ── Chat panel ─────────────────────────────────── */}
			<AnimatePresence>
				{open && (
					<motion.div
						key='chat-panel'
						initial={{ opacity: 0, y: 16, scale: 0.95 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: 16, scale: 0.95 }}
						transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
						style={{
							position: 'fixed',
							bottom: 'calc(52px + 2rem)',
							right: '2.25rem',
							zIndex: 300,
							width: 'min(380px, calc(100vw - 2rem))',
							height: 'min(540px, calc(100vh - 11rem))',
							background: 'var(--card)',
							border: '1px solid rgba(255,255,255,0.1)',
							borderRadius: '1.5rem',
							display: 'flex',
							flexDirection: 'column',
							overflow: 'hidden',
							boxShadow:
								'0 24px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(74,222,128,0.08)',
						}}
					>
						{/* Header */}
						<div
							style={{
								padding: '1rem 1.25rem',
								borderBottom: '1px solid rgba(255,255,255,0.07)',
								display: 'flex',
								alignItems: 'center',
								gap: '0.75rem',
								flexShrink: 0,
								background: 'rgba(74,222,128,0.04)',
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
									fontSize: '0.9rem',
									color: '#0a0a0a',
									flexShrink: 0,
								}}
							>
								S
							</div>
							<div style={{ flex: 1 }}>
								<p
									style={{
										fontFamily: 'var(--font-syne)',
										fontWeight: 700,
										fontSize: '0.9rem',
										color: 'var(--text)',
										margin: 0,
										lineHeight: 1.2,
									}}
								>
									Sabrmotion
								</p>
								<p
									style={{
										fontFamily: 'var(--font-inter)',
										fontSize: '0.72rem',
										color: 'var(--accent)',
										margin: 0,
										display: 'flex',
										alignItems: 'center',
										gap: '0.3rem',
									}}
								>
									<span
										style={{
											width: '6px',
											height: '6px',
											borderRadius: '50%',
											background: 'var(--accent)',
											display: 'inline-block',
											boxShadow: '0 0 6px rgba(74,222,128,0.7)',
										}}
									/>
									{headerStatus[lang]}
								</p>
							</div>
							<button
								onClick={() => setOpen(false)}
								aria-label='Close chat'
								style={{
									background: 'none',
									border: 'none',
									color: 'var(--muted)',
									fontSize: '1.1rem',
									cursor: 'pointer',
									padding: '4px',
									borderRadius: '6px',
									lineHeight: 1,
								}}
							>
								✕
							</button>
						</div>

						{/* Messages */}
						<div
							style={{
								flex: 1,
								overflowY: 'auto',
								padding: '1rem',
								display: 'flex',
								flexDirection: 'column',
								gap: '0.6rem',
							}}
						>
							<AnimatePresence initial={false}>
								{messages.map((msg, i) => (
									<motion.div
										key={i}
										initial={{ opacity: 0, y: 8 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.25 }}
										style={{
											display: 'flex',
											justifyContent:
												msg.from === 'user' ? 'flex-end' : 'flex-start',
										}}
									>
										<div
											style={{
												maxWidth: '85%',
												padding: '0.625rem 0.875rem',
												borderRadius:
													msg.from === 'user'
														? '1rem 0.25rem 1rem 1rem'
														: '0.25rem 1rem 1rem 1rem',
												background:
													msg.from === 'user'
														? 'rgba(74,222,128,0.14)'
														: 'rgba(255,255,255,0.06)',
												border:
													msg.from === 'user'
														? '1px solid rgba(74,222,128,0.25)'
														: '1px solid rgba(255,255,255,0.07)',
												fontFamily: 'var(--font-inter)',
												fontSize: '0.83rem',
												color:
													msg.from === 'user'
														? 'var(--text)'
														: 'var(--text-sec)',
												lineHeight: 1.6,
											}}
										>
											{msg.from === 'bot' ? (
												<FormattedText text={msg.text} />
											) : (
												renderInline(msg.text, `m-${i}`)
											)}
										</div>
									</motion.div>
								))}
							</AnimatePresence>

							{/* Typing indicator */}
							{typing && (
								<motion.div
									initial={{ opacity: 0, y: 8 }}
									animate={{ opacity: 1, y: 0 }}
									style={{ display: 'flex', justifyContent: 'flex-start' }}
								>
									<div
										style={{
											padding: '0.7rem 0.9rem',
											borderRadius: '0.25rem 1rem 1rem 1rem',
											background: 'rgba(255,255,255,0.06)',
											border: '1px solid rgba(255,255,255,0.07)',
										}}
									>
										<span
											style={{
												display: 'flex',
												gap: '4px',
												alignItems: 'center',
												height: '8px',
											}}
										>
											{[0, 1, 2].map(j => (
												<motion.span
													key={j}
													animate={{ y: [0, -4, 0] }}
													transition={{
														duration: 0.6,
														repeat: Infinity,
														delay: j * 0.14,
													}}
													style={{
														width: '5px',
														height: '5px',
														borderRadius: '50%',
														background: 'var(--muted)',
														display: 'block',
													}}
												/>
											))}
										</span>
									</div>
								</motion.div>
							)}

							<div ref={bottomRef} />
						</div>

						{/* Quick replies */}
						<AnimatePresence>
							{replies.length > 0 && (
								<motion.div
									initial={{ opacity: 0, y: 8 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0 }}
									style={{
										padding: '0.5rem 0.875rem 0.875rem',
										display: 'flex',
										flexWrap: 'wrap',
										gap: '0.5rem',
										flexShrink: 0,
										borderTop: '1px solid rgba(255,255,255,0.06)',
										paddingTop: '0.75rem',
									}}
								>
									{replies.map(r => (
										<motion.button
											key={r.label}
											onClick={() => onReply(r)}
											whileTap={{ scale: 0.95 }}
											style={{
												fontFamily: 'var(--font-inter)',
												fontSize: '0.78rem',
												fontWeight: 500,
												color: 'var(--accent)',
												background: 'rgba(74,222,128,0.08)',
												border: '1px solid rgba(74,222,128,0.3)',
												borderRadius: '2rem',
												padding: '0.4rem 0.85rem',
												cursor: 'pointer',
												transition: 'background 0.18s, border-color 0.18s',
											}}
											onMouseEnter={e => {
												const t = e.currentTarget as HTMLElement
												t.style.background = 'rgba(74,222,128,0.16)'
												t.style.borderColor = 'rgba(74,222,128,0.55)'
											}}
											onMouseLeave={e => {
												const t = e.currentTarget as HTMLElement
												t.style.background = 'rgba(74,222,128,0.08)'
												t.style.borderColor = 'rgba(74,222,128,0.3)'
											}}
										>
											{r.label}
										</motion.button>
									))}
								</motion.div>
							)}
						</AnimatePresence>

						{/* Text input — free question answered by AI */}
						<div
							style={{
								padding: '0.75rem 0.875rem',
								borderTop: '1px solid rgba(255,255,255,0.06)',
								display: 'flex',
								gap: '0.5rem',
								alignItems: 'flex-end',
								flexShrink: 0,
							}}
						>
							<textarea
								ref={inputRef}
								value={input}
								onChange={e => setInput(e.target.value)}
								onKeyDown={onInputKeyDown}
								placeholder={inputPlaceholder[lang]}
								rows={1}
								disabled={loading}
								style={{
									flex: 1,
									background: 'rgba(255,255,255,0.05)',
									border: '1px solid rgba(255,255,255,0.09)',
									borderRadius: '0.75rem',
									padding: '0.55rem 0.875rem',
									fontFamily: 'var(--font-inter)',
									fontSize: '0.83rem',
									color: 'var(--text)',
									outline: 'none',
									resize: 'none',
									lineHeight: 1.5,
									maxHeight: '90px',
									overflowY: 'auto',
									transition: 'border-color 0.2s',
								}}
								onFocus={e =>
									(e.currentTarget.style.borderColor = 'rgba(74,222,128,0.4)')
								}
								onBlur={e =>
									(e.currentTarget.style.borderColor = 'rgba(255,255,255,0.09)')
								}
							/>
							<motion.button
								onClick={() => sendFree(input)}
								disabled={!input.trim() || loading}
								whileHover={{ scale: 1.07 }}
								whileTap={{ scale: 0.93 }}
								aria-label='Send'
								style={{
									width: '36px',
									height: '36px',
									borderRadius: '50%',
									background:
										input.trim() && !loading
											? 'var(--accent)'
											: 'rgba(255,255,255,0.07)',
									border: 'none',
									cursor: input.trim() && !loading ? 'pointer' : 'default',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									flexShrink: 0,
									transition: 'background 0.2s',
								}}
							>
								<svg
									width='16'
									height='16'
									viewBox='0 0 24 24'
									fill='none'
									stroke={input.trim() && !loading ? '#0a0a0a' : 'var(--muted)'}
									strokeWidth='2.2'
									strokeLinecap='round'
									strokeLinejoin='round'
								>
									<line x1='22' y1='2' x2='11' y2='13' />
									<polygon points='22 2 15 22 11 13 2 9 22 2' />
								</svg>
							</motion.button>
						</div>
					</motion.div>
				)}
			</AnimatePresence>

			{/* ── Teaser speech bubble ────────────────────────── */}
			<AnimatePresence>
				{showTeaser && (
					<motion.div
						key='teaser'
						initial={{ opacity: 0, y: 12, scale: 0.9 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: 12, scale: 0.9 }}
						transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
						style={{
							position: 'fixed',
							bottom: 'calc(2.25rem + 16px)',
							right: 'calc(2.25rem + 64px)',
							zIndex: 299,
							maxWidth: 'min(240px, calc(100vw - 7rem))',
							background: 'var(--card)',
							border: '1px solid rgba(74,222,128,0.28)',
							borderRadius: '1rem 1rem 0.25rem 1rem',
							padding: '0.75rem 2rem 0.75rem 0.9rem',
							boxShadow:
								'0 8px 28px rgba(0,0,0,0.45), 0 0 18px rgba(74,222,128,0.12)',
						}}
					>
						<button
							onClick={() => setTeaserDismissed(true)}
							aria-label='Dismiss'
							style={{
								position: 'absolute',
								top: '6px',
								right: '8px',
								background: 'none',
								border: 'none',
								color: 'var(--muted)',
								fontSize: '0.8rem',
								cursor: 'pointer',
								lineHeight: 1,
								padding: '2px',
							}}
						>
							✕
						</button>
						<button
							onClick={openChat}
							style={{
								all: 'unset',
								cursor: 'pointer',
								display: 'block',
							}}
						>
							<AnimatePresence mode='wait'>
								<motion.span
									key={teaserIdx}
									initial={{ opacity: 0, y: 6 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -6 }}
									transition={{ duration: 0.3 }}
									style={{
										fontFamily: 'var(--font-inter)',
										fontSize: '0.82rem',
										color: 'var(--text-sec)',
										lineHeight: 1.5,
										display: 'block',
									}}
								>
									{teasers[lang][teaserIdx]}
								</motion.span>
							</AnimatePresence>
						</button>
					</motion.div>
				)}
			</AnimatePresence>

			{/* ── Floating button ─────────────────────────────── */}
			<motion.button
				onClick={() => (open ? setOpen(false) : openChat())}
				aria-label='Open chat'
				style={{
					position: 'fixed',
					bottom: '2.25rem',
					right: '2.25rem',
					zIndex: 300,
					width: '52px',
					height: '52px',
					borderRadius: '50%',
					background: 'var(--accent)',
					border: 'none',
					cursor: 'pointer',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
				animate={
					showTeaser
						? {
								boxShadow: [
									'0 4px 20px rgba(74,222,128,0.35)',
									'0 4px 30px rgba(74,222,128,0.7)',
									'0 4px 20px rgba(74,222,128,0.35)',
								],
							}
						: { boxShadow: '0 4px 24px rgba(74,222,128,0.35)' }
				}
				transition={
					showTeaser
						? { duration: 2, repeat: Infinity, ease: 'easeInOut' }
						: { duration: 0.3 }
				}
				whileHover={{ scale: 1.08 }}
				whileTap={{ scale: 0.94 }}
			>
				<AnimatePresence mode='wait'>
					{open ? (
						<motion.span
							key='close'
							initial={{ rotate: -90, opacity: 0 }}
							animate={{ rotate: 0, opacity: 1 }}
							exit={{ rotate: 90, opacity: 0 }}
							transition={{ duration: 0.18 }}
							style={{
								fontSize: '1.1rem',
								color: '#0a0a0a',
								lineHeight: 1,
								fontWeight: 700,
							}}
						>
							✕
						</motion.span>
					) : (
						<motion.svg
							key='chat'
							initial={{ scale: 0.7, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.7, opacity: 0 }}
							transition={{ duration: 0.18 }}
							width='22'
							height='22'
							viewBox='0 0 24 24'
							fill='none'
							stroke='#0a0a0a'
							strokeWidth='2.2'
							strokeLinecap='round'
							strokeLinejoin='round'
						>
							<path d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z' />
						</motion.svg>
					)}
				</AnimatePresence>
			</motion.button>
		</>
	)
}
