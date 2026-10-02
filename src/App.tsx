import { useState } from 'react'
import type { Ticket } from './types'
import { tickets } from './data/tickets'
import { Sidebar } from './components/Sidebar'
import { Topbar } from './components/Topbar'
import { Dashboard } from './pages/Dashboard'
import { Tickets } from './pages/Tickets'
import { NewTicket } from './pages/NewTicket'
import { TicketDetail } from './pages/TicketDetail'

export default function App() {
  const [page, setPage] = useState('dashboard')
  const [selected, setSelected] = useState<Ticket | null>(null)

  function openTicket(ticket: Ticket) {
    setSelected(ticket)
    setPage('detail')
  }

  function navigate(next: string) {
    setSelected(null)
    setPage(next)
  }

  let content
  if (page === 'tickets') content = <Tickets tickets={tickets} onSelect={openTicket} />
  else if (page === 'new') content = <NewTicket onCancel={() => navigate('dashboard')} onCreated={() => navigate('dashboard')} />
  else if (page === 'detail' && selected) content = <TicketDetail ticket={selected} onBack={() => navigate('tickets')} />
  else content = <Dashboard tickets={tickets} onSelect={openTicket} onNew={() => navigate('new')} />

  return (
    <div className="min-h-screen md:flex">
      <Sidebar page={page} onNavigate={navigate} />
      <main className="min-w-0 flex-1">
        <Topbar onNew={() => navigate('new')} />
        <div className="p-4 md:p-8">{content}</div>
      </main>
    </div>
  )
}