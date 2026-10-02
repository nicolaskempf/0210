import { useState } from 'react'
import type { Ticket } from '../types'
import { TicketTable } from '../components/TicketTable'

interface TicketsProps {
  tickets: Ticket[]
  onSelect: (ticket: Ticket) => void
}

export function Tickets({ tickets, onSelect }: TicketsProps) {
  const [search, setSearch] = useState('')
  const filtered = tickets.filter(t =>
    `${t.id} ${t.title} ${t.requester} ${t.category}`.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="space-y-5">
      <div>
        <p className="text-sm font-semibold text-indigo-600">Atendimento</p>
        <h2 className="mt-1 text-2xl font-bold">Todos os chamados</h2>
      </div>
      <input className="input max-w-xl" value={search} onChange={e => setSearch(e.target.value)} placeholder="Buscar por chamado, solicitante ou categoria..." />
      <TicketTable tickets={filtered} onSelect={onSelect} />
    </div>
  )
}