import { useEffect, useRef, useState } from 'react'
import { useApp } from '../context/AppContext'
import { useTranslations } from '../hooks/useTranslations'
import './AssistantPage.css'

interface Message {
  role: 'user' | 'assistant'
  text: string
}

function getResponse(question: string, t: ReturnType<typeof useTranslations>): string {
  const q = question.toLowerCase()
  if (q.includes('penting') || q.includes('important') || q.includes('hari ini') || q.includes('today')) {
    return t.assistant.responses.important
  }
  if (q.includes('str') || q.includes('bantuan') || q.includes('aid') || q.includes('layak') || q.includes('eligible')) {
    return t.assistant.responses.str
  }
  if (q.includes('dokumen') || q.includes('document') || q.includes('lengkap')) {
    return t.assistant.responses.documents
  }
  if (q.includes('temujanji') || q.includes('klinik') || q.includes('appointment') || q.includes('clinic')) {
    return t.assistant.responses.appointment
  }
  return t.assistant.responses.default
}

export function AssistantPage() {
  const { user } = useApp()
  const t = useTranslations()
  const [input, setInput] = useState('')
  const chatRef = useRef<HTMLDivElement>(null)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      text: `${t.home.greeting} ${user.name}! ${t.assistant.subtitle}`,
    },
  ])

  useEffect(() => {
    chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages])

  const sendMessage = (text: string) => {
    if (!text.trim()) return
    const response = getResponse(text, t)
    setMessages((prev) => [
      ...prev,
      { role: 'user', text },
      { role: 'assistant', text: response },
    ])
    setInput('')
  }

  return (
    <div className="assistant-page">
      <header className="page-header">
        <h1>🤖 {t.assistant.title}</h1>
        <p>{t.assistant.subtitle}</p>
      </header>

      <div className="assistant-samples">
        {t.assistant.sampleQuestions.map((q) => (
          <button key={q} className="sample-chip" onClick={() => sendMessage(q)}>
            {q}
          </button>
        ))}
      </div>

      <div className="chat-messages" ref={chatRef}>
        {messages.map((msg, i) => (
          <div key={i} className={`chat-bubble chat-bubble--${msg.role}`}>
            {msg.role === 'assistant' && <span className="chat-avatar">🤖</span>}
            <p>{msg.text}</p>
          </div>
        ))}
      </div>

      <div className="chat-input-bar">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage(input)}
          placeholder={t.assistant.placeholder}
          aria-label={t.assistant.placeholder}
        />
        <button className="btn btn--primary" onClick={() => sendMessage(input)}>
          {t.assistant.send}
        </button>
      </div>

      <p className="assistant-footer">{t.assistant.poweredBy}</p>
    </div>
  )
}
